import React from 'react';
import { Project } from '../types';
import { BilingualProject } from '../data/ngoData';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Users, X, Heart, Share2, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenDonate: (customAmount?: number) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenDonate,
}) => {
  const { t, isHindi } = useLanguage();

  if (!project) return null;

  const bProject = project as BilingualProject;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-300 relative my-8">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900/60 text-white hover:bg-amber-400 hover:text-amber-950 flex items-center justify-center transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-100">
          <img
            src={project.imageUrl}
            alt={isHindi ? bProject.titleHi || project.title : project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-amber-400 text-amber-950 font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider mb-2 inline-block shadow-xs">
              {isHindi ? bProject.categoryHi || project.category : project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {isHindi ? bProject.titleHi || project.title : project.title}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap gap-4 text-xs font-semibold text-stone-600 bg-amber-50 p-4 rounded-xl border border-amber-200">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-700" />
              <span>{isHindi ? 'स्थान' : 'Location'}: <strong className="text-stone-900">{isHindi ? bProject.locationHi || project.location : project.location}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-700" />
              <span>{isHindi ? 'लाभार्थी' : 'Beneficiaries'}: <strong className="text-stone-900">{isHindi ? bProject.beneficiariesHi || project.beneficiaries : project.beneficiaries}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{isHindi ? 'स्थिति' : 'Status'}: <strong className="text-emerald-800 uppercase">{project.status}</strong></span>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">{isHindi ? 'परियोजना का विवरण' : 'Project Overview'}</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-normal">
              {isHindi
                ? bProject.fullDescriptionHi || bProject.descriptionHi || project.fullDescription || project.description
                : project.fullDescription || project.description}
            </p>
          </div>

          {/* Funding Progress Bar */}
          {project.fundedPercentage && (
            <div className="bg-amber-100/60 p-4 rounded-xl border border-amber-300">
              <div className="flex justify-between text-xs font-bold text-stone-800 mb-1.5">
                <span>{isHindi ? 'वित्तीय लक्ष्य प्रगति' : 'Field Funding Target'}</span>
                <span className="text-amber-900">{project.fundedPercentage}% {isHindi ? 'प्राप्त' : 'Funded'}</span>
              </div>
              <div className="w-full bg-white h-2.5 rounded-full overflow-hidden border border-amber-300">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${project.fundedPercentage}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Secondary Gallery Images if available */}
          {project.secondaryImages && project.secondaryImages.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">{isHindi ? 'क्षेत्रीय चित्र' : 'Field Photos'}</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.secondaryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} gallery ${i}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-32 object-cover rounded-xl border border-amber-200"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Modal Action Buttons */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenDonate();
              }}
              className="flex-1 bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold py-3.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Heart className="w-4 h-4 fill-amber-950" />
              {t('supportCause')}
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert(isHindi ? 'लिंक कॉपी हो गया!' : 'Project link copied to clipboard!');
              }}
              className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold px-5 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Share2 className="w-4 h-4" />
              {isHindi ? 'साझा करें' : 'Share'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
