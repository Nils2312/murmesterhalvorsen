
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES, GALLERY_IMAGES, SERVICES_PAGE_CONTENT } from '../constants';

const Services: React.FC = () => {
  const { hash } = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const displayImages = [...GALLERY_IMAGES].reverse();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [hash]);

  const getStaggerClass = (idx: number) => {
    const pos = idx % 4;
    if (pos === 1) return 'md:translate-y-12';
    if (pos === 2) return 'md:-translate-y-8';
    if (pos === 3) return 'md:translate-y-16';
    return ''; 
  };

  return (
    <div className="pt-32 pb-20 overflow-x-hidden font-sans">
      <div className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-10">
            <div className="max-w-xl">
              <span className="font-sans text-brand font-bold uppercase text-[11px] tracking-[0.3em] mb-4 block">{SERVICES_PAGE_CONTENT.hero.badge}</span>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold text-gray-900 uppercase tracking-tight leading-[1.1]">
                {SERVICES_PAGE_CONTENT.hero.title}
              </h1>
            </div>
            <div className="max-w-md">
              <p className="font-sans text-gray-700 border-l-2 border-gray-300 pl-6 py-2 leading-relaxed italic font-medium text-lg">
                {SERVICES_PAGE_CONTENT.hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} id={service.id} className={`relative group scroll-mt-32 ${index % 2 !== 0 ? 'md:translate-y-32' : ''}`}>
              <div className="absolute -top-12 -left-4 font-display text-[120px] font-black text-gray-50/50 select-none group-hover:text-brand/5 transition-colors z-0">0{index + 1}</div>
              <div className="relative z-10 flex flex-col font-sans">
                <div className="aspect-[3/2] overflow-hidden rounded-none relative border-b-8 border-brand bg-white shadow-lg">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-8 px-2">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-[2px] bg-brand"></div>
                    <span className="text-brand font-bold text-[10px] uppercase tracking-widest font-sans">0{index + 1} // {service.category}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-gray-900 mb-4">{service.title}</h2>
                  <p className="font-sans text-gray-600 leading-relaxed text-base font-medium">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-40 md:mt-72 pt-32 pb-48 bg-brand relative overflow-hidden z-20">
        <div className="absolute inset-0 brick-pattern opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none mb-6">Vårt Arbeid</h2>
            <div className="flex items-center space-x-6">
              <span className="font-sans text-white/80 font-bold text-[10px] uppercase tracking-[0.5em] whitespace-nowrap">PROSJEKTGALLERI</span>
              <div className="h-px flex-grow bg-white/30"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {displayImages.map((image, idx) => (
              <button key={image.id} onClick={() => setSelectedImage(image.url)} className={`aspect-square rounded-none group overflow-hidden bg-white/10 border border-white/10 shadow-xl transition-all hover:border-white/40 cursor-zoom-in ${getStaggerClass(idx)}`}>
                <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[200] bg-gray-950/95 flex items-center justify-center p-4 md:p-12" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-8 right-8 text-white hover:text-brand transition-colors z-[210]"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg></button>
          <img src={selectedImage} alt="Fullskjerm" className="max-w-full max-h-full object-contain shadow-2xl animate-fade-in-up" />
        </div>
      )}

      <section className="pt-32 pb-12 font-sans">
        <div className="container mx-auto px-4 text-center">
          <p className="text-brand font-bold uppercase text-xs tracking-[0.4em] mb-4 font-sans">{SERVICES_PAGE_CONTENT.cta.badge}</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase mb-10 tracking-tight text-gray-900">{SERVICES_PAGE_CONTENT.cta.title}</h2>
          <Link to="/contact" className="bg-gray-900 text-white px-12 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-brand transition-all inline-block text-xs font-sans">{SERVICES_PAGE_CONTENT.cta.buttonText}</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
