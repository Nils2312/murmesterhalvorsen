
import React from 'react';
import { PRIVACY_CONTENT } from '../constants';

const Privacy: React.FC = () => {
  return (
    <div className="pt-48 pb-32 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="font-display text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tight mb-4">
          {PRIVACY_CONTENT.title}
        </h1>
        <p className="text-brand font-bold uppercase text-xs tracking-widest mb-16">{PRIVACY_CONTENT.lastUpdated}</p>
        
        <div className="space-y-16">
          {PRIVACY_CONTENT.sections.map((section, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-[2px] bg-brand/30 group-hover:w-16 group-hover:bg-brand transition-all duration-500"></div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-gray-900">
                  {section.title}
                </h2>
              </div>
              <p className="font-sans text-gray-600 text-lg leading-relaxed font-medium pl-14">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-10 bg-gray-50 border-l-4 border-brand">
          <p className="font-sans text-gray-700 font-medium italic">
            Har du spørsmål om hvordan vi håndterer dine data? Ta kontakt med oss på post@murmesterhalvorsen.no.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
