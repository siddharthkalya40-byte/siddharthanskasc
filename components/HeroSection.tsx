import { ArrowRight } from 'lucide-react';
import { COLLEGE_IMAGES } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenAdmissions: (defaultProgramme?: string) => void;
}

const KEY_METRICS = [
  {
    value: '32+ UG · 13 PG',
    label: 'Autonomous Programmes',
    note: 'CBCS & Outcome Based Education',
  },
  {
    value: '13.72 LPA',
    label: 'Highest Campus Package',
    note: '2025–26 Placement Cohort',
  },
  {
    value: '112+',
    label: 'Recruiting Organisations',
    note: 'Global IT, BFSI & Core Partners',
  },
  {
    value: 'NAAC ‘A’',
    label: 'Accredited Institution',
    note: 'UGC Autonomous · Bharathiar Univ.',
  },
];

export function HeroSection({ onOpenAdmissions }: HeroSectionProps) {
  return (
    <section id="top" className="border-b border-[#E4DED3] bg-[#FAF8F5]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-10 pb-12 lg:pt-14 lg:pb-16">
        {/* 12-Column Editorial Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#5C5852] mb-5">
                Autonomous Institution <span aria-hidden="true">·</span> Affiliated to Bharathiar University <span aria-hidden="true">·</span> Est. 1997
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight text-[#1A1917] [text-wrap:balance] max-w-xl">
                Sree Krishna Arts and Science College
              </h1>

              <p className="mt-5 text-lg sm:text-xl font-serif italic text-[#14326B]">
                “Fitness for Purpose — Knowledge, Love and Service”
              </p>

              <p className="mt-5 text-base leading-relaxed text-[#4A4640] max-w-xl">
                Situated in the eco-friendly foothills of Kuniamuthur, Coimbatore, Sree Krishna Arts and Science College unites autonomous academic rigour with industry-integrated curricula across Computing, Commerce, Management, Biosciences, and Humanities.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4DED3] flex flex-wrap items-center gap-4">
              <a
                href="#academics"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#14326B] border-[#ffffff] rounded-lg hover:bg-[#0E244F] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14326B]"
              >
                Explore Programmes
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onOpenAdmissions()}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#14326B] bg-white border border-[#D4CCC0] rounded-lg hover:bg-[#F3EFE8] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14326B]"
              >
                Admissions 2026–27
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] rounded-xl overflow-hidden border border-[#E4DED3] bg-[#ECE7DD]">
              <ResilientImage
                src={COLLEGE_IMAGES.heroCampus}
                alt="Main Academic Block and Quadrangle Lawn at Sree Krishna Arts and Science College, Coimbatore"
                fallbackTitle="Main Academic Quadrangle"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
            <p className="mt-2.5 text-xs font-serif italic text-[#5C5852]">
              Fig. 1 — Main Academic Quadrangle, Sugunapuram Campus, Kuniamuthur, Coimbatore.
            </p>
          </div>
        </div>

        {/* Full-Width 4-Column Proof Strip */}
        <div className="mt-10 pt-8 border-t border-[#E4DED3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="bg-white border border-[#E4DED3] rounded-lg px-5 py-4"
            >
              <p className="font-mono text-xl sm:text-2xl font-medium text-[#14326B] tabular-nums tracking-tight">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#1A1917]">{metric.label}</p>
              <p className="mt-0.5 text-xs text-[#5C5852]">{metric.note}</p>
            </div>
          ))}
        </div>

        {/* Operational Utility Ribbon */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-5 py-3.5 bg-[#F1EDE6] border border-[#E4DED3] rounded-lg text-xs text-[#4A4640]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-[#1A1917]">2026–27 Academic Session</span>
            <span aria-hidden="true">·</span>
            <span>Campus Office: Mon–Sat, 08:45–16:30 IST</span>
            <span aria-hidden="true">·</span>
            <span>Kuniamuthur, Coimbatore – 641 008</span>
          </div>
          <a
            href="#notices"
            className="font-medium text-[#14326B] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            View Notices & Academic Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
