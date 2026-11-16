import { COLLEGE_IMAGES } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

const MILESTONES = [
  {
    year: '1997',
    title: 'Foundation by VLB Trust',
    detail: 'Established in Kuniamuthur, Coimbatore with four foundational undergraduate departments.',
  },
  {
    year: '2011',
    title: 'UGC Autonomous Status',
    detail: 'Conferred academic autonomy by UGC and Bharathiar University to pioneer industry-aligned syllabi.',
  },
  {
    year: '2018',
    title: 'NAAC ‘A’ Grade & NIRF Band',
    detail: 'Re-accredited with NAAC ‘A’ Grade and recognized among top Indian Arts & Science institutions.',
  },
  {
    year: '2024',
    title: 'IIC 5-Star & Research Expansion',
    detail: 'Awarded 5-Star Rating by Ministry of Education Innovation Cell with 1,400+ indexed publications.',
  },
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-16 lg:py-24 bg-white border-b border-[#E4DED3]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Asymmetric Editorial Grid (70% Narrative / 30% Margin Archive) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Editorial Column */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wider uppercase text-[#5C5852]">
              Institutional Heritage <span aria-hidden="true">·</span> From the Principal’s Desk
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1A1917] [text-wrap:balance]">
              Academic Autonomy Anchored in Purpose
            </h2>

            <div className="mt-6 border-t border-[#E4DED3] pt-6 max-w-2xl">
              <p className="text-base leading-[1.8] text-[#2F2C28] first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:text-[#14326B] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                Since our founding in 1997 under the VLB Trust, Sree Krishna Arts and Science College has pursued a singular institutional vision: Fitness for Purpose. Every syllabus update, laboratory investment, and industry partnership is measured by how thoroughly it prepares scholars for meaningful careers and ethical citizenship.
              </p>
              <p className="mt-4 text-base leading-[1.8] text-[#4A4640]">
                Through Outcome Based Education and our Choice Based Credit System, students combine disciplinary depth in computing, commerce, management, or life sciences with interdisciplinary electives, NPTEL-SWAYAM certifications, and mentored community outreach.
              </p>

              <div className="mt-8 pt-6 border-t border-[#E4DED3]">
                <p className="font-serif text-xl font-semibold text-[#1A1917]">
                  Dr. R. Jagajeevan
                </p>
                <p className="mt-1 text-sm text-[#5C5852]">
                  Principal, Sree Krishna Arts and Science College <span aria-hidden="true">·</span> M.Com., MBA, M.Phil., Ph.D.
                </p>
              </div>
            </div>

            {/* Pull Quote */}
            <blockquote className="mt-10 py-6 border-y border-[#E4DED3] max-w-2xl">
              <p className="font-serif italic text-xl sm:text-2xl leading-snug text-[#14326B]">
                “Higher education must unite scholarly curiosity with disciplined readiness for the contemporary world of work.”
              </p>
            </blockquote>
          </div>

          {/* Margin Column: Library Visual + Historical Milestones */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#E4DED3] bg-[#ECE7DD]">
                <ResilientImage
                  src={COLLEGE_IMAGES.centralLibrary}
                  alt="Students studying inside the Central Digital Library at Sree Krishna Arts and Science College"
                  fallbackTitle="Central Library & Reading Hall"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2.5 text-xs font-serif italic text-[#5C5852]">
                Fig. 2 — Central Knowledge Resource Centre housing 68,400+ volumes and digital repositories.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E4DED3] rounded-xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5C5852]">
                Institutional Chronicle
              </h3>
              <dl className="mt-4 divide-y divide-[#E4DED3]">
                {MILESTONES.map((item) => (
                  <div key={item.year} className="py-3.5 first:pt-0 last:pb-0 flex gap-4">
                    <dt className="font-mono text-sm font-medium text-[#14326B] tabular-nums shrink-0 w-12">
                      {item.year}
                    </dt>
                    <dd>
                      <p className="text-sm font-semibold text-[#1A1917]">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#5C5852]">{item.detail}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
