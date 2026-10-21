import portfolio1 from '../assets/portfolios/portfolio_1.jpg';
import portfolio2 from '../assets/portfolios/portfolio_2.jpg';
import portfolio3 from '../assets/portfolios/portfolio_3.jpg';
import portfolio4 from '../assets/portfolios/portfolio_4.jpg';
import portfolio5 from '../assets/portfolios/portfolio_5.jpg';

/**
 * Portfolio Showcase Configuration
 * 
 * To change or customize any slide:
 * 1. Replace the corresponding image in `Frontend/assets/portfolios/` (or `public/assets/portfolios/`):
 *    - portfolio_1.jpg (Slide 01)
 *    - portfolio_2.jpg (Slide 02)
 *    - portfolio_3.jpg (Slide 03)
 *    - portfolio_4.jpg (Slide 04)
 *    - portfolio_5.jpg (Slide 05)
 * 2. You can also edit the title, tag, description, and specs below.
 */
export const PORTFOLIO_SHOWCASE_ITEMS = [
  {
    id: 1,
    number: '01',
    category: 'CRAFT & INTEGRITY',
    title: 'Superior Quality.',
    image: portfolio1,
    fallbackImage: '/assets/portfolios/portfolio_1.jpg',
    alt: 'Superior Quality Architecture',
    badge: 'STRUCTURAL MASTERPIECE',
    description:
      'Every detail is thoughtfully designed and built to the highest standards, ensuring long-term durability and refined elegance. From premium materials to flawless finishes, the result is a living experience defined by excellence and trust.',
    specs: [
      'Saint-Gobain acoustic double-glazing',
      'Hand-polished Italian marble flooring',
      'Zero-defect precision quality assurance',
    ],
  },
  {
    id: 2,
    number: '02',
    category: 'SPATIAL PROWESS',
    title: 'Innovative Design.',
    image: portfolio2,
    fallbackImage: '/assets/portfolios/portfolio_2.jpg',
    alt: 'Innovative Architectural Design',
    badge: 'AVANT-GARDE LIVING',
    description:
      'Pushing spatial boundaries with double-height cantilevered living pavilions, expansive panoramic vistas, and biophilic sky gardens. Architectural concepts that harmonize dramatic volume with natural daylighting and ventilation.',
    specs: [
      'Double-height 6.4m living pavilions',
      'Cantilevered private terrace pool deck',
      'Biophilic cross-ventilation orientation',
    ],
  },
  {
    id: 3,
    number: '03',
    category: 'ATELIER FINISHES',
    title: 'Premium Materials.',
    image: portfolio3,
    fallbackImage: '/assets/portfolios/portfolio_3.jpg',
    alt: 'Premium European Materials',
    badge: 'EUROPEAN LUXURY',
    description:
      'Curated artisanal specifications imported from world-renowned European manufacturers: German Poggenpohl cabinetry, Miele smart induction cooktops, brushed bronze fixtures, and bookmatched Calacatta marble.',
    specs: [
      'Poggenpohl custom kitchens & Miele appliances',
      'Bookmatched Calacatta & Statuario marble',
      'Grohe Grandera brushed bronze brassware',
    ],
  },
  {
    id: 4,
    number: '04',
    category: 'ENGINEERING RIGOR',
    title: 'Structural Rigor.',
    image: portfolio4,
    fallbackImage: '/assets/portfolios/portfolio_4.jpg',
    alt: 'Structural Engineering Rigor',
    badge: 'SEISMIC RESILIENCE',
    description:
      'Engineered with deep pile foundation systems and BNBC Zone-4 seismic parameters. Equipped with advanced earthquake dampers, smart IoT climate automation, and triple-redundant life safety systems.',
    specs: [
      'BNBC Zone-4 seismic resistance certification',
      'Smart IoT multi-zone climate automation',
      'Triple-redundant emergency power substations',
    ],
  },
  {
    id: 5,
    number: '05',
    category: 'WHITE-GLOVE SERVICE',
    title: 'Exceptional Service.',
    image: portfolio5,
    fallbackImage: '/assets/portfolios/portfolio_5.jpg',
    alt: 'White-Glove Hospitality Service',
    badge: 'BESPOKE CONCIERGE',
    description:
      'Dedicated support throughout your journey, from initial concept to final delivery. Our team ensures every detail meets your expectations with personalized attention, biometric security, and 24/7 concierge.',
    specs: [
      '24/7 dedicated concierge & valet management',
      'Private biometric keyless lift access core',
      'Lifetime property care & facility support',
    ],
  },
];
