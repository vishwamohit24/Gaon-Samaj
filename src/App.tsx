import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Project, Story } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { StoriesScreen } from './components/StoriesScreen';
import { MediaScreen } from './components/MediaScreen';
import { ContactScreen } from './components/ContactScreen';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { StoryDetailModal } from './components/StoryDetailModal';
import { DonationModal } from './components/DonationModal';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { NotFoundScreen } from './components/NotFoundScreen';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  // This side effect runs every time the path changes
  useState(() => {
    window.scrollTo(0, 0);
  });
  
  return null;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isDonateOpen, setIsDonateOpen] = useState<boolean>(false);
  const [donateAmount, setDonateAmount] = useState<number>(1500);

  const handleOpenDonate = (amount?: number) => {
    if (amount) {
      setDonateAmount(amount);
    }
    setIsDonateOpen(true);
  };

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col justify-between selection:bg-amber-300 selection:text-amber-950">
          
          {/* Top Header Navbar */}
          <Navbar
            onOpenDonate={() => handleOpenDonate(1500)}
          />

          {/* Main View Content Switcher */}
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={
                <HomeScreen
                  onOpenDonate={() => handleOpenDonate(1500)}
                  onSelectProject={(proj) => setSelectedProject(proj)}
                  onSelectStory={(story) => setSelectedStory(story)}
                />
              } />
              
              <Route path="/about" element={
                <AboutScreen
                  onOpenDonate={() => handleOpenDonate(1500)}
                />
              } />

              <Route path="/projects" element={
                <ProjectsScreen
                  onSelectProject={(proj) => setSelectedProject(proj)}
                  onOpenDonate={() => handleOpenDonate(1500)}
                />
              } />
              
              <Route path="/focus" element={
                <ProjectsScreen
                  onSelectProject={(proj) => setSelectedProject(proj)}
                  onOpenDonate={() => handleOpenDonate(1500)}
                />
              } />

              <Route path="/stories" element={
                <StoriesScreen
                  onSelectStory={(story) => setSelectedStory(story)}
                  onOpenDonate={() => handleOpenDonate(1500)}
                />
              } />

              <Route path="/media" element={
                <MediaScreen />
              } />

              <Route path="/contact" element={
                <ContactScreen 
                  onOpenDonate={(amt) => handleOpenDonate(amt)} 
                />
              } />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer
            onOpenDonate={() => handleOpenDonate(1500)}
          />

          {/* Modals */}
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenDonate={(amt) => handleOpenDonate(amt)}
          />

          <StoryDetailModal
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
          />

          <DonationModal
            isOpen={isDonateOpen}
            onClose={() => setIsDonateOpen(false)}
            initialAmount={donateAmount}
          />

        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
