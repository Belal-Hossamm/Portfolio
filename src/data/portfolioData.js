export const personalInfo = {
  name: "Belal Hossam",
  role: "Full Stack Trainee & CIS Student (Software Engineering)",
  titles: [
    "Full Stack Trainee",
    "Software Engineering Student (Year 3)",
    "Front-End Developer",
    "Marketing Vice Manager"
  ],
  status: "Available for Internships & Projects",
  email: "belalhossamm@gmail.com",
  phone: "+201061000747",
  location: "Cairo, Egypt",
  github: "https://github.com/Belal-Hossamm",
  linkedin: "https://www.linkedin.com/in/belal-hossam-239590409",
  summary:
    "Third-year Computer and Information Systems student at Sadat Academy for Management Sciences specializing in Software Engineering. Active Full Stack Trainee skilled in modern JavaScript, React, HTML/CSS, and Python, combining full-stack web engineering with proven leadership as Marketing Vice Manager and student activity member.",
  education: {
    institution: "Sadat Academy for Management Sciences",
    degree: "Bachelor of Science in Computer and Information Systems",
    specialization: "Specialization in Software Engineering",
    location: "Cairo, Egypt",
    graduation: "Expected: 2028",
    status: "Currently in Year 3",
    details: "Specializing in Software Engineering, Data Structures & Algorithms, Object-Oriented Software Design, Database Management Systems, and Modern Full-Stack Web Development."
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Intermediate / Professional Working" }
  ]
};

export const skillsData = [
  // Programming & Web
  { name: "HTML5", category: "Frontend", level: 95, tag: "Proficient", icon: "Code2" },
  { name: "CSS3 / Flexbox / Grid", category: "Frontend", level: 90, tag: "Proficient", icon: "Palette" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 85, tag: "Proficient", icon: "FileCode" },
  { name: "ReactJS", category: "Frontend", level: 85, tag: "Certified / Active", icon: "Boxes" },
  { name: "Responsive Web Design", category: "Frontend", level: 95, tag: "Proficient", icon: "Smartphone" },
  { name: "Tailwind CSS", category: "Frontend", level: 85, tag: "Proficient", icon: "Flame" },

  // Languages & Core
  { name: "Python", category: "Programming Languages", level: 85, tag: "Cisco Certified", icon: "Terminal" },
  { name: "C++", category: "Programming Languages", level: 75, tag: "Core Foundations", icon: "Cpu" },
  { name: "Object-Oriented Programming", category: "Concepts & Tools", level: 88, tag: "Software Eng", icon: "Layers" },
  { name: "Problem Solving", category: "Concepts & Tools", level: 85, tag: "Advanced", icon: "Lightbulb" },

  // Tools & Frameworks
  { name: "Git & GitHub", category: "Concepts & Tools", level: 90, tag: "Daily Driver", icon: "GitBranch" },
  { name: "VS Code", category: "Concepts & Tools", level: 95, tag: "Proficient", icon: "Code" },
  { name: "Ubuntu / Linux", category: "Concepts & Tools", level: 75, tag: "Intermediate", icon: "TerminalSquare" },
  { name: "AnyLogic Simulation", category: "Concepts & Tools", level: 80, tag: "Applied Modeling", icon: "Activity" },
  { name: "Cybersecurity Fundamentals", category: "Concepts & Tools", level: 80, tag: "Cisco Certified", icon: "ShieldCheck" },

  // Soft Skills & Leadership
  { name: "Marketing & Strategy", category: "Leadership & Soft Skills", level: 92, tag: "Vice Manager", icon: "Megaphone" },
  { name: "Team Leadership", category: "Leadership & Soft Skills", level: 92, tag: "Experienced", icon: "Users" },
  { name: "Cross-Functional Collaboration", category: "Leadership & Soft Skills", level: 95, tag: "Practiced", icon: "Workflow" },
  { name: "Time & Campaign Management", category: "Leadership & Soft Skills", level: 88, tag: "Reliable", icon: "Clock" }
];

export const experienceData = [
  {
    id: "fullstack-trainee",
    role: "Full Stack Trainee",
    organization: "Professional Software Track",
    organizationType: "Technical Training & Engineering",
    period: "2026 – Present",
    current: true,
    badge: "Full Stack & Engineering",
    description:
      "Engaged in hands-on full-stack development, mastering modern front-end architectures, component lifecycles, and backend integrations.",
    achievements: [
      "Building and testing full-stack web applications utilizing modern JavaScript, React components, and responsive design principles.",
      "Deepening software engineering methodologies including architectural patterns, API data consumption, and state management.",
      "Collaborating on code reviews, performance optimizations, and agile project iterations."
    ],
    tech: ["ReactJS", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "REST APIs", "Git/GitHub"]
  },
  {
    id: "marketing-vice-manager",
    role: "Marketing Vice Manager",
    organization: "Student Activity & Organizational Leadership",
    organizationType: "Management & Growth",
    period: "2025 – Present",
    current: true,
    badge: "Leadership & Management",
    description:
      "Leading comprehensive marketing strategies, managing creative team workflows, and driving audience engagement across digital platforms.",
    achievements: [
      "Co-directing marketing campaigns aligned with institutional events, expanding student engagement and digital presence.",
      "Supervising content calendars, guiding cross-functional media members, and ensuring consistent brand voice.",
      "Partnering closely with public relations and technical teams to execute synchronized promotional initiatives."
    ],
    tech: ["Marketing Management", "Strategic Planning", "Team Leadership", "Brand Outreach", "Campaign Analytics"]
  },
  {
    id: "hult-prize",
    role: "Front-End Member",
    organization: "Hult Prize SAMS",
    organizationType: "Global Student Activity",
    period: "2025 – Present",
    current: false,
    badge: "Technical & Front-End",
    description:
      "Collaborated with the development team to architect and build responsive web interfaces for social enterprise initiatives.",
    achievements: [
      "Collaborated with the front-end team to develop and enhance website interfaces, contributing to improved usability and visual consistency.",
      "Built responsive, user-friendly web pages using semantic HTML and modern CSS, following layout and accessibility best practices.",
      "Participated actively in technical discussions and sprint planning sessions, sharpening problem-solving and cross-functional collaboration skills."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-functional Collaboration"]
  },
  {
    id: "aibe-social-media",
    role: "Vice Head of Social Media",
    organization: "AIBE SAMS",
    organizationType: "Student Activity & Academic Club",
    period: "2025 – 2026",
    current: false,
    badge: "Leadership & Strategy",
    description:
      "Spearheaded multi-channel digital strategies, team mentorship, and content delivery across university student networks.",
    achievements: [
      "Led and coordinated the social media team in planning and publishing content across multiple platforms, ensuring a consistent brand voice and calendar.",
      "Developed and executed content strategies aligned with organizational events and workshops, driving measurable audience engagement and reach.",
      "Mentored junior team members, delegated tasks effectively, and partnered with PR and creative design teams to deliver campaigns on schedule."
    ],
    tech: ["Digital Strategy", "Team Leadership", "Brand Voice", "Audience Engagement", "Campaign Planning"]
  },
  {
    id: "aibe-pr",
    role: "Public Relations Member",
    organization: "AIBE SAMS",
    organizationType: "Student Activity & Academic Club",
    period: "2025",
    current: false,
    badge: "Public Relations & Award",
    description:
      "Represented the organization in community outreach, public communications, and on-ground event management.",
    achievements: [
      "Assisted in organizing large-scale student events and managing external public communications, strengthening institutional presence.",
      "Cultivated partnerships and facilitated communications between attendee students, speakers, and sponsors.",
      "Honored with an official Certificate of Appreciation for outstanding dedication and contributions to the PR team."
    ],
    tech: ["Public Speaking", "Event Management", "Outreach", "Stakeholder Relations"]
  }
];

export const projectsData = [
  {
    id: "ratatouille",
    title: "Ratatouille Home Page",
    category: "Web Development",
    tags: ["HTML5", "CSS3", "Responsive UI", "Flexbox/Grid"],
    summary:
      "A fully responsive, visually captivating culinary landing page built with semantic HTML and modern CSS. Prioritizes seamless mobile-first layouts, crisp typography, and cross-browser consistency.",
    details: [
      "Crafted with semantic HTML5 elements to ensure search engine accessibility and structured document flow.",
      "Implemented modular CSS with responsive media queries, fluid typography, and dynamic flexbox/grid alignments.",
      "Optimized assets and cross-device rendering to guarantee smooth performance across smartphones, tablets, and desktops."
    ],
    github: "https://github.com/Belal-Hossamm",
    liveDemo: null,
    imageBg: "linear-gradient(135deg, #0d9488 0%, #115e59 100%)",
    icon: "Utensils",
    featured: true
  },
  {
    id: "bass-diffusion",
    title: "Bass Diffusion Model — System Dynamics",
    category: "Simulation & Algorithms",
    tags: ["AnyLogic", "System Dynamics", "Python", "Mathematical Modeling"],
    summary:
      "An advanced computational model built in AnyLogic simulating the classic Bass Diffusion phenomenon. Incorporates differential stocks, flows, and positive/negative feedback loops to project new product adoption.",
    details: [
      "Modeled mathematical equations representing innovators and imitators in product adoption lifecycles.",
      "Configured dynamic stock and flow diagrams with parameter sensitivity analysis in AnyLogic.",
      "Visualized real-time feedback loops to analyze market saturation and peak sales milestones."
    ],
    github: "https://github.com/Belal-Hossamm",
    liveDemo: null,
    imageBg: "linear-gradient(135deg, #0369a1 0%, #075985 100%)",
    icon: "LineChart",
    featured: true
  },
  {
    id: "portfolio-web",
    title: "Modern Developer Portfolio & Interactive Showcase",
    category: "Web Development",
    tags: ["React 19", "Tailwind CSS", "Vite", "Lucide Icons", "UI/UX"],
    summary:
      "A polished, interactive developer portfolio featuring dark/light theming, live search and skill filtering, an interactive experience timeline, certification drawer, and contact validation.",
    details: [
      "Modular React component architecture with customizable theme state and persistent localStorage.",
      "Interactive filtering for skills and projects with instant responsive feedback.",
      "Modern aesthetic using subtle glassmorphism, glowing accents, and fluid layouts."
    ],
    github: "https://github.com/Belal-Hossamm",
    liveDemo: "https://github.com/Belal-Hossamm",
    imageBg: "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    icon: "Laptop",
    featured: true
  }
];

export const certificationsData = [
  {
    id: "react-components",
    title: "Getting Started with ReactJS Components",
    issuer: "Simplilearn SkillUp",
    date: "Certified",
    badgeColor: "from-teal-500 to-emerald-600",
    description:
      "Core mastery of React component hierarchy, JSX syntax, state and props management, lifecycle fundamentals, and modern functional component paradigms.",
    skillsGained: ["React Components", "JSX", "State & Props", "Virtual DOM", "SPA Architecture"],
    verified: true,
    category: "Web Engineering"
  },
  {
    id: "python-essentials",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "Certified",
    badgeColor: "from-blue-500 to-indigo-600",
    description:
      "Comprehensive training covering Python programming syntax, algorithms, data structures, conditional control flows, list processing, and modular functions.",
    skillsGained: ["Python 3", "Data Structures", "Algorithmic Logic", "Functions & Modules"],
    verified: true,
    category: "Programming"
  },
  {
    id: "cybersecurity-intro",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Certified",
    badgeColor: "from-purple-500 to-pink-600",
    description:
      "Fundamental principles of digital security, confidentiality, integrity, availability (CIA triad), common threat vectors, data privacy, and mitigation strategies.",
    skillsGained: ["Cyber Threats", "Network Security", "Data Privacy", "Defense-in-Depth"],
    verified: true,
    category: "Security"
  },
  {
    id: "aibe-pr-award",
    title: "Certificate of Appreciation — Public Relations",
    issuer: "AIBE SAMS",
    date: "Honored 2025",
    badgeColor: "from-amber-500 to-orange-600",
    description:
      "Recognized for outstanding leadership, active contributions to student outreach campaigns, event representation, and cross-functional team success.",
    skillsGained: ["Public Relations", "Leadership", "Event Hosting", "Community Outreach"],
    verified: true,
    category: "Honors & Leadership"
  }
];
