import { useState } from 'react';
import { AcademicsSection } from './components/AcademicsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LeadershipSection } from './components/LeadershipSection';
import { PlacementsSection } from './components/PlacementsSection';
import { ResearchAndCampusSection } from './components/ResearchAndCampusSection';

export default function App() {
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState('');

  const handleOpenAdmissions = (programmeTitle?: string) => {
    setSelectedProgramme(programmeTitle ?? '');
    setAdmissionsOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1917]">
      <Header onOpenAdmissions={handleOpenAdmissions} />
      <main className="flex-1">
        <HeroSection onOpenAdmissions={handleOpenAdmissions} />
        <AcademicsSection onApplyForProgramme={handleOpenAdmissions} />
        <LeadershipSection />
        <PlacementsSection />
        <ResearchAndCampusSection />
        <AdmissionsSection
          modalOpen={admissionsOpen}
          defaultProgramme={selectedProgramme}
          onCloseModal={() => setAdmissionsOpen(false)}
        />
      </main>
      <Footer />
    </div>
  );
}
