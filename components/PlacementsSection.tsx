import { useState } from 'react';
import { PLACEMENT_RECORDS, TOP_RECRUITERS } from '../data/collegeData';

export function PlacementsSection() {
  const [selectedYear, setSelectedYear] = useState(PLACEMENT_RECORDS[0].year);

  const currentRecord =
    PLACEMENT_RECORDS.find((rec) => rec.year === selectedYear) ?? PLACEMENT_RECORDS[0];

  return (
    <section id="placements" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E4DED3]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header + Batch Year Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E4DED3]">
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#5C5852]">
              Training & Placement Cell <span aria-hidden="true">·</span> Career Outcomes
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1A1917] [text-wrap:balance]">
              Consistent Global Corporate Placements
            </h2>
            <p className="mt-2.5 text-base text-[#4A4640] max-w-2xl">
              Dedicated pre-placement coaching in quantitative aptitude, technical coding, and corporate communication connects graduates with Fortune 500 technology, accounting, and life-science firms.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Placement Batch Year"
            className="inline-flex items-center p-1 bg-[#EDE8DF] rounded-lg border border-[#E0D9CC] self-start lg:self-auto"
          >
            {PLACEMENT_RECORDS.map((rec) => {
              const active = rec.year === selectedYear;
              return (
                <button
                  key={rec.year}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setSelectedYear(rec.year)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-mono font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                    active
                      ? 'bg-white text-[#14326B] shadow-xs'
                      : 'text-[#5C5852] hover:text-[#1A1917]'
                  }`}
                >
                  {rec.year}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column Tabular Metrics */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border border-[#E4DED3] rounded-xl p-5">
            <p className="text-xs text-[#5C5852]">Highest Annual CTC</p>
            <p className="mt-2 font-mono text-2xl sm:text-3xl font-medium text-[#14326B] tabular-nums">
              {currentRecord.highestCtc}
            </p>
          </div>
          <div className="bg-white border border-[#E4DED3] rounded-xl p-5">
            <p className="text-xs text-[#5C5852]">Average Package</p>
            <p className="mt-2 font-mono text-2xl sm:text-3xl font-medium text-[#1A1917] tabular-nums">
              {currentRecord.averageCtc}
            </p>
          </div>
          <div className="bg-white border border-[#E4DED3] rounded-xl p-5">
            <p className="text-xs text-[#5C5852]">Placement Conversion</p>
            <p className="mt-2 font-mono text-2xl sm:text-3xl font-medium text-[#1A1917] tabular-nums">
              {currentRecord.placementRate}
            </p>
          </div>
          <div className="bg-white border border-[#E4DED3] rounded-xl p-5">
            <p className="text-xs text-[#5C5852]">Total Offers Issued</p>
            <p className="mt-2 font-mono text-2xl sm:text-3xl font-medium text-[#1A1917] tabular-nums">
              {currentRecord.totalOffers}{' '}
              <span className="text-xs font-sans font-normal text-[#5C5852]">
                / {currentRecord.recruitingCompanies} Firms
              </span>
            </p>
          </div>
        </div>

        {/* Department Breakdown Table */}
        <div className="mt-8 bg-white border border-[#E4DED3] rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E4DED3] flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-serif text-lg font-semibold text-[#1A1917]">
              Department-Wise Placement Ledger ({currentRecord.year})
            </h3>
            <span className="text-xs text-[#5C5852]">
              Verified by Training & Placement Cell
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#E4DED3] text-xs font-semibold uppercase tracking-wider text-[#5C5852]">
                  <th className="py-3.5 px-6">Department Cluster</th>
                  <th className="py-3.5 px-4 text-right">Eligible</th>
                  <th className="py-3.5 px-4 text-right">Placed</th>
                  <th className="py-3.5 px-4 text-right">Median CTC</th>
                  <th className="py-3.5 px-6">Key Recruiting Partners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEBE3] text-sm">
                {currentRecord.departmentBreakdown.map((row) => (
                  <tr key={row.department} className="hover:bg-[#FAF8F5]/70 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#1A1917]">{row.department}</td>
                    <td className="py-4 px-4 text-right font-mono text-[#4A4640] tabular-nums">
                      {row.eligible}
                    </td>
                    <td className="py-4 px-4 text-right font-mono font-medium text-[#14326B] tabular-nums">
                      {row.placed}
                    </td>
                    <td className="py-4 px-4 text-right font-mono text-[#1A1917] tabular-nums">
                      {row.medianCtc}
                    </td>
                    <td className="py-4 px-6 text-[#4A4640]">{row.topRecruiters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recruiting Partners Directory */}
        <div className="mt-10 pt-8 border-t border-[#E4DED3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5C5852]">
            Prominent Campus Recruiters
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TOP_RECRUITERS.map((company) => (
              <div
                key={company}
                className="bg-white border border-[#E4DED3] rounded-lg px-4 py-3 text-xs sm:text-sm font-medium text-[#1A1917] text-center"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
