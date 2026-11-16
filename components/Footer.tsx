export function Footer() {
  return (
    <footer className="bg-[#141923] text-[#E6E2D8]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl font-semibold text-white">
              Sree Krishna Arts and Science College
            </p>
            <p className="mt-2 text-sm text-[#B8B4AA] max-w-sm leading-relaxed">
              An Autonomous Institution affiliated to Bharathiar University, accredited with ‘A’ Grade by NAAC and governed by the VLB Trust.
            </p>
            <p className="mt-4 text-xs text-[#9C988F] leading-relaxed">
              Sugunapuram, Kuniamuthur, Coimbatore – 641 008, Tamil Nadu, India
              <br />
              Admissions Desk: +91 422 267 8400 · info@sreekrishna.edu.in
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9C988F]">
              Academics & Campus
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#D6D2C9]">
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  UG & PG Programmes
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white transition-colors">
                  Principal’s Desk & Heritage
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-white transition-colors">
                  Placements & Recruiters
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  Library, Labs & Hostels
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9C988F]">
              Statutory & Quality Cells
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#D6D2C9]">
              <li>
                <a href="#research" className="hover:text-white transition-colors">
                  Internal Quality Assurance Cell (IQAC)
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-white transition-colors">
                  Controller of Examinations
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-white transition-colors">
                  NIRF & NAAC Disclosures
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-white transition-colors">
                  Anti-Ragging & Student Grievance Cell
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9C988F]">
          <p>© {new Date().getFullYear()} Sree Krishna Arts and Science College. All rights reserved.</p>
          <p>Autonomous · Affiliated to Bharathiar University · Coimbatore</p>
        </div>
      </div>
    </footer>
  );
}
