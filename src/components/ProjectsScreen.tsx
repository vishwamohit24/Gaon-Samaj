import React, { useState } from 'react';
import { Project, UpcomingProject, ScreenTab } from '../types';
import { PROJECTS, UPCOMING_PROJECTS, BilingualProject, BilingualUpcomingProject } from '../data/ngoData';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Users, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';
import { SEO } from './SEO';

interface ProjectsScreenProps {
  onSelectProject: (project: Project) => void;
  onOpenDonate: () => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({
  onSelectProject,
  onOpenDonate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedUpcoming, setSelectedUpcoming] = useState<BilingualUpcomingProject | null>(null);
  const { t, isHindi } = useLanguage();

  const categories = [
    { id: 'All', label: isHindi ? 'सभी' : 'All' },
    { id: 'Youth', label: isHindi ? 'युवा' : 'Youth' },
    { id: 'Women', label: isHindi ? 'महिला' : 'Women' },
    { id: 'Tourism', label: isHindi ? 'पर्यटन' : 'Tourism' },
    { id: 'Environment', label: isHindi ? 'पर्यावरण' : 'Environment' },
    { id: 'Culture', label: isHindi ? 'संस्कृति' : 'Culture' },
    { id: 'Education', label: isHindi ? 'शिक्षा' : 'Education' },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full bg-stone-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={isHindi ? 'परियोजनाएं' : 'Projects'}
        description="Explore our ongoing and upcoming grassroots projects in Bihar focused on youth, women empowerment, education, and culture."
        canonicalUrl="/projects"
      />
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-3">
            {t('projectsTitle')}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-medium leading-relaxed">
            {t('projectsSub')}
          </p>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-amber-950 shadow-sm border border-amber-500 font-black'
                  : 'bg-white text-stone-700 hover:bg-amber-100/60 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Left Column: Projects Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project: BilingualProject) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={project.imageUrl}
                      alt={isHindi ? project.titleHi || project.title : project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-amber-400 text-amber-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-md shadow-xs uppercase tracking-wider">
                      {isHindi ? project.categoryHi || project.category : project.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-stone-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {isHindi ? project.locationHi || project.location : project.location}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-2 leading-snug">
                      {isHindi ? project.titleHi || project.title : project.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                      {isHindi ? project.descriptionHi || project.description : project.description}
                    </p>

                    {/* Progress Bar & Beneficiary details */}
                    {project.fundedPercentage && (
                      <div className="mb-2">
                        <div className="flex justify-between text-[11px] text-stone-500 font-semibold mb-1">
                          <span>{isHindi ? 'प्रगति स्थिति' : 'Field Progress'}</span>
                          <span className="text-amber-800 font-bold">{project.fundedPercentage}%</span>
                        </div>
                        <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-amber-400 h-full rounded-full transition-all duration-1000"
                            style={{ width: `${project.fundedPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-1 text-[11px] font-bold text-stone-600 mt-2">
                      <Users className="w-3.5 h-3.5 text-amber-700" />
                      <span>{isHindi ? project.beneficiariesHi || project.beneficiaries : project.beneficiaries}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold text-xs py-2.5 rounded-lg transition-colors border border-amber-500/40 shadow-xs flex items-center justify-center gap-1.5"
                  >
                    {t('learnMore')}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Upcoming Projects Sidebar */}
          <div className="lg:col-span-1 bg-amber-100/40 rounded-2xl p-6 border border-amber-200/80 sticky top-28 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-amber-300">
              <Sparkles className="w-5 h-5 text-amber-800" />
              <h2 className="text-xl font-bold text-stone-900">{t('upcomingTitle')}</h2>
            </div>

            <p className="text-xs text-stone-600 mb-5 font-medium">
              {isHindi ? 'गाँव पंचायतों में आगामी 2025-2026 की प्रस्तावित विकास योजनाएं।' : 'Future initiatives planned for rollout across rural Panchayats in 2025-2026.'}
            </p>

            <div className="space-y-4">
              {UPCOMING_PROJECTS.map((up: BilingualUpcomingProject) => (
                <div
                  key={up.id}
                  onClick={() => setSelectedUpcoming(up)}
                  className="bg-white p-3 rounded-xl border border-amber-200 shadow-2xs hover:shadow-sm hover:border-amber-400 transition-all cursor-pointer flex gap-3 items-center group"
                >
                  <img
                    src={up.imageUrl}
                    alt={isHindi ? up.titleHi || up.title : up.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold text-stone-900 truncate group-hover:text-amber-800">
                      {isHindi ? up.titleHi || up.title : up.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded mt-1">
                      <Calendar className="w-3 h-3 text-amber-800" /> {up.timeline}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200 text-center">
              <button
                onClick={onOpenDonate}
                className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs py-2.5 rounded-lg transition-colors shadow-xs"
              >
                {t('donateNow')}
              </button>
            </div>
          </div>

        </div>

        {/* Our Collective Vision Section */}
        <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-stone-200">
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-6 text-center">
            {isHindi ? 'हमारा सामूहिक दृष्टिकोण (विजन)' : 'Our Collective Vision'}
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              {isHindi 
                ? 'ये सभी पहल आपस में जुड़ी हुई हैं। स्वस्थ युवा शिक्षा में योगदान देते हैं। शिक्षा सुशासन को मजबूत करती है। सुशासन पर्यटन और संस्कृति का समर्थन करता है। संस्कृति पहचान और आजीविका बनाती है। पर्यावरण संरक्षण समुदायों को बनाए रखता है। कला और कहानी कहने से समाज की भावना संरक्षित होती है।'
                : 'These initiatives are interconnected. A healthy youth contributes to education. Education strengthens governance. Good governance supports tourism and culture. Culture creates identity and livelihoods. Environmental protection sustains communities. Art and storytelling preserve the spirit of society.'}
            </p>
            <p>
              {isHindi 
                ? 'गांव समाज एक ऐसे बिहार की दिशा में काम कर रहा है जो स्वस्थ, शिक्षित, आत्मनिर्भर, सांस्कृतिक रूप से आश्वस्त, पर्यावरण के प्रति जिम्मेदार और सामुदायिक भागीदारी से प्रेरित हो। नागरिकों, स्वयंसेवकों, महिलाओं के समूहों, शिक्षकों, पेशेवरों और स्थानीय संस्थानों के साथ साझेदारी के माध्यम से, हम न केवल परियोजनाओं का निर्माण करना चाहते हैं, बल्कि भावी पीढ़ियों के लिए स्थायी सामाजिक आंदोलन बनाना चाहते हैं।'
                : 'Gaon Samaj is working toward a Bihar that is healthy, educated, self-reliant, culturally confident, environmentally responsible, and driven by community participation. Through partnerships with citizens, volunteers, women’s groups, educators, professionals, and local institutions, we aim to build not just projects, but lasting social movements for future generations.'}
            </p>
          </div>
        </div>

      </div>

      {/* Upcoming Project Detail Modal */}
      {selectedUpcoming && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-amber-300 relative">
            <button
              onClick={() => setSelectedUpcoming(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 font-bold text-lg"
            >
              ✕
            </button>
            <img
              src={selectedUpcoming.imageUrl}
              alt={isHindi ? selectedUpcoming.titleHi || selectedUpcoming.title : selectedUpcoming.title}
              referrerPolicy="no-referrer"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <span className="bg-amber-100 text-amber-900 font-bold text-xs px-2.5 py-1 rounded">
              {selectedUpcoming.timeline}
            </span>
            <h3 className="text-xl font-bold text-stone-900 mt-2">
              {isHindi ? selectedUpcoming.titleHi || selectedUpcoming.title : selectedUpcoming.title}
            </h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed font-normal">
              {isHindi ? selectedUpcoming.descriptionHi || selectedUpcoming.description : selectedUpcoming.description}
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setSelectedUpcoming(null);
                  onOpenDonate();
                }}
                className="flex-1 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold py-2.5 rounded-lg text-xs"
              >
                {t('supportCause')}
              </button>
              <button
                onClick={() => setSelectedUpcoming(null)}
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold px-4 py-2.5 rounded-lg text-xs"
              >
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
