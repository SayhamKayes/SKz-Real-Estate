import React, { useState } from 'react';
import { useRealEstate } from '../../Context/RealEstateContext.jsx';
import {
  ShieldCheck,
  Award,
  Layers,
  Users,
  Building2,
  HardHat,
  FileCheck2,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Briefcase
} from 'lucide-react';

export default function AboutHeritage() {
  const { companyInfo, openInquiry, navigateTo } = useRealEstate();
  const [activeTab, setActiveTab] = useState('process'); // 'process', 'mega', 'nilachal', 'team', 'certs'

  // 5-Stage Construction & Quality Management Process (PDF Page 8)
  const buildingProcesses = [
    {
      step: '01',
      title: 'Legal Vetting & Title Verification',
      subtitle: 'Unencumbered Ownership Guarantee',
      desc: 'Comprehensive vetting of all land deeds, mutation records, CS/RS/BS porcha, and statutory permissions prior to project commencement, ensuring sound entitlement.',
      points: ['Full title search & non-encumbrance vetting', 'RAJUK plan sanction compliance', 'Direct landowner joint venture agreements'],
    },
    {
      step: '02',
      title: 'Geotechnical & Soil Investigation',
      subtitle: 'Sub-surface Scientific Analysis',
      desc: 'Extensive on-site borehole testing and soil bearing capacity analysis by certified geotechnical engineers to design bespoke deep cast-in-situ piling foundations.',
      points: ['Digital soil load-bearing capacity reporting', 'Seismic Zone vulnerability mitigation', 'Engineered deep foundation structural designs'],
    },
    {
      step: '03',
      title: 'Budgeting & Tender Programming',
      subtitle: 'Transparent Resource Allocation',
      desc: 'Preparation of exhaustive Bill of Quantities (BOQ), tender schedules, and resource programming to manage deadlines, cost controls, and material procurements.',
      points: ['Rigorous cost-efficiency management', 'High-grade European & Indian material sourcing', 'Granular milestone-based progress scheduling'],
    },
    {
      step: '04',
      title: 'Monitored Construction Execution',
      subtitle: 'Zero-Defect Quality Assurance',
      desc: 'Continuous on-site supervision by licensed structural engineers. Routine slump tests, cylinder crushing tests, and daily progress documentation.',
      points: ['BNBC & ACI code structural compliance', 'Daily inspection by senior site engineers', 'Seismic damping & post-tensioned slab technology'],
    },
    {
      step: '05',
      title: 'Handover & Facility Management',
      subtitle: 'Lifetime Asset Care & Support',
      desc: 'Seamless handover with complete architectural as-built drawings, utility commissioning, fire safety audit, and long-term facility maintenance support.',
      points: ['100% on-time milestone handover rate', 'Utility & backup generator commissioning', 'Dedicated facility management & concierge support'],
    },
  ];

  // Key Mega Government & Infrastructure Projects Supplied (PDF Pages 10-13)
  const megaSupplyProjects = [
    {
      name: '400m 2nd Kanchpur Bridge',
      client: 'OSJI Joint Venture / Govt. of Bangladesh',
      date: 'March 2019',
      scope: 'Sole supplier of Indian Pakur stone aggregates for landmark bridge construction.',
      badge: 'National Mega-Bridge',
    },
    {
      name: '2nd Meghna Bridge',
      client: 'OSJI Joint Venture / Roads & Highways Dept.',
      date: 'May 2019',
      scope: 'High-density crushed Pakur stone aggregates supplied for bridge pier foundations.',
      badge: 'Highway Lifeline',
    },
    {
      name: '1,410-metre 2nd Gomati Bridge',
      client: 'OSJI Joint Venture',
      date: 'May 2019',
      scope: 'Largest bridge on Dhaka-Chittagong economic highway; 118,000 M.Ton Pakur aggregate.',
      badge: '1.41 KM Mega-Span',
    },
    {
      name: 'Hazrat Shahjalal Int. Airport CAAB Runway',
      client: 'Munck Asfalt A/S (Denmark)',
      date: '2013 - 2014',
      scope: '500,000 cft Indian Meghalaya stone boulders for international aviation runway overlay.',
      badge: 'Aviation Infrastructure',
    },
    {
      name: 'Moghbazar-Mouchak Flyover Project',
      client: 'Simplex – Navana J.V.',
      date: '2014',
      scope: '200,000 cft Pakur & Meghalaya stone chips for capital city elevated expressway.',
      badge: 'Urban Expressway',
    },
    {
      name: 'Dharola & Gangachora Bridges',
      client: 'Navana Construction Ltd.',
      date: '2013 - 2014',
      scope: '415,000 cft Indian Pakur & Jalpaiguri stone chips for northern river crossings.',
      badge: 'Riverine Connectivity',
    },
  ];

  // The Signature "Nilachal" Residential & Commercial Project Series (PDF Pages 5, 24)
  const nilachalProjects = [
    {
      code: 'NILACHAL 1 - 5',
      type: 'Completed Residential Series',
      units: 'Multi-Family Boutique Residences',
      location: 'Mirpur Enclave, Dhaka',
      status: 'Successfully Handed Over',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      desc: 'Five landmark residential communities delivered with 100% customer satisfaction, unencumbered titles, and superior construction quality.',
    },
    {
      code: 'NILACHAL 6',
      type: 'Commercial & Corporate Tower',
      units: 'Executive Office Spaces & Showrooms',
      location: 'Mirpur Commercial Zone, Dhaka',
      status: 'Ongoing Construction',
      statusColor: 'bg-amber-100 text-amber-800 border-amber-200',
      desc: 'Prime commercial destination with modern double-height atrium, multi-level basement parking, and advanced earthquake-resistant engineering.',
    },
    {
      code: 'NILACHAL 7',
      type: 'Upcoming Signature Residence',
      units: '6 Katha Land Parcel',
      location: 'Plot 21 B/B & 22 B/A, Mazar Road 2nd Colony, Mirpur, Dhaka-1216',
      status: 'Upcoming Launch',
      statusColor: 'bg-blue-100 text-blue-800 border-blue-200',
      desc: 'Exclusive boutique residential living with landscaped garden terraces, solar-backed emergency power, and acoustic insulated glazing.',
    },
    {
      code: 'NILACHAL 8',
      type: 'Upcoming Premium Residence',
      units: '9 Katha Land Parcel',
      location: 'Plot 278, Kusumbag, Uttar Bishil, Mirpur-1, Dhaka-1216',
      status: 'Architectural Planning',
      statusColor: 'bg-purple-100 text-purple-800 border-purple-200',
      desc: 'Spacious 3 & 4 BHK luxury residences featuring biophilic cross-ventilation, rooftop infinity pavilion, and private lift lobbies.',
    },
    {
      code: 'NILACHAL 9',
      type: 'Upcoming Mega Residential Landmark',
      units: '19 Katha Prime Parcel',
      location: 'Plot 816, South Manipur, Mirpur-1, Dhaka-1216',
      status: 'Flagship Upcoming',
      statusColor: 'bg-[#B48C57]/15 text-[#8C6B38] border-[#B48C57]/30',
      desc: 'The crowning jewel of the Nilachal portfolio across 19 katha: expansive landscaped podium, community wellness club, and dual elevators.',
    },
  ];

  // Leadership & Project Management Team (PDF Pages 9, 14, 16, 17)
  const corporateTeam = [
    {
      name: 'MD. Mamunur Rashid',
      role: 'Managing Director',
      credentials: 'Master in Bangla, National University',
      exp: '25 Years of Industry Experience',
      phone: '+880 1678-112374',
      email: 'ahdl2024@gmail.com',
      highlight: 'Visionary leadership guiding Al-Modina Homes to premier real estate and national infrastructure milestones.',
    },
    {
      name: 'Nishat Ahmad',
      role: 'Director',
      credentials: 'Master in Political Science, National University',
      exp: '15 Years of Corporate Management Experience',
      phone: '+880 1915-436961',
      email: 'kazal35nabil@gmail.com',
      highlight: 'Overseeing corporate governance, joint ventures, client satisfaction, and strategic land acquisitions.',
    },
    {
      name: 'Aminul Islam',
      role: 'Chief Executive Officer (CEO)',
      credentials: 'Executive Project Administration',
      exp: 'Operational Leadership',
      highlight: 'Directing daily company operations, design-to-handover workflows, and inter-departmental synergies.',
    },
    {
      name: 'Saidur Rahman',
      role: 'Lead Project Engineer',
      credentials: 'B.Sc. Civil Engineering',
      exp: 'Structural Design & Quality Control',
      highlight: 'Ensuring rigorous BNBC structural standards, on-site material testing, and earthquake resistance.',
    },
    {
      name: 'Mahfuzur Rahaman',
      role: 'General Manager (GM)',
      credentials: 'Business Management & Logistics',
      exp: 'Supply Chain & Operations',
      highlight: 'Managing supply line logistics, sister concern operations, and vendor partnerships.',
    },
    {
      name: 'Amzad Hossain',
      role: 'Project Manager',
      credentials: 'Site Execution & Planning',
      exp: 'Project Scheduling & Quality',
      highlight: 'Monitoring daily construction milestones, site safety protocols, and sub-contractor coordination.',
    },
    {
      name: 'Shariar Alam Ifty',
      role: 'Accounts & Finance Manager',
      credentials: 'Financial Accounting & Audit',
      exp: 'Fiscal Discipline & Billing',
      highlight: 'Ensuring transparent client billing schedules, financial auditing, and vendor account reconciliation.',
    },
    {
      name: 'Abdul Kayum',
      role: 'Senior Site Construction Supervisor',
      credentials: 'Field Operations & QA',
      exp: 'Site Supervision',
      highlight: 'On-ground monitoring of structural casting, safety compliance, and material storage.',
    },
  ];

  // Statutory Certifications (PDF Pages 25-30)
  const certifications = [
    {
      title: 'RAJUK Enlistment Certificate',
      body: 'Rajdhani Unnayan Kartripakkha (RAJUK)',
      desc: 'Official enlistment permitting design, multi-storied construction, and development across the Dhaka metropolitan master plan.',
      badge: 'Official Regulator',
    },
    {
      title: 'Certificate of Incorporation',
      body: 'Registrar of Joint Stock Companies & Firms (RJSC)',
      desc: 'Incorporated under the Companies Act (Act XVIII of 1994) as a certified Limited Real Estate & Construction enterprise.',
      badge: 'Govt. Incorporated',
    },
    {
      title: 'Company Trade License',
      body: 'Dhaka North City Corporation (DNCC)',
      desc: 'Renewed and fully compliant trade license for Real Estate Development, Building Construction & Material Supply.',
      badge: 'Statutory License',
    },
    {
      title: 'TIN & National Tax Certificate',
      body: 'National Board of Revenue (NBR)',
      desc: 'Fully registered corporate taxpayer with flawless fiscal compliance and verified Tax Identification records.',
      badge: 'Tax Compliant',
    },
    {
      title: 'Work Certificate — Islami Bank Bangladesh Ltd.',
      body: 'Dar Us Salam Branch, Mirpur',
      desc: 'Prestigious corporate work completion certificate attesting to highest quality execution, structural safety, and trust.',
      badge: 'Banking Endorsement',
    },
    {
      title: 'IBCCI Trade Membership',
      body: 'India-Bangladesh Chamber of Commerce and Industry',
      desc: 'Active trade council member facilitating cross-border stone aggregate import for government mega-infrastructure projects.',
      badge: 'Trade Council',
    },
  ];

  return (
    <div id="about-heritage" className="w-full bg-[#FBFBF9] text-stone-900">
      
      {/* 1. HERO & COMPANY OVERVIEW (Clean Header with NO top horizontal line) */}
      <section className="pt-8 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          
          {/* Left Title & Heritage */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[#B48C57] uppercase mb-4">
              <Building2 className="w-4 h-4 text-[#B48C57]" />
              <span>COMPANY PROFILE & HERITAGE</span>
              <span aria-hidden="true">·</span>
              <span>ESTD. 2010</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.12] mb-6">
              Al-Modina Homes <br />
              <span className="italic font-light text-stone-700">Development Limited</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Al-Modina Homes Development Ltd. (AMHDL) was established in 2010 with the singular vision 
              of creating sustainable, high-standard residential and commercial landmarks while supplying high-grade 
              materials to Bangladesh’s most critical mega-infrastructure projects.
            </p>
          </div>

          {/* Right Corporate Fast Facts Card */}
          <div className="w-full lg:w-[380px] bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#B48C57] font-semibold border-b border-stone-100 pb-2">
              Corporate Vital Statistics
            </div>

            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <div className="text-2xl font-serif font-bold text-stone-900">2010</div>
                <div className="text-[11px] font-mono text-stone-500 uppercase mt-0.5">Year Founded</div>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <div className="text-2xl font-serif font-bold text-[#B48C57]">16+</div>
                <div className="text-[11px] font-mono text-stone-500 uppercase mt-0.5">Years Legacy</div>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <div className="text-2xl font-serif font-bold text-stone-900">100%</div>
                <div className="text-[11px] font-mono text-stone-500 uppercase mt-0.5">On-Time Handover</div>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <div className="text-2xl font-serif font-bold text-stone-900">RAJUK</div>
                <div className="text-[11px] font-mono text-stone-500 uppercase mt-0.5">Enlisted & Reg.</div>
              </div>
            </div>

            <div className="pt-2 text-xs text-stone-500 flex items-center justify-between border-t border-stone-100">
              <span>RJSC Incorporated Limited Co.</span>
              <span className="font-mono text-stone-700 font-semibold">AMHDL</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MANAGING DIRECTOR & LEADERSHIP STATEMENT (PDF Pages 2 & 4 & 16) */}
      <section className="py-16 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: MD Quote and Vision */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#B48C57] font-semibold bg-[#B48C57]/10 px-3 py-1 rounded-full">
                <span>Message from the Managing Director</span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-900 font-normal leading-relaxed italic">
                “Since our inception in 2010, our commitment has been to maintain quality, integrity, and 
                professionalism in every step of our journey. We aim to deliver better service, adopt modern 
                engineering solutions, and build lasting relationships based on trust.”
              </blockquote>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                “Our planning, programming, and service-oriented culture guarantee that we consistently give our 
                best in every endeavor we undertake. I express sincere gratitude to our valued clients, financial partners, 
                and dedicated engineering team whose support encourages us to move forward with unwavering confidence.”
              </p>

              {/* MD Profile Credentials */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-xl font-bold text-stone-900">
                    MD. Mamunur Rashid
                  </h4>
                  <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mt-0.5">
                    Managing Director · Al-Modina Homes Development Ltd.
                  </div>
                  <div className="text-xs text-[#B48C57] font-medium mt-1">
                    Master in Bangla, National University · 25 Years of Industry Experience
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="tel:+8801678112374"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B48C57]" />
                    <span>+880 1678-112374</span>
                  </a>
                  <a
                    href="mailto:ahdl2024@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs rounded-lg transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#B48C57]" />
                    <span>ahdl2024@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Co-Director & Official Contractor Endorsement Box */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Director Card */}
              <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#B48C57] font-semibold">
                  Executive Director
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-900">
                  Nishat Ahmad
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Master in Political Science, National University with 15 years of leadership overseeing 
                  corporate governance, legal land entitlement, and joint-venture stakeholder relations.
                </p>
                <div className="text-xs font-mono text-stone-500 pt-1 border-t border-stone-200/60">
                  Mobile: +880 1915-436961
                </div>
              </div>

              {/* Official Contractor Endorsement */}
              <div className="p-6 bg-stone-900 text-white rounded-2xl shadow-md relative overflow-hidden">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#B48C57] mb-2">
                  Official Contractor Endorsement
                </div>
                <p className="text-xs text-stone-300 italic leading-relaxed mb-3">
                  “We are honored to work as the official contractor for Al-Modina Homes. Under their leadership, 
                  our priority remains quality workmanship, structural safety, and timely project delivery.”
                </p>
                <div className="text-xs font-semibold text-white">
                  Md. Mosharof Hossain
                </div>
                <div className="text-[11px] text-stone-400">
                  Proprietor · Minhaj Enterprise
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SECTION TABS (Classic, High-Visibility Architectural Switcher) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Navigation Selector Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] text-[#B48C57] uppercase mb-2">
              COMPREHENSIVE COMPANY DOSSIER
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
              Explore Our Capabilities & Pedigree
            </h2>
          </div>

          {/* Classic Tab Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/70 rounded-2xl">
            <button
              type="button"
              onClick={() => setActiveTab('process')}
              className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer ${
                activeTab === 'process'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Building Process
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mega')}
              className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer ${
                activeTab === 'mega'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Mega Infrastructure Supply
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('nilachal')}
              className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer ${
                activeTab === 'nilachal'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Nilachal Projects
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('team')}
              className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer ${
                activeTab === 'team'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Corporate Team
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('certs')}
              className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer ${
                activeTab === 'certs'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Certificates
            </button>
          </div>
        </div>

        {/* TAB 1: THE 5-STAGE BUILDING PROCESS */}
        {activeTab === 'process' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-xs mb-8">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                The 5-Stage Building & Quality Management Process
              </h3>
              <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
                Prior to commencing construction or tender preparation, Al-Modina Homes follows a strict 
                institutional protocol ensuring full legal security, scientific geotechnical validation, and monitored milestone execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildingProcesses.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-xs hover:border-[#B48C57] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-bold text-[#B48C57]">{p.step}</span>
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-stone-100 rounded text-stone-600">
                        STAGE {idx + 1}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-stone-900 leading-snug">
                      {p.title}
                    </h4>
                    <div className="text-xs font-medium text-[#B48C57] uppercase tracking-wider">
                      {p.subtitle}
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <ul className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-[11px] text-stone-700">
                    {p.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B48C57] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Summary Card */}
              <div className="p-6 bg-stone-900 text-white rounded-2xl flex flex-col justify-between shadow-md">
                <div className="space-y-3">
                  <div className="text-xs font-mono tracking-widest text-[#B48C57] uppercase">
                    OUR ASSURANCE
                  </div>
                  <h4 className="font-serif text-2xl font-bold leading-snug">
                    Zero Compromise on Material & Seismic Safety
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Every project is designed strictly conforming to the Bangladesh National Building Code (BNBC) 
                    and American Concrete Institute (ACI) standards for maximum generational longevity.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#DFBA73]">
                  100% On-Time Handover Pledged
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MEGA INFRASTRUCTURE SUPPLY TRACK RECORD */}
        {activeTab === 'mega' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-xs mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
                  National Mega-Infrastructure Supplier Track Record
                </h3>
                <p className="text-sm text-stone-600 max-w-2xl leading-relaxed">
                  Through our sister concern firms <strong>MB Associates</strong> and our <strong>Building Material Warehouse</strong>, 
                  AMHDL is one of Bangladesh’s leading importers of high-density Indian Pakur stones, rocks, and boulders.
                </p>
              </div>
              <div className="px-4 py-2 bg-stone-100 rounded-xl border border-stone-200 text-xs font-mono text-stone-800">
                Member: <strong>IBCCI</strong> (India-Bangladesh Chamber)
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {megaSupplyProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-xs flex flex-col justify-between space-y-4 hover:border-[#B48C57] transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 bg-stone-100 rounded-md text-[#B48C57] font-semibold">
                        {proj.badge}
                      </span>
                      <span className="text-xs font-mono text-stone-500">{proj.date}</span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-stone-900 leading-snug">
                      {proj.name}
                    </h4>

                    <div className="text-xs font-semibold text-stone-800">
                      Client / Contractor: <span className="font-normal text-stone-600">{proj.client}</span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed pt-1">
                      {proj.scope}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-[#B48C57] font-medium">
                    <span>Verified Supplier Record</span>
                    <span>✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: THE SIGNATURE NILACHAL PROJECT SERIES */}
        {activeTab === 'nilachal' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-xs mb-8">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
                The "Nilachal" Real Estate Portfolio
              </h3>
              <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
                From boutique completed residences to major upcoming residential landmarks across prime zones in Mirpur and Dhaka, 
                our Nilachal series exemplifies thoughtful spatial planning and generational asset appreciation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nilachalProjects.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-xs flex flex-col justify-between space-y-4 hover:border-[#B48C57] transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xl font-bold text-stone-900">{p.code}</span>
                      <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${p.statusColor}`}>
                        {p.status}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#B48C57] uppercase tracking-wide">
                      {p.type} · {p.units}
                    </div>

                    <div className="flex items-start gap-1.5 text-xs text-stone-700">
                      <MapPin className="w-3.5 h-3.5 text-[#B48C57] shrink-0 mt-0.5" />
                      <span>{p.location}</span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openInquiry(`Inquiry regarding ${p.code}`)}
                      className="text-xs font-semibold uppercase tracking-wider text-stone-900 hover:text-[#B48C57] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire on Project</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CORPORATE MANAGEMENT & LEADERSHIP TEAM */}
        {activeTab === 'team' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-xs mb-8">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
                Executive Leadership & Project Management Chart
              </h3>
              <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
                Our multidisciplinary management team unites seasoned civil engineers, project directors, finance experts, 
                and site supervisors dedicated to maintaining uncompromising professional standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {corporateTeam.map((member, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-stone-200/90 rounded-2xl shadow-xs flex flex-col justify-between space-y-3 hover:border-[#B48C57] transition-all"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 font-bold font-serif">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    
                    <h4 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                      {member.name}
                    </h4>

                    <div className="text-xs font-mono text-[#B48C57] uppercase font-semibold">
                      {member.role}
                    </div>

                    <div className="text-[11px] text-stone-500">
                      {member.credentials}
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed pt-1">
                      {member.highlight}
                    </p>
                  </div>

                  {(member.phone || member.email) && (
                    <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-500 font-mono">
                      {member.phone && <div>{member.phone}</div>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: STATUTORY CERTIFICATIONS */}
        {activeTab === 'certs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-xs mb-8">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
                Government Accreditations & Statutory Compliance
              </h3>
              <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
                Al-Modina Homes Development Ltd. holds all necessary statutory licenses, RAJUK enlistments, 
                corporate registrations, and financial credentials ensuring complete safety and peace of mind for buyers and landowners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-xs flex flex-col justify-between space-y-3 hover:border-[#B48C57] transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-stone-100 rounded text-stone-700 font-semibold">
                        {cert.badge}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-[#B48C57]" />
                    </div>

                    <h4 className="font-serif text-lg font-bold text-stone-900">
                      {cert.title}
                    </h4>

                    <div className="text-xs font-semibold text-stone-800">
                      Issuing Authority: <span className="font-normal text-stone-600">{cert.body}</span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span>Legally Active & Verified</span>
                    <span className="text-[#B48C57] font-bold">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* 4. CORPORATE CONTACT STRIP */}
      <section className="py-12 bg-stone-100 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#B48C57] font-semibold">
              Corporate Headquarters
            </div>
            <div className="text-sm font-semibold text-stone-900 mt-1">
              {companyInfo.headquarters}
            </div>
            <div className="text-xs text-stone-600 mt-0.5">
              Tel: {companyInfo.hotline} · {companyInfo.directSales} · Email: {companyInfo.email}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openInquiry('General Corporate Inquiry')}
              className="px-6 py-3 bg-stone-900 hover:bg-[#B48C57] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              Contact Our Directors
            </button>
            <button
              type="button"
              onClick={() => navigateTo('projects')}
              className="px-6 py-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              View Nilachal Projects
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
