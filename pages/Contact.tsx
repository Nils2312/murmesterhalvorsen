
import React, { useState } from 'react';
import { CONTACT_INFO, CONTACT_PAGE_CONTENT } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'Mur og puss',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Her simulerer vi en API-innsending. 
    // For å faktisk sende e-post direkte fra frontend uten egen server, 
    // kan du bruke tjenester som Formspree.io eller EmailJS.
    
    try {
      // Simulerer nettverksforsinkelse for en profesjonell følelse
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Skjema sendt til:', CONTACT_INFO.email, formData);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      alert('Det oppstod en feil. Vennligst prøv igjen senere eller ring oss direkte.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-48 pb-40 font-sans">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-brand rounded-full mb-10 text-white shadow-xl">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-6">
            MELDING <span className="text-brand">SENDT!</span>
          </h1>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Takk for din henvendelse, {formData.name.split(' ')[0]}. Vi har mottatt informasjonen din og vil vurdere oppdraget fortløpende. 
            Vi tar kontakt med deg på telefon eller e-post så snart vi har mulighet.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-brand font-bold uppercase tracking-[0.3em] text-xs hover:text-brand-dark transition-colors border-b-2 border-brand pb-1"
          >
            Send en ny melding
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 font-sans">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20 pt-10">
          <div className="max-w-4xl">
            <span className="font-sans text-brand font-bold uppercase text-xs tracking-[0.3em] mb-4 block">{CONTACT_PAGE_CONTENT.hero.badge}</span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-gray-900 uppercase tracking-tight leading-[1] mb-8">
              {CONTACT_PAGE_CONTENT.hero.title}
            </h1>
            <p className="font-sans text-xl text-gray-600 leading-relaxed font-medium max-w-2xl">
              {CONTACT_PAGE_CONTENT.hero.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              <div className="bg-white p-8 rounded-none sm:col-span-4">
                <h3 className="font-display font-bold text-xl uppercase mb-3 tracking-tight text-brand">Ring Oss</h3>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-lg font-sans font-bold text-gray-900 tracking-tight whitespace-nowrap hover:text-brand transition-colors block">{CONTACT_INFO.phone}</a>
              </div>
              <div className="bg-white p-8 rounded-none sm:col-span-8">
                <h3 className="font-display font-bold text-xl uppercase mb-3 tracking-tight text-brand">E-post</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-sans font-bold text-gray-900 break-all lowercase tracking-tight hover:text-brand transition-colors block">{CONTACT_INFO.email}</a>
              </div>
              <div className="bg-white p-8 rounded-none sm:col-span-12">
                <h3 className="font-display font-bold text-xl uppercase mb-3 tracking-tight text-brand">Besøksadresse</h3>
                <p className="text-lg font-sans font-bold text-gray-900 tracking-tight">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="bg-white p-0 rounded-none overflow-hidden h-[450px] shadow-sm">
              <iframe src={CONTACT_INFO.googleMapsUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Murmester Halvorsen AS Ringebu" className="w-full h-full"></iframe>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-none relative z-20 font-sans shadow-xl shadow-gray-100/50">
            <h3 className="font-display font-bold text-4xl uppercase mb-10 tracking-tight leading-none text-gray-900">{CONTACT_PAGE_CONTENT.form.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">Navn *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand focus:ring-0 transition-all p-4 font-medium outline-none text-gray-800 rounded-none" placeholder="Fullt navn" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">Telefon *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand focus:ring-0 transition-all p-4 font-medium outline-none text-gray-800 rounded-none" placeholder="Ditt nummer" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">Din E-post *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand focus:ring-0 transition-all p-4 font-medium outline-none text-gray-800 rounded-none" placeholder="E-postadresse" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">Adresse for oppdraget</label>
                <input type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand focus:ring-0 transition-all p-4 font-medium outline-none text-gray-800 rounded-none" placeholder="Gateadresse og sted" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">Tjeneste</label>
                <div className="relative">
                  <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand focus:ring-0 transition-all p-4 font-medium outline-none text-gray-800 appearance-none rounded-none pr-10">
                    <option>Mur og puss</option>
                    <option>Naturstein & Skifer</option>
                    <option>Flisleggerarbeid</option>
                    <option>Piperehabilitering</option>
                    <option>Annet</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg></div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">Kort beskrivelse *</label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand focus:ring-0 transition-all p-4 font-medium outline-none resize-none text-gray-800 rounded-none" placeholder="Hva kan vi hjelpe deg med?"></textarea>
              </div>
              <div className="space-y-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-brand text-white py-6 rounded-none font-bold uppercase tracking-[0.25em] transition-all text-[11px] flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-dark active:scale-95'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sender...
                    </>
                  ) : CONTACT_PAGE_CONTENT.form.buttonText}
                </button>
                <p className="text-[10px] text-gray-400 leading-relaxed font-sans text-center">
                  Ved å sende inn dette skjemaet godtar du at Murmester Halvorsen AS kan kontakte deg angående din henvendelse og behandle dine personopplysninger i henhold til våre rutiner for personvern.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
