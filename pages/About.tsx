
import React from 'react';
import { BADGES, ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  const titleParts = ABOUT_CONTENT.hero.title.split(' ');
  const firstLine = titleParts.slice(0, 3).join(' ');
  const secondLine = titleParts.slice(3).join(' ');

  return (
    <div className="pt-32 font-sans">
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center pt-10">
            <div className="w-full lg:w-1/2">
              <span className="font-sans text-brand font-bold uppercase text-xs tracking-[0.3em] mb-4 block">{ABOUT_CONTENT.hero.badge}</span>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold text-gray-900 uppercase tracking-tight leading-[1] mb-8">
                {firstLine} <span className="text-brand">{secondLine}</span>
              </h1>
              <div className="space-y-6 text-lg text-gray-600 font-sans font-medium leading-relaxed">
                {ABOUT_CONTENT.intro.map((para, i) => <p key={i}>{para}</p>)}
                <p className="font-bold text-gray-800 border-l-4 border-brand pl-6 italic font-sans py-2">"{ABOUT_CONTENT.quote}"</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <img src={ABOUT_CONTENT.hero.images[0]} alt="Arbeid 1" className="w-full h-auto rounded-none mt-12 border border-gray-100" />
              <img src={ABOUT_CONTENT.hero.images[1]} alt="Arbeid 2" className="w-full h-auto rounded-none border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand relative overflow-hidden z-20 font-sans">
        <div className="absolute inset-0 brick-pattern opacity-15 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-white tracking-tight">{ABOUT_CONTENT.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {ABOUT_CONTENT.values.items.map((value, idx) => (
              <div key={idx} className={`py-10 ${idx === 0 ? 'md:pr-12 md:border-r' : idx === 1 ? 'md:px-12 md:border-r' : 'md:pl-12'} border-white/20 group`}>
                <div className="mb-8 flex items-center space-x-2">
                  <span className="font-display text-5xl font-bold text-white/40">0{idx + 1}</span>
                  <div className="h-px flex-grow bg-white/20"></div>
                </div>
                <h3 className="text-3xl font-display font-bold uppercase mb-6 tracking-tight text-white group-hover:translate-x-2 transition-transform">{value.title}</h3>
                <p className="font-sans text-white/90 leading-relaxed font-medium text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-extrabold uppercase mb-16 tracking-tight text-gray-900">Godkjent og Kvalitetssikret</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            {BADGES.map(badge => (
              <div key={badge.id} className="max-w-xs space-y-5">
                <img src={badge.imageUrl} alt={badge.title} className="h-40 mx-auto grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105" />
                <h4 className="font-sans font-bold uppercase text-[11px] text-gray-500 tracking-[0.3em]">{badge.title}</h4>
                <p className="font-sans text-[12px] text-gray-400 leading-relaxed font-medium">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
