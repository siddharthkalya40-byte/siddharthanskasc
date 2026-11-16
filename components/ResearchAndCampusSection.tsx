import { useState } from 'react';
import { CAMPUS_FACILITIES, RESEARCH_PILLARS } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

export function ResearchAndCampusSection() {
  const [activePillarId, setActivePillarId] = useState(RESEARCH_PILLARS[0].id);
  const [activeFacilityId, setActiveFacilityId] = useState(CAMPUS_FACILITIES[0].id);

  const currentPillar =
    RESEARCH_PILLARS.find((p) => p.id === activePillarId) ?? RESEARCH_PILLARS[0];
  const currentFacility =
    CAMPUS_FACILITIES.find((f) => f.id === activeFacilityId) ?? CAMPUS_FACILITIES[0];

  return (
    <>
      {/* Research, Innovation & IQAC */}
      <section id="research" className="py-16 lg:py-24 bg-white border-b border-[#E4DED3]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider uppercase text-[#5C5852]">
              Research, Innovation & IQAC <span aria-hidden="true">·</span> Quality Governance
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1A1917] [text-wrap:balance]">
              Scholarship, Patents & Continuous Academic Renewal
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Numbered Editorial Index */}
            <div className="lg:col-span-5 divide-y divide-[#E4DED3] border-y border-[#E4DED3]">
              {RESEARCH_PILLARS.map((pillar) => {
                const isSelected = pillar.id === activePillarId;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`w-full text-left py-5 px-4 transition-colors duration-150 cursor-pointer flex items-baseline gap-4 ${
                      isSelected ? 'bg-[#FAF8F5]' : 'hover:bg-[#FAF8F5]/60'
                    }`}
                  >
                    <span className="font-mono text-sm font-medium text-[#14326B] tabular-nums shrink-0">
                      {pillar.index}.
                    </span>
                    <div>
                      <span
                        className={`block font-serif text-lg font-semibold ${
                          isSelected ? 'text-[#14326B]' : 'text-[#1A1917]'
                        }`}
                      >
                        {pillar.title}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-[#5C5852]">
                        {pillar.summary}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Detail Panel */}
            <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E4DED3] rounded-xl p-6 sm:p-8">
              <p className="font-mono text-xs text-[#5C5852]">
                {currentPillar.index} <span aria-hidden="true">·</span> Institutional Quality Pillar
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#1A1917]">
                {currentPillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#4A4640]">
                {currentPillar.summary}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5852]">
                {currentPillar.details}
              </p>

              <div className="mt-8 pt-6 border-t border-[#E4DED3] grid grid-cols-1 sm:grid-cols-3 gap-6">
                {currentPillar.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-mono text-2xl font-medium text-[#14326B] tabular-nums">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-[#5C5852]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Infrastructure & Student Life */}
      <section id="campus" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E4DED3]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E4DED3]">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#5C5852]">
                Campus Infrastructure <span aria-hidden="true">·</span> Kuniamuthur, Coimbatore
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1A1917] [text-wrap:balance]">
                Designed for Study, Research & Campus Life
              </h2>
            </div>

            {/* Facility Explorer Switcher */}
            <div
              role="tablist"
              aria-label="Campus Facilities"
              className="flex flex-wrap items-center gap-2"
            >
              {CAMPUS_FACILITIES.map((facility) => {
                const active = facility.id === activeFacilityId;
                return (
                  <button
                    key={facility.id}
                    role="tab"
                    aria-selected={active}
                    type="button"
                    onClick={() => setActiveFacilityId(facility.id)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#14326B] text-white border-[#14326B]'
                        : 'bg-white text-[#4A4640] border-[#E4DED3] hover:border-[#BDB4A4]'
                    }`}
                  >
                    {facility.id === 'library'
                      ? 'Central Library'
                      : facility.id === 'labs'
                        ? 'Research & Labs'
                        : 'Sports & Hostels'}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col">
              <div className="aspect-[4/3] lg:flex-1 rounded-xl overflow-hidden border border-[#E4DED3] bg-[#ECE7DD]">
                <ResilientImage
                  src={currentFacility.image}
                  alt={currentFacility.title}
                  fallbackTitle={currentFacility.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2.5 text-xs font-serif italic text-[#5C5852]">
                {currentFacility.caption}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#E4DED3] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs text-[#5C5852]">
                  {currentFacility.subtitle}
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#1A1917]">
                  {currentFacility.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4A4640]">
                  {currentFacility.description}
                </p>

                <dl className="mt-6 py-4 border-y border-[#E4DED3] grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="text-[#5C5852]">Operating Hours</dt>
                    <dd className="mt-1 font-medium text-[#1A1917] tabular-nums">
                      {currentFacility.hours}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#5C5852]">Facility Scale</dt>
                    <dd className="mt-1 font-medium text-[#1A1917] tabular-nums">
                      {currentFacility.capacity}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-6 space-y-2.5 text-sm text-[#1A1917]">
                  {currentFacility.highlights.map((item) => (
                    <li key={item} className="pb-2 border-b border-[#EFEBE3] last:border-b-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
