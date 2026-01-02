
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL, CONTACT_INFO } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Forside', path: '/' },
    { name: 'Tjenester', path: '/tjenester' },
    { name: 'Om Oss', path: '/om-oss' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] font-sans transition-all duration-300 ${
        isScrolled 
          ? 'bg-white py-5 lg:py-6 shadow-sm' 
          : 'bg-white lg:bg-transparent py-7 lg:py-9'
      } ${isMobileMenuOpen ? '!bg-white' : ''}`}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between relative z-[130]">
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src={LOGO_URL} 
            alt="Murmester Halvorsen Logo" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[12px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-brand relative pb-1 group ${
                location.pathname === link.path ? 'text-brand' : 'text-gray-800'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="bg-brand text-white px-8 py-3.5 font-bold uppercase text-[10px] tracking-[0.15em] hover:bg-brand-dark transition-all active:scale-95"
          >
            Be om tilbud
          </Link>
        </div>

        <button 
          className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-end focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Meny"
        >
          <div className="relative w-8 h-[16px]">
            <span className={`absolute left-0 block w-8 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out rounded-full ${isMobileMenuOpen ? 'top-[7px] rotate-45' : 'top-0'}`}></span>
            <span className={`absolute left-0 top-[7px] block w-8 h-[2px] bg-gray-900 transition-all duration-200 ease-in-out rounded-full ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 block w-8 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out rounded-full ${isMobileMenuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'}`}></span>
          </div>
        </button>
      </div>

      <div className={`fixed inset-0 bg-white z-[120] lg:hidden transition-opacity duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-6 md:px-10 h-full flex flex-col justify-center items-start pt-10 sm:pt-20">
          <div className="space-y-8 flex flex-col items-start">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                style={{ transitionDelay: `${isMobileMenuOpen ? (idx + 1) * 70 : 0}ms` }}
                className={`text-4xl font-display font-bold uppercase tracking-tight transition-all duration-500 transform text-left ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} ${location.pathname === link.path ? 'text-brand' : 'text-gray-900 hover:text-brand'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div style={{ transitionDelay: `${isMobileMenuOpen ? (navLinks.length + 1) * 70 : 0}ms` }} className={`w-full max-w-[240px] pt-8 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <Link to="/kontakt" className="block w-full bg-brand text-white px-6 py-4 font-bold uppercase text-center tracking-widest text-[11px] mb-8">
                Be om tilbud
              </Link>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">Direkte kontakt</p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-2xl font-display font-bold text-gray-900 hover:text-brand transition-colors">{CONTACT_INFO.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
