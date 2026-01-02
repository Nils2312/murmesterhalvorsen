
import { Service, Badge, GalleryImage } from './types';

/**
 * CONFIG & GLOBAL SETTINGS
 * Disse kan i Sanity ligge under en "Global Settings" dokumenttype.
 */
export const BRAND_COLOR = '#eb692d';
export const LOGO_URL = 'https://i.postimg.cc/V6R9Lg3G/logo.png';
export const BADGE_MESTER_URL = 'https://i.postimg.cc/Y9bgw9W6/mestermerke-1030x856.jpg';
export const BADGE_SENTRAL_URL = 'https://i.postimg.cc/RCpfsW90/w1200h1185.jpg';

export const CONTACT_INFO = {
  phone: "957 63 991",
  email: "post@murmesterhalvorsen.no",
  address: "Gudbrandsdalsvegen 2094, 2630 Ringebu",
  orgNr: "920 730 469",
  facebook: "https://www.facebook.com/murmesterhalvorsen",
  instagram: "https://www.instagram.com/murmesterhalvorsen/",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.4842795454655!2d10.138249!3d61.53051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4669539266191b2b%3A0xe5495594b29f0326!2sGudbrandsdalsvegen%202094%2C%202630%20Ringebu!5e0!3m2!1sno!2sno!4v1715600000000!5m2!1sno!2sno"
};

/**
 * FORSIDE (HOME)
 * Kan mappes til en "Sidetype: Forside" i Sanity.
 */
export const HOME_CONTENT = {
  hero: {
    title: "MURARBEID I TOPPKLASSE",
    subtitle: "Murmester Halvorsen AS leverer solid murerhåndverk i Ringebu og omegn. Vi bygger med stolthet og presisjon for at det skal vare i generasjoner.",
    image: "/images/1.jpg"
  },
  whyUs: {
    title: "Hvorfor oss?",
    image: "/images/2.jpg",
    points: [
      {
        id: '01',
        label: 'KVALITET',
        title: 'Faglig Stolthet',
        desc: 'Som autorisert mesterbedrift garanterer vi at alle ledd i prosessen utføres etter høyeste faglige standard.',
      },
      {
        id: '02',
        label: 'TILLIT',
        title: 'Punktlighet',
        desc: 'Vi respekterer din tid. Vi holder tidsfrister, møter opp som avtalt og etterlater alltid en ryddig byggeplass.',
      },
      {
        id: '03',
        label: 'ERFARING',
        title: 'Lokal Innsikt',
        desc: 'Over 7 års erfaring med Gudbrandsdalens unike byggetradisjoner og krevende værforhold.',
      }
    ]
  },
  stats: {
    murerer: 10,
    erfaring: 7,
    prosjekter: 50
  }
};

/**
 * TJENESTER (SERVICES)
 * Kan mappes til en "Sidetype: Tjenester" og en "Array" med Tjeneste-objekter.
 */
export const SERVICES_PAGE_CONTENT = {
  hero: {
    badge: "Fagmessig utførelse",
    title: "VÅRE TJENESTER",
    description: "Vi kombinerer tradisjon med innovasjon. Under ser du bredden i hva vi kan utføre for deg."
  },
  cta: {
    badge: "Klar for ditt prosjekt?",
    title: "Vi leverer på forespørsel",
    buttonText: "Be om tilbud"
  }
};

export const SERVICES: Service[] = [
  {
    id: 'mur-puss',
    title: 'Mur- og pussarbeid i Gudbrandsdalen',
    description: 'Vi utfører alt innen tradisjonell muring og pussing i Ringebu og omegn. Fra reparasjon av eldre grunnmurer til moderne leca-muring og dekorativ puss som gir boligen eller hytta et nytt løft.',
    imageUrl: '/images/3.png',
    category: 'Murerhåndverk'
  },
  {
    id: 'naturstein',
    title: 'Naturstein & Skiferarbeid',
    description: 'Som spesialister på tørrmuring og legging av skifer, skaper vi unike murer og uteområder. Vi tilpasser natursteinen slik at den glir sømløst inn i terrenget i Gudbrandsdalen og fjellet rundt Ringebu.',
    imageUrl: '/images/4.jpg',
    category: 'Spesialfelt'
  },
  {
    id: 'flis',
    title: 'Flislegging & Våtrom',
    description: 'Nøyaktig flisleggerarbeid for bad, kjøkken og vaskerom. Som fagfolk sørger vi for at alle våtrom utføres etter gjeldende standarder (våtromsnormen) for din trygghet.',
    imageUrl: '/images/5.jpg',
    category: 'Presisjon'
  },
  {
    id: 'pipe',
    title: 'Piperehabilitering & Ildsted',
    description: 'Brannsikkerhet er kritisk. Vi rehabiliterer gamle skorsteiner med moderne, godkjente metoder og monterer nye, effektive ildsteder som varmer godt i kalde vintre.',
    imageUrl: '/images/6.jpg',
    category: 'Sikkerhet'
  }
];

/**
 * GALLERI
 * En enkel "Bilde-array" i Sanity.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: '/images/7.jpg', alt: 'Murerarbeid' },
  { id: '2', url: '/images/8.jpg', alt: 'Pussarbeid' },
  { id: '3', url: '/images/9.jpg', alt: 'Naturstein' },
  { id: '4', url: '/images/10.jpg', alt: 'Flislegging' },
  { id: '5', url: '/images/11.jpg', alt: 'Ildsted' },
  { id: '6', url: '/images/12.jpg', alt: 'Byggeplass' },
  { id: '7', url: '/images/13.jpg', alt: 'Grunnmur' },
  { id: '8', url: '/images/14.jpg', alt: 'Pipe' },
  { id: '9', url: '/images/15.jpg', alt: 'Pipe' },
  { id: '10', url: '/images/16.jpg', alt: 'Pipe' },
  { id: '11', url: '/images/17.jpg', alt: 'Pipe' },
  { id: '12', url: '/images/18.jpg', alt: 'Pipe' },
  { id: '12', url: '/images/19.jpg', alt: 'Pipe' },
  { id: '13', url: '/images/20.jpg', alt: 'Pipe' },
  { id: '14', url: '/images/2.jpg', alt: 'Pipe' },
  { id: '15', url: '/images/4.jpg', alt: 'Pipe' },
];

/**
 * OM OSS (ABOUT)
 */
export const ABOUT_CONTENT = {
  hero: {
    badge: "Hvem er vi?",
    title: "DIN TRYGGE MURPARTNER SIDEN 2018",
    images: [
      "/images/21.jpg",
      "/images/22.jpg"
    ]
  },
  intro: [
    "Murmester Halvorsen AS ble grunnlagt in 2018 med en visjon om å bevare det stolte murerhåndverket i en travel hverdag. Vi mener at murerfaget er en kunstform som krever både tålmodighet, nøyaktighet og dyp forståelse for materialer.",
    "I dag teller vi 10 dedikerte murere som hver dag går på jobb for å skape verdier for våre kunder. Vi tar på oss alt fra mindre reparasjoner hos privatkunder til større prosjekter for entreprenører og borettslag."
  ],
  quote: "Vi murer for fremtiden. Det vi skaper i dag skal stå i generasjoner.",
  values: {
    title: "Våre Verdier",
    items: [
      {
        title: "Kvalitet",
        desc: "Vi bruker kun de beste materialene og følger alle bransjekrav for å sikre et resultat av ypperste klasse i hvert eneste ledd."
      },
      {
        title: "Integritet",
        desc: "Vi er ærlige, punktlige og holder det vi lover. Hos oss får du en åpen prosess uten ubehagelige overraskelser underveis."
      },
      {
        title: "Bærekraft",
        desc: "Murverk er et av verdens mest bærekraftige byggematerialer. Vi bygger for ekstrem levetid og minimalt vedlikehold."
      }
    ]
  }
};

/**
 * KONTAKT (CONTACT)
 */
export const CONTACT_PAGE_CONTENT = {
  hero: {
    badge: "Ta kontakt",
    title: "BE OM TILBUD",
    description: "Vi utfører gratis befaring i Ringebu og omegn. Beskriv prosjektet ditt under, så tar vi kontakt for en hyggelig prat."
  },
  form: {
    title: "Prosjektinfo",
    buttonText: "Send Forespørsel"
  }
};

/**
 * PERSONVERN (PRIVACY)
 */
export const PRIVACY_CONTENT = {
  title: "Personvernerklæring",
  lastUpdated: "Sist oppdatert: 12. desember 2025",
  sections: [
    {
      title: "Hvilke opplysninger vi samler inn",
      content: "Når du bruker vårt kontaktskjema, samler vi inn navn, e-postadresse, telefonnummer og eventuelt adresse og prosjektinformasjon du selv oppgir."
    },
    {
      title: "Hvorfor vi samler inn disse dataene",
      content: "Vi bruker denne informasjonen utelukkende for å kunne besvare din henvendelse, utføre befaring og gi deg et pristilbud på ønsket murerarbeid."
    },
    {
      title: "Lagring og sletting",
      content: "Vi lagrer ingen informasjon på selve nettsiden. Henvendelsen din lander som en e-post i vår innboks. Vi oppbevarer kontaktopplysninger så lenge det er nødvendig for kundeforholdet eller i henhold til lovpålagte arkiveringsplikter (f.eks. bokføringsloven)."
    },
    {
      title: "Deling av informasjon",
      content: "Vi deler aldri dine personopplysninger med tredjeparter uten ditt uttrykkelige samtykke."
    },
    {
      title: "Dine rettigheter",
      content: "Du har rett til å be om innsyn i hvilke opplysninger vi har om deg, og du kan når som helst be oss om å slette dine data fra våre systemer."
    }
  ]
};

/**
 * FOOTER
 */
export const FOOTER_CONTENT = {
  description: "Profesjonelt murerhåndverk med fokus på varig kvalitet og presisjon. Vi leverer solid arbeid som står i generasjoner.",
  copyrightText: "Murmester Halvorsen AS"
};

/**
 * BADGES / GODKJENNINGER
 */
export const BADGES: Badge[] = [
  {
    id: 'mester',
    title: 'Autorisert Murmester',
    imageUrl: BADGE_MESTER_URL,
    description: 'Din garanti for at murarbeidet utføres av kvalifiserte fagfolk med mesterbrev.'
  },
  {
    id: 'sentral',
    title: 'Sentralt Godkjent bedrift',
    imageUrl: BADGE_SENTRAL_URL,
    description: 'Vi har sentral godkjenning for ansvarsrett, som beviser vår faglige kompetanse i byggesaker.'
  }
];
