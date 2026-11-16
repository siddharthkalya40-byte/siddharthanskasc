import { useMemo, useState } from 'react';
import { BookOpen, ChevronRight, Search, X } from 'lucide-react';
import {
  AcademicStream,
  DegreeLevel,
  PROGRAMMES,
  Programme,
} from '../data/collegeData';

interface AcademicsSectionProps {
  onApplyForProgramme: (programmeTitle: string) => void;
}

const DEGREE_LEVELS: { value: DegreeLevel; label: string }[] = [
  { value: 'UG', label: 'Undergraduate (UG)' },
  { value: 'PG', label: 'Postgraduate (PG)' },
  { value: 'Research', label: 'Doctoral & Research' },
];

const STREAMS: AcademicStream[] = [
  'All',
  'Computing & IT',
  'Commerce & Finance',
  'Management',
  'Sciences & Humanities',
];

export function AcademicsSection({ onApplyForProgramme }: AcademicsSectionProps) {
  const [selectedLevel, setSelectedLevel] = useState<DegreeLevel>('UG');
  const [selectedStream, setSelectedStream] = useState<AcademicStream>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProgramme, setActiveProgramme] = useState<Programme | null>(null);

  const filteredProgrammes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PROGRAMMES.filter((prog) => {
      const matchesLevel = prog.level === selectedLevel;
      const matchesStream = selectedStream === 'All' || prog.stream === selectedStream;
      const matchesQuery =
        query.length === 0 ||
        prog.title.toLowerCase().includes(query) ||
        prog.department.toLowerCase().includes(query) ||
        prog.code.toLowerCase().includes(query);
      return matchesLevel && matchesStream && matchesQuery;
    });
  }, [selectedLevel, selectedStream, searchQuery]);

  return (
    <section id="academics" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E4DED3]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E4DED3]">
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#5C5852]">
              Academics & Curriculum <span aria-hidden="true">·</span> CBCS & OBE Framework
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1A1917] [text-wrap:balance]">
              Programmes of Study
            </h2>
            <p className="mt-2.5 text-base text-[#4A4640] max-w-2xl">
              Autonomous curricula revised annually with industry Boards of Studies, integrating NPTEL credit transfers and professional certifications.
            </p>
          </div>

          {/* Degree Level Segmented Control */}
          <div
            role="tablist"
            aria-label="Degree Level"
            className="inline-flex items-center p-1 bg-[#EDE8DF] rounded-lg border border-[#E0D9CC] self-start lg:self-auto"
          >
            {DEGREE_LEVELS.map((lvl) => {
              const isActive = selectedLevel === lvl.value;
              return (
                <button
                  key={lvl.value}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => {
                    setSelectedLevel(lvl.value);
                    setSelectedStream('All');
                  }}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#14326B] shadow-xs'
                      : 'text-[#5C5852] hover:text-[#1A1917]'
                  }`}
                >
                  {lvl.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stream Filter & Search Toolbar */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {STREAMS.map((stream) => {
              const active = selectedStream === stream;
              return (
                <button
                  key={stream}
                  type="button"
                  onClick={() => setSelectedStream(stream)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#14326B] text-white border-[#14326B]'
                      : 'bg-white text-[#4A4640] border-[#E4DED3] hover:border-[#BDB4A4] hover:text-[#1A1917]'
                  }`}
                >
                  {stream === 'All' ? 'All Streams' : stream}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#5C5852] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course or department..."
              aria-label="Search programmes"
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#E4DED3] rounded-lg text-[#1A1917] placeholder:text-[#78736A] focus:outline-none focus:border-[#14326B]"
            />
          </div>
        </div>

        {/* Programmes Catalog Grid */}
        {filteredProgrammes.length === 0 ? (
          <div className="mt-10 bg-white border border-[#E4DED3] rounded-xl p-10 text-center">
            <BookOpen className="w-8 h-8 text-[#5C5852] mx-auto mb-3" strokeWidth={1.5} />
            <p className="font-serif text-lg font-medium text-[#1A1917]">
              No matching programmes found
            </p>
            <p className="text-sm text-[#5C5852] mt-1">
              Try clearing your search query or switching back to All Streams.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedStream('All');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-[#14326B] bg-[#F1EDE6] rounded-lg hover:bg-[#E7E1D6] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProgrammes.map((prog) => (
              <article
                key={prog.id}
                className="bg-white border border-[#E4DED3] rounded-xl p-6 flex flex-col justify-between hover:border-[#B9B0A0] transition-colors duration-150"
              >
                <div>
                  {/* Clean Unboxed Metadata Line (Zero-Pill Discipline) */}
                  <p className="text-xs text-[#5C5852] font-mono tabular-nums">
                    {prog.code} <span aria-hidden="true">·</span> {prog.stream}
                  </p>

                  <h3 className="mt-2.5 font-serif text-xl font-semibold text-[#1A1917] leading-snug">
                    {prog.title}
                  </h3>

                  <p className="mt-1.5 text-xs font-medium text-[#14326B]">
                    {prog.department}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[#4A4640]">
                    {prog.overview}
                  </p>

                  {prog.collaboration && (
                    <p className="mt-3 pt-3 border-t border-[#EFEBE3] text-xs font-medium text-[#78350F]">
                      {prog.collaboration}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-[#EFEBE3] flex items-center justify-between gap-4">
                  <span className="text-xs text-[#5C5852] tabular-nums">
                    {prog.duration} <span aria-hidden="true">·</span> {prog.credits} Credits
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveProgramme(prog)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#14326B] hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Curriculum
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Programme Detail Modal */}
      {activeProgramme && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="programme-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6"
          onClick={() => setActiveProgramme(null)}
        >
          <div
            className="bg-[#FAF8F5] border border-[#E4DED3] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E4DED3]">
              <div>
                <p className="font-mono text-xs text-[#5C5852]">
                  {activeProgramme.code} <span aria-hidden="true">·</span> {activeProgramme.level} Programme <span aria-hidden="true">·</span> {activeProgramme.credits} Credits
                </p>
                <h3
                  id="programme-modal-title"
                  className="mt-1.5 font-serif text-2xl sm:text-3xl font-semibold text-[#1A1917]"
                >
                  {activeProgramme.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#14326B]">
                  {activeProgramme.department}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close programme details"
                onClick={() => setActiveProgramme(null)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-[#E4DED3] bg-white text-[#1A1917] hover:bg-[#F1EDE6] cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5C5852]">
                  Programme Overview
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#1A1917]">
                  {activeProgramme.overview}
                </p>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#E4DED3]">
                <div>
                  <dt className="text-xs text-[#5C5852]">Duration</dt>
                  <dd className="mt-1 text-sm font-medium text-[#1A1917]">
                    {activeProgramme.duration}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#5C5852]">Eligibility</dt>
                  <dd className="mt-1 text-sm font-medium text-[#1A1917]">
                    {activeProgramme.eligibility}
                  </dd>
                </div>
              </dl>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5C5852]">
                    Core Syllabus Modules
                  </h4>
                  <ul className="mt-2.5 space-y-2 text-sm text-[#1A1917]">
                    {activeProgramme.coreSubjects.map((subj) => (
                      <li key={subj} className="pb-1.5 border-b border-[#EFEBE3] last:border-b-0">
                        {subj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5C5852]">
                    Graduate Career Pathways
                  </h4>
                  <ul className="mt-2.5 space-y-2 text-sm text-[#1A1917]">
                    {activeProgramme.careerOutcomes.map((role) => (
                      <li key={role} className="pb-1.5 border-b border-[#EFEBE3] last:border-b-0">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E4DED3] flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveProgramme(null)}
                className="px-4 py-2.5 text-sm font-medium text-[#4A4640] bg-white border border-[#E4DED3] rounded-lg hover:bg-[#F1EDE6] cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeProgramme.title;
                  setActiveProgramme(null);
                  onApplyForProgramme(title);
                }}
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#14326B] rounded-lg hover:bg-[#0E244F] cursor-pointer"
              >
                Apply for {activeProgramme.code}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
