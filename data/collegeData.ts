export type DegreeLevel = 'UG' | 'PG' | 'Research';

export type AcademicStream =
  | 'All'
  | 'Computing & IT'
  | 'Commerce & Finance'
  | 'Management'
  | 'Sciences & Humanities';

export interface Programme {
  id: string;
  code: string;
  title: string;
  level: DegreeLevel;
  stream: Exclude<AcademicStream, 'All'>;
  duration: string;
  credits: number;
  department: string;
  eligibility: string;
  collaboration?: string;
  overview: string;
  coreSubjects: string[];
  careerOutcomes: string[];
}

export interface PlacementYearData {
  year: string;
  highestCtc: string;
  averageCtc: string;
  placementRate: string;
  totalOffers: string;
  recruitingCompanies: number;
  departmentBreakdown: {
    department: string;
    eligible: number;
    placed: number;
    medianCtc: string;
    topRecruiters: string;
  }[];
}

export interface CampusFacility {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
  hours: string;
  capacity: string;
  description: string;
  highlights: string[];
}

export interface AnnouncementItem {
  id: string;
  date: string;
  category: 'Admissions' | 'Examinations' | 'Academic' | 'Placements';
  title: string;
  detail: string;
}

export const COLLEGE_IMAGES = {
  heroCampus: '/src/assets/images/skasc_campus_hero_1794840726063.jpg',
  centralLibrary: '/src/assets/images/skasc_central_library_1794840726456.jpg',
  computingLab: '/src/assets/images/skasc_computing_lab_1794840726356.jpg',
  sportsPavilion: '/src/assets/images/skasc_auditorium_sports_1794840728651.jpg',
} as const;

export const PROGRAMMES: Programme[] = [
  {
    id: 'bsc-cs',
    code: 'UG-CS-101',
    title: 'B.Sc. Computer Science',
    level: 'UG',
    stream: 'Computing & IT',
    duration: '3 Years (6 Semesters)',
    credits: 140,
    department: 'Department of Computer Science',
    eligibility: 'Higher Secondary (10+2) with Mathematics or Computer Science',
    overview:
      'Foundational and applied training in algorithms, distributed systems, cloud architecture, and modern software engineering under the Outcome Based Education framework.',
    coreSubjects: [
      'Data Structures & Algorithms',
      'Operating Systems & Linux Kernel',
      'Database Management Systems',
      'Machine Learning Foundations',
      'Cloud Native Architecture',
    ],
    careerOutcomes: ['Software Engineer', 'Systems Analyst', 'Cloud Associate', 'Full-Stack Developer'],
  },
  {
    id: 'bsc-cs-cog',
    code: 'UG-TCS-104',
    title: 'B.Sc. Computer Science with Cognitive Systems',
    level: 'UG',
    stream: 'Computing & IT',
    duration: '3 Years (6 Semesters)',
    credits: 144,
    department: 'Department of Computer Science & Applications',
    eligibility: 'Higher Secondary (10+2) with Mathematics',
    collaboration: 'Industry-integrated curriculum with TCS',
    overview:
      'Designed in academic partnership with Tata Consultancy Services to prepare graduates for enterprise AI, cognitive automation, and business intelligence roles.',
    coreSubjects: [
      'Cognitive Computing & NLP',
      'Enterprise Analytics',
      'Python for Data Engineering',
      'Design Thinking & Agile Delivery',
      'Applied Statistics',
    ],
    careerOutcomes: ['Cognitive Systems Engineer', 'Data Analyst', 'AI Solutions Associate'],
  },
  {
    id: 'bca',
    code: 'UG-CA-102',
    title: 'Bachelor of Computer Applications (BCA)',
    level: 'UG',
    stream: 'Computing & IT',
    duration: '3 Years (6 Semesters)',
    credits: 140,
    department: 'Department of Computer Applications',
    eligibility: 'Higher Secondary (10+2) in any recognized stream with Mathematics / Computer Applications',
    overview:
      'Application-centric undergraduate programme blending full-stack web engineering, mobile platforms, UI systems, and enterprise DevOps.',
    coreSubjects: [
      'Object-Oriented Programming in Java',
      'Full-Stack Web Technologies',
      'Mobile Application Development',
      'Software Testing & Quality Assurance',
      'Information Security',
    ],
    careerOutcomes: ['Application Developer', 'QA Automation Engineer', 'Product Support Specialist'],
  },
  {
    id: 'bsc-ds',
    code: 'UG-DS-108',
    title: 'B.Sc. Data Science',
    level: 'UG',
    stream: 'Computing & IT',
    duration: '3 Years (6 Semesters)',
    credits: 142,
    department: 'Department of Data Science & Analytics',
    eligibility: 'Higher Secondary (10+2) with Mathematics / Statistics',
    overview:
      'Quantitative and computational curriculum combining statistical inference, big data pipelines, visual analytics, and predictive modeling.',
    coreSubjects: [
      'Probability & Statistical Inference',
      'Big Data Processing & Spark',
      'Data Visualization & Storytelling',
      'Deep Learning Fundamentals',
      'Ethics in Data Governance',
    ],
    careerOutcomes: ['Data Scientist', 'Business Intelligence Engineer', 'Quantitative Analyst'],
  },
  {
    id: 'bcom-pa',
    code: 'UG-COM-201',
    title: 'B.Com. Professional Accounting',
    level: 'UG',
    stream: 'Commerce & Finance',
    duration: '3 Years (6 Semesters)',
    credits: 140,
    department: 'Department of Commerce',
    eligibility: 'Higher Secondary (10+2) with Commerce / Accountancy',
    collaboration: 'Aligned with CA, CMA & ACCA pathways',
    overview:
      'Structured for aspiring Chartered Accountants and corporate finance leaders, integrating statutory auditing, direct taxation, and IFRS reporting.',
    coreSubjects: [
      'Corporate Accounting & IFRS',
      'Cost & Management Accounting',
      'Direct & Indirect Taxation (GST)',
      'Auditing & Assurance Standards',
      'Financial Markets & Derivatives',
    ],
    careerOutcomes: ['Audit Associate', 'Tax Consultant', 'Corporate Finance Analyst'],
  },
  {
    id: 'bcom-bps',
    code: 'UG-COM-205',
    title: 'B.Com. Business Process Services',
    level: 'UG',
    stream: 'Commerce & Finance',
    duration: '3 Years (6 Semesters)',
    credits: 140,
    department: 'Department of Commerce',
    eligibility: 'Higher Secondary (10+2) in Commerce / Business Studies',
    collaboration: 'Designed with Tata Consultancy Services (BPS)',
    overview:
      'Focuses on global banking operations, capital markets, insurance workflows, and enterprise resource planning systems.',
    coreSubjects: [
      'Banking & Financial Services Operations',
      'Capital Markets & Risk Management',
      'Supply Chain & Procurement Analytics',
      'Enterprise Resource Planning',
      'Business Communication & Ethics',
    ],
    careerOutcomes: ['BFSI Operations Analyst', 'Process Excellence Lead', 'Treasury Executive'],
  },
  {
    id: 'bba-ca',
    code: 'UG-MGT-301',
    title: 'Bachelor of Business Administration (BBA)',
    level: 'UG',
    stream: 'Management',
    duration: '3 Years (6 Semesters)',
    credits: 140,
    department: 'Department of Management Sciences',
    eligibility: 'Higher Secondary (10+2) in any recognized discipline',
    overview:
      'Develops managerial reasoning, organizational leadership, entrepreneurial strategy, and quantitative decision-making through case studies and live industry projects.',
    coreSubjects: [
      'Principles of Management & Strategy',
      'Consumer Behaviour & Brand Management',
      'Human Resource Analytics',
      'Operations & Logistics Management',
      'New Venture Creation',
    ],
    careerOutcomes: ['Management Trainee', 'Operations Coordinator', 'Business Development Lead'],
  },
  {
    id: 'bsc-biotech',
    code: 'UG-BIO-401',
    title: 'B.Sc. Biotechnology',
    level: 'UG',
    stream: 'Sciences & Humanities',
    duration: '3 Years (6 Semesters)',
    credits: 142,
    department: 'Department of Biosciences',
    eligibility: 'Higher Secondary (10+2) with Biology / Biotechnology / Chemistry',
    overview:
      'Laboratory-intensive undergraduate science programme spanning molecular genetics, microbial bioprocessing, immunology, and bioinformatics.',
    coreSubjects: [
      'Cell & Molecular Biology',
      'Recombinant DNA Technology',
      'Immunology & Medical Microbiology',
      'Bioprocess Engineering',
      'Genomics & Bioinformatics',
    ],
    careerOutcomes: ['Bioprocess Associate', 'Clinical Research Coordinator', 'QC Microbiologist'],
  },
  {
    id: 'bsc-cshm',
    code: 'UG-SH-406',
    title: 'B.Sc. Catering Science & Hotel Management',
    level: 'UG',
    stream: 'Sciences & Humanities',
    duration: '3 Years (6 Semesters)',
    credits: 140,
    department: 'Department of Catering Science & Hotel Management',
    eligibility: 'Higher Secondary (10+2) in any recognized stream',
    overview:
      'Combines culinary arts, hospitality operations, food safety standards, and luxury service management with mandatory star-hotel industrial training.',
    coreSubjects: [
      'Food Production & Patisserie',
      'Food & Beverage Service Operations',
      'Front Office & Accommodation Management',
      'Hospitality Law & HACCP',
      'Event & Revenue Management',
    ],
    careerOutcomes: ['Hospitality Management Trainee', 'Sous Chef', 'Cruise & Resort Operations'],
  },
  {
    id: 'msc-cs',
    code: 'PG-CS-501',
    title: 'M.Sc. Computer Science',
    level: 'PG',
    stream: 'Computing & IT',
    duration: '2 Years (4 Semesters)',
    credits: 96,
    department: 'Department of Computer Science',
    eligibility: 'B.Sc. Computer Science / BCA / B.Sc. IT or equivalent with 55% aggregate',
    overview:
      'Advanced postgraduate degree emphasizing neural architectures, cybersecurity engineering, distributed computing, and an independent final-semester dissertation.',
    coreSubjects: [
      'Advanced Algorithms & Complexity',
      'Deep Learning & Computer Vision',
      'Network & Cloud Security',
      'Distributed Systems Architecture',
      'Research Methodology & Thesis',
    ],
    careerOutcomes: ['Senior Software Engineer', 'ML Engineer', 'Research Associate'],
  },
  {
    id: 'mcom',
    code: 'PG-COM-601',
    title: 'Master of Commerce (M.Com.)',
    level: 'PG',
    stream: 'Commerce & Finance',
    duration: '2 Years (4 Semesters)',
    credits: 94,
    department: 'Department of Commerce',
    eligibility: 'B.Com. / BBA or allied commerce degree from a recognized university',
    overview:
      'Postgraduate specialization in corporate valuation, international trade policy, forensic accounting, and quantitative financial research.',
    coreSubjects: [
      'Strategic Financial Management',
      'International Trade & Forex',
      'Forensic Accounting & Fraud Examination',
      'Econometrics for Finance',
      'Corporate Governance & Sustainability',
    ],
    careerOutcomes: ['Financial Controller', 'Investment Research Analyst', 'Academician'],
  },
  {
    id: 'msw',
    code: 'PG-HUM-701',
    title: 'Master of Social Work (MSW)',
    level: 'PG',
    stream: 'Sciences & Humanities',
    duration: '2 Years (4 Semesters)',
    credits: 96,
    department: 'Department of Social Work',
    eligibility: 'Bachelor’s degree in any discipline from a recognized university',
    overview:
      'Fieldwork-anchored postgraduate degree offering specializations in Human Resource Management, Medical & Psychiatric Social Work, and Community Development.',
    coreSubjects: [
      'Social Work Research & Field Practicum',
      'Labour Legislation & Industrial Relations',
      'Community Health & Counselling',
      'Corporate Social Responsibility (CSR)',
      'Rural & Urban Governance',
    ],
    careerOutcomes: ['HR & Welfare Officer', 'CSR Programme Manager', 'Clinical Social Worker'],
  },
  {
    id: 'phd-cs',
    code: 'RES-CS-801',
    title: 'Ph.D. in Computer Science',
    level: 'Research',
    stream: 'Computing & IT',
    duration: '3–5 Years (Full-Time / Part-Time)',
    credits: 32,
    department: 'Centre for Research in Computing',
    eligibility: 'M.Sc. / M.Phil. in Computer Science with valid Bharathiar University CET / NET / SET',
    overview:
      'Doctoral research programme focusing on explainable AI, healthcare informatics, edge IoT security, and natural language processing for low-resource languages.',
    coreSubjects: [
      'Research Ethics & Publication Standards',
      'Systematic Literature Synthesis',
      'Doctoral Colloquium & Peer Review',
      'Grant Writing & Patent Filing',
    ],
    careerOutcomes: ['Principal Investigator', 'University Faculty', 'R&D Scientist'],
  },
  {
    id: 'phd-com',
    code: 'RES-COM-802',
    title: 'Ph.D. in Commerce & Management',
    level: 'Research',
    stream: 'Commerce & Finance',
    duration: '3–5 Years (Full-Time / Part-Time)',
    credits: 32,
    department: 'Centre for Commerce & Management Research',
    eligibility: 'M.Com. / MBA / M.Phil. with valid Bharathiar University CET / NET / SET',
    overview:
      'Doctoral scholarship addressing MSME cluster economics in Western Tamil Nadu, fintech adoption, ESG disclosures, and behavioural finance.',
    coreSubjects: [
      'Advanced Multivariate Econometrics',
      'Structural Equation Modeling',
      'Policy Analysis & Empirical Design',
      'Doctoral Dissertation Defense',
    ],
    careerOutcomes: ['Policy Economist', 'Professor of Finance', 'Corporate Strategy Advisor'],
  },
];

export const PLACEMENT_RECORDS: PlacementYearData[] = [
  {
    year: '2025–26',
    highestCtc: '13.72 LPA',
    averageCtc: '4.85 LPA',
    placementRate: '94.6%',
    totalOffers: '3,240',
    recruitingCompanies: 112,
    departmentBreakdown: [
      {
        department: 'Computer Science & Cognitive Systems',
        eligible: 640,
        placed: 618,
        medianCtc: '5.40 LPA',
        topRecruiters: 'TCS, Amazon, Cognizant, Zoho',
      },
      {
        department: 'Computer Applications & Data Science',
        eligible: 480,
        placed: 458,
        medianCtc: '5.10 LPA',
        topRecruiters: 'Infosys, Wipro, Capgemini, HCL',
      },
      {
        department: 'Commerce & Professional Accounting',
        eligible: 720,
        placed: 678,
        medianCtc: '4.45 LPA',
        topRecruiters: 'Deloitte, EY, TCS BPS, Goldman Sachs',
      },
      {
        department: 'Management Sciences (BBA)',
        eligible: 260,
        placed: 241,
        medianCtc: '4.30 LPA',
        topRecruiters: 'HDFC Bank, ICICI, Byju’s, Accenture',
      },
      {
        department: 'Biosciences & Hospitality',
        eligible: 310,
        placed: 285,
        medianCtc: '3.95 LPA',
        topRecruiters: 'Biocon, Taj Group, ITC Hotels, Apollo',
      },
    ],
  },
  {
    year: '2024–25',
    highestCtc: '12.50 LPA',
    averageCtc: '4.60 LPA',
    placementRate: '93.2%',
    totalOffers: '3,015',
    recruitingCompanies: 104,
    departmentBreakdown: [
      {
        department: 'Computer Science & Cognitive Systems',
        eligible: 615,
        placed: 584,
        medianCtc: '5.15 LPA',
        topRecruiters: 'TCS, Amazon, Wipro, Hexaware',
      },
      {
        department: 'Computer Applications & Data Science',
        eligible: 460,
        placed: 431,
        medianCtc: '4.80 LPA',
        topRecruiters: 'Infosys, Capgemini, Tech Mahindra',
      },
      {
        department: 'Commerce & Professional Accounting',
        eligible: 700,
        placed: 648,
        medianCtc: '4.25 LPA',
        topRecruiters: 'Deloitte, KPMG, TCS BPS, Federal Bank',
      },
      {
        department: 'Management Sciences (BBA)',
        eligible: 245,
        placed: 224,
        medianCtc: '4.10 LPA',
        topRecruiters: 'Axis Bank, Berger Paints, Zoho',
      },
      {
        department: 'Biosciences & Hospitality',
        eligible: 295,
        placed: 269,
        medianCtc: '3.80 LPA',
        topRecruiters: 'Syngene, Oberoi Group, Le Meridien',
      },
    ],
  },
  {
    year: '2023–24',
    highestCtc: '11.80 LPA',
    averageCtc: '4.35 LPA',
    placementRate: '91.8%',
    totalOffers: '2,860',
    recruitingCompanies: 98,
    departmentBreakdown: [
      {
        department: 'Computer Science & Cognitive Systems',
        eligible: 590,
        placed: 552,
        medianCtc: '4.90 LPA',
        topRecruiters: 'TCS, Cognizant, HCL, Mindtree',
      },
      {
        department: 'Computer Applications & Data Science',
        eligible: 440,
        placed: 406,
        medianCtc: '4.60 LPA',
        topRecruiters: 'Wipro, Infosys, Mphasis',
      },
      {
        department: 'Commerce & Professional Accounting',
        eligible: 685,
        placed: 625,
        medianCtc: '4.05 LPA',
        topRecruiters: 'Deloitte, EY, South Indian Bank',
      },
      {
        department: 'Management Sciences (BBA)',
        eligible: 230,
        placed: 208,
        medianCtc: '3.95 LPA',
        topRecruiters: 'HDFC, Asian Paints, Sutherland',
      },
      {
        department: 'Biosciences & Hospitality',
        eligible: 280,
        placed: 251,
        medianCtc: '3.65 LPA',
        topRecruiters: 'Dr. Reddy’s, Taj Hotels, Marriott',
      },
    ],
  },
];

export const TOP_RECRUITERS = [
  'Tata Consultancy Services',
  'Deloitte',
  'Amazon',
  'Cognizant',
  'Infosys',
  'Wipro',
  'Accenture',
  'Capgemini',
  'HCL Technologies',
  'Zoho Corporation',
  'Ernst & Young (EY)',
  'HDFC Bank',
];

export const RESEARCH_PILLARS = [
  {
    index: '01',
    id: 'research-cell',
    title: 'Centre for Research & Ph.D. Guidance',
    summary:
      'Recognized research departments supervising full-time and part-time doctoral scholars across Computing, Commerce, Biotechnology, and Social Work.',
    metrics: [
      { label: 'Indexed Publications (5 Yrs)', value: '1,420+' },
      { label: 'Active Ph.D. Supervisors', value: '64' },
      { label: 'Granted & Filed Patents', value: '38' },
    ],
    details:
      'Faculty and scholars receive seed grants, statistical lab access, and Scopus/Web of Science publication support alongside UGC-CARE workshops.',
  },
  {
    index: '02',
    id: 'iic',
    title: 'Institution’s Innovation Council (IIC 5-Star)',
    summary:
      'Awarded a 5-Star Rating by the Ministry of Education’s Innovation Cell for fostering student startups, design thinking, and prototype incubation.',
    metrics: [
      { label: 'MoE IIC Rating', value: '5 / 5 Stars' },
      { label: 'Student Prototypes Incubated', value: '52' },
      { label: 'Annual Hackathons & Ideathons', value: '14' },
    ],
    details:
      'The Kuniamuthur Innovation Hub pairs undergraduate teams with Coimbatore MSME founders and venture mentors to turn capstone projects into viable products.',
  },
  {
    index: '03',
    id: 'nptel',
    title: 'NPTEL-SWAYAM Local Chapter & MOOCs',
    summary:
      'Consistently ranked among the top Arts & Science local chapters nationally for faculty and student certifications in emerging domains.',
    metrics: [
      { label: 'National Chapter Standing', value: 'Top 25' },
      { label: 'Annual Student Certifications', value: '4,800+' },
      { label: 'Credit Transfer Courses', value: '28' },
    ],
    details:
      'Under Choice Based Credit System (CBCS), students earn verified academic credits via IIT/IISc NPTEL coursework seamlessly integrated into transcripts.',
  },
  {
    index: '04',
    id: 'iqac',
    title: 'Internal Quality Assurance Cell (IQAC)',
    summary:
      'Sustains continuous curriculum renewal, Outcome Based Education (OBE) audits, stakeholder feedback loops, and NAAC / NIRF documentation.',
    metrics: [
      { label: 'NAAC Accreditation', value: 'A Grade' },
      { label: 'Academic Audits / Year', value: '2 Cycles' },
      { label: 'Industry Board Members', value: '46' },
    ],
    details:
      'Every Board of Studies includes senior industry architects and academic peers from Bharathiar University to keep syllabi current each academic year.',
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'library',
    title: 'Central Digital Library & Reading Hall',
    subtitle: 'Knowledge Resource Centre · 68,000+ Volumes',
    image: COLLEGE_IMAGES.centralLibrary,
    caption: 'Fig. 3 — Main Reading Room & Reference Stacks, Central Library Block',
    hours: 'Mon–Sat · 08:00 – 19:30',
    capacity: '450 Seating Capacity',
    description:
      'A serene, climate-controlled scholarly sanctuary housing 68,400 print volumes, 210 national and international periodicals, and 24×7 remote access to INFLIBNET, IEEE, and JSTOR digital repositories.',
    highlights: [
      'RFID-enabled automated issue and return kiosks',
      'Dedicated postgraduate & Ph.D. research carrels',
      'DELNET and N-LIST digital journal access',
    ],
  },
  {
    id: 'labs',
    title: 'Computing, Cognitive & Bioscience Laboratories',
    subtitle: 'Academic Block B · 1,400+ Workstations',
    image: COLLEGE_IMAGES.computingLab,
    caption: 'Fig. 4 — Cognitive Systems & Data Science Laboratory, Kuniamuthur Campus',
    hours: 'Mon–Sat · 08:45 – 17:30',
    capacity: '18 Specialized Labs',
    description:
      'High-speed gigabit laboratories dedicated to machine learning, cloud computing, Cisco networking, molecular biology, microbial fermentation, and culinary hospitality training.',
    highlights: [
      'TCS-certified Cognitive Systems & Analytics studio',
      'BSL-2 compliant Biotechnology & Microbiology wet labs',
      'Interactive smart classrooms with lecture capture',
    ],
  },
  {
    id: 'sports',
    title: 'Athletics Pavilion, Auditorium & Student Hostels',
    subtitle: 'Eco-Friendly 25-Acre Kuniamuthur Grounds',
    image: COLLEGE_IMAGES.sportsPavilion,
    caption: 'Fig. 5 — Athletics Ground & Outdoor Pavilion, Sree Krishna Campus',
    hours: 'Daily · 06:00 – 20:00',
    capacity: '2,200-Seat Convention Hall',
    description:
      'Set amidst Western Ghats foothills greenery, the campus pairs championship cricket, football, and indoor badminton courts with separate residential hostels for men and women.',
    highlights: [
      '2,200-seat air-conditioned Convocation Auditorium',
      'Separate Men’s & Women’s Hostels with Wi-Fi and hygienic dining',
      'NSS, NCC, Rotaract, Fine Arts, and Eco-Club chapters',
    ],
  },
];

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    date: '16 Nov 2026',
    category: 'Admissions',
    title: 'Online Applications Open for 2026–27 UG & PG Programmes',
    detail: 'Merit-based counselling and scholarship verification open through the Admissions Office.',
  },
  {
    id: 'ann-2',
    date: '12 Nov 2026',
    category: 'Placements',
    title: 'TCS & Deloitte Campus Recruitment Drive — Phase II Schedule',
    detail: 'Pre-placement briefing for final-year B.Sc., BCA, B.Com., and M.Sc. cohorts at Main Auditorium.',
  },
  {
    id: 'ann-3',
    date: '08 Nov 2026',
    category: 'Examinations',
    title: 'Autonomous End-Semester Practical Timetable Published',
    detail: 'Department-wise laboratory examination batches released by the Controller of Examinations.',
  },
  {
    id: 'ann-4',
    date: '02 Nov 2026',
    category: 'Academic',
    title: 'National Symposium on Sustainable Computing & Commerce (NSSCC)',
    detail: 'Call for papers open for undergraduate and doctoral researchers; proceedings indexed.',
  },
];
