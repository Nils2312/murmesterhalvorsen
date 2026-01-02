
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, HOME_CONTENT } from '../constants';
import { client, urlFor } from '../sanityClient';

const AnimatedNumber: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const Home: React.FC = () => {
  const [sanityData, setSanityData] = useState<any>(null);

  useEffect(() => {
    // Henter data fra Sanity. Husk at _type må matche navnet i Sanity Studio Schema.
    client.fetch(`*[_type == "forside"][0]`).then((data) => {
      if (data) setSanityData(data);
    }).catch(err => console.error("Kunne ikke hente fra Sanity:", err));
  }, []);

  // Bruker data fra Sanity hvis den finnes, ellers fallback til constants.tsx
  const hero = sanityData?.hero || HOME_CONTENT.hero;
  const whyUs = sanityData?.whyUs || HOME_CONTENT.whyUs;
  const stats = sanityData?.stats || HOME_CONTENT.stats;

  const titleParts = hero.title.split(' ');
  const firstLine = titleParts.slice(0, 2).join(' ');
  const secondLine = titleParts.slice(2).join(' ');

  // Funksjon for å håndtere bilde-URL fra enten Sanity eller fallback
  const getImageUrl = (source: any) => {
    if (source?.asset) return urlFor(source).url();
    return source; // Returnerer strengen fra constants hvis det ikke er et Sanity-objekt
  };

  return (
    <div className="overflow-x-hidden font-sans">
      <section className="relative min-h-[85vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#fcfcfc]">
          <img 
            src={getImageUrl(hero.image)} 
            alt="Bakgrunn" 
            className="w-full h-full object-cover opacity-[0.45]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent 40% to-[#fcfcfc]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl animate-fade-in-up pt-10">
            <h1 className="font-display text-[35px] sm:text-[53px] md:text-[70px] font-black text-gray-900 leading-[1.1] md:leading-[1] mb-8 md:mb-10 uppercase tracking-tight">
              {firstLine} <br className="hidden sm:block" /> <span className="text-brand">{secondLine}</span>
            </h1>
            <p className="font-sans text-base md:text-xl text-gray-700 mb-10 md:mb-12 leading-relaxed max-w-lg font-medium">
              {hero.subtitle}
            </p>
            <div className="flex flex-row flex-wrap items-center gap-3 md:gap-6">
              <Link to="/tjenester" className="bg-brand text-white border-2 border-brand px-6 sm:px-10 py-3.5 sm:py-4 rounded-none font-bold uppercase text-[9px] sm:text-[11px] tracking-[0.2em] hover:bg-brand-dark hover:border-brand-dark transition-all text-center whitespace-nowrap inline-block font-sans">Våre Tjenester</Link>
              <Link to="/kontakt" className="bg-white text-gray-900 border-2 border-gray-900 px-6 sm:px-10 py-3.5 sm:py-4 rounded-none font-bold uppercase text-[9px] sm:text-[11px] tracking-[0.2em] hover:bg-gray-900 hover:text-white transition-all text-center whitespace-nowrap inline-block font-sans">Be om tilbud</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 md:pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-6 mb-20">
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-gray-900 whitespace-nowrap leading-none">{whyUs.title}</h2>
            <div className="h-px flex-grow bg-gray-200"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
            <div className="lg:w-[45%] flex flex-col">
              <div className="relative aspect-[4/4.6] overflow-hidden border-b-8 border-brand flex-grow">
                <img src={getImageUrl(whyUs.image)} alt="Om oss" className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000" />
              </div>
            </div>
            <div className="lg:w-[55%] flex flex-col justify-between py-2">
              {whyUs.points.map((point: any) => (
                <div key={point.id} className="group block mb-8 lg:mb-0">
                  <div className="space-y-1.5">
                    <span className="font-sans text-brand font-black text-[10px] uppercase tracking-[0.4em] leading-none block">{point.label}</span>
                    <h3 className="font-display text-3xl font-extrabold uppercase leading-[1.2] text-gray-900 tracking-tight group-hover:translate-x-1 transition-transform">{point.title}</h3>
                  </div>
                  <p className="font-sans text-gray-500 text-base leading-relaxed max-w-xl font-medium mt-3">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-6 mb-24">
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-gray-900 whitespace-nowrap leading-none">Våre Tjenester</h2>
            <div className="h-px flex-grow bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-x-12 lg:gap-x-16 mb-24">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <Link key={service.id} to={`/tjenester#${service.id}`} className={`group block transition-transform duration-500 ${idx === 1 ? 'md:translate-y-12' : idx === 2 ? 'md:translate-y-24' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden mb-10 bg-white border-b-8 border-brand">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" />
                </div>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <span className="font-display text-4xl font-black text-gray-200 group-hover:text-brand transition-colors duration-500">0{idx + 1}</span>
                    <div className="h-[1.5px] flex-grow bg-gray-100 group-hover:bg-brand/40 transition-colors"></div>
                  </div>
                  <div className="space-y-2">
                    <span className="font-sans text-brand font-black text-[10px] uppercase tracking-[0.4em] leading-none block">{service.category}</span>
                    <h3 className="font-display text-3xl font-extrabold uppercase leading-[1.2] text-gray-900 tracking-tight group-hover:translate-x-1 transition-transform">{service.title}</h3>
                  </div>
                  <p className="font-sans text-gray-500 text-[13px] leading-relaxed max-w-[280px] font-medium">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center pt-10">
            <Link to="/tjenester" className="bg-brand text-white border-2 border-brand px-10 py-4 rounded-none font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-brand-dark transition-all inline-block font-sans">Se alle tjenester</Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-brand text-white overflow-hidden z-20 font-sans">
        <div className="absolute inset-0 brick-pattern opacity-15 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="font-display text-6xl md:text-7xl font-black mb-1"><AnimatedNumber end={stats.murerer} /></p>
              <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold opacity-90">Fagmurere</p>
            </div>
            <div>
              <p className="font-display text-6xl md:text-7xl font-black mb-1"><AnimatedNumber end={stats.erfaring} />+</p>
              <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold opacity-90">Års Erfaring</p>
            </div>
            <div>
              <p className="font-display text-6xl md:text-7xl font-black mb-1"><AnimatedNumber end={stats.prosjekter} />+</p>
              <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold opacity-90">Prosjekter</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
