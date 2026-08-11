import { useState } from 'react';
import { ScreenTab, Project, Story } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { ImpactScreen } from './components/ImpactScreen';
import { StoriesScreen } from './components/StoriesScreen';
import { MediaScreen } from './components/MediaScreen';
import { GetInvolvedScreen } from './components/GetInvolvedScreen';
import { ContactScreen } from './components/ContactScreen';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { StoryDetailModal } from './components/StoryDetailModal';
import { DonationModal } from './components/DonationModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ScreenTab>('home');
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
      <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col justify-between selection:bg-amber-300 selection:text-amber-950">
        
        {/* Top Header Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenDonate={() => handleOpenDonate(1500)}
        />

        {/* Main View Content Switcher */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomeScreen
              setActiveTab={setActiveTab}
              onOpenDonate={() => handleOpenDonate(1500)}
              onSelectProject={(proj) => setSelectedProject(proj)}
              onSelectStory={(story) => setSelectedStory(story)}
            />
          )}

          {activeTab === 'about' && (
            <AboutScreen
              setActiveTab={setActiveTab}
              onOpenDonate={() => handleOpenDonate(1500)}
            />
          )}

          {(activeTab === 'projects' || activeTab === 'focus') && (
            <ProjectsScreen
              onSelectProject={(proj) => setSelectedProject(proj)}
              onOpenDonate={() => handleOpenDonate(1500)}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === 'stories' && (
            <StoriesScreen
              onSelectStory={(story) => setSelectedStory(story)}
              setActiveTab={setActiveTab}
              onOpenDonate={() => handleOpenDonate(1500)}
            />
          )}

          {activeTab === 'media' && (
            <MediaScreen />
          )}

          {activeTab === 'contact' && (
            <ContactScreen 
              onOpenDonate={(amt) => handleOpenDonate(amt)} 
              setActiveTab={setActiveTab} 
            />
          )}
        </main>

        {/* Global Footer */}
        <Footer
          setActiveTab={setActiveTab}
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
    </LanguageProvider>
  );
}
