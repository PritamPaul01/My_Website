// ---------------------------------------------------------------------------
// Central content for the portfolio. All copy migrated from the previous site.
// Edit here to update the whole website.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Pritam Kumar Pal',
  firstName: 'Pritam',
  role: 'Technical Artist & Game Designer',
  email: 'metro1pal2000@gmail.com',
  location: 'Odisha, India',
  splineUrl: 'https://prod.spline.design/EHuXbQAqtPBYDFi8/scene.splinecode',
  socials: {
    github: 'https://github.com/PritamPaul01',
    linkedin: 'https://www.linkedin.com/in/pritam-pal-oo7/',
  },
};

export const hero = {
  badge: 'Welcome to my digital space',
  titleLead: 'Designing',
  titleAccent: 'immersive',
  titleTrail: 'worlds.',
  subtitle:
    'Technical artist & game designer building Unity-powered XR games and simulations, 3D games, and the game UI/UX that ties them together — now weaving GenAI into gameplay.',
  tags: [
    'Technical Artist',
    'Game Designer',
    'Unity • XR & 3D Games',
    'UI/UX in Figma',
    'GenAI in Games',
  ],
};

export const quote = {
  text:
    "Even if it's difficult and time consuming, it doesn't matter, as long as the process is enjoyable",
  author: 'Pritam Kumar Pal',
  role: 'Developer, Designer and Dreamer',
  image: '/images/HI111.jpg',
};

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  categoryKey: 'ar' | 'vr';
  summary: string;
  description: string;
  technologies: string[];
  image: string;
  video: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Immersive AR Universe',
    subtitle: 'Interactive AR Planetary System',
    category: 'AR Development',
    categoryKey: 'ar',
    summary:
      'An educational AR experience featuring dynamic, animated 3D models of planets with interactive elements for learning about our solar system.',
    description:
      "Developed with a private company's SDK, delivering object tracking capabilities and crafting captivating AR experiences featuring dynamic, animated 3D models of planets.",
    technologies: ['Unity', 'C#', 'Vuforia', 'TechXR SDK'],
    image: '/images/HI1.png',
    video: '/videos/PV1.m4v',
  },
  {
    id: 2,
    title: 'AR Medical App',
    subtitle: 'Interactive Medical Education',
    category: 'AR Development',
    categoryKey: 'ar',
    summary:
      'An augmented reality application helping medical students learn through interactive 3D models of medical equipment and anatomical structures.',
    description:
      'Development of an interactive AR Medical App, helping students to engage with intricate 3D medical models.',
    technologies: ['Unity', 'C#', 'Vuforia', 'ARCore'],
    image: '/images/HI2.png',
    video: '/videos/PV2.mp4',
  },
  {
    id: 3,
    title: 'VR Surgery Simulator',
    subtitle: 'Medical Training in Virtual Reality',
    category: 'VR Development',
    categoryKey: 'vr',
    summary:
      'A virtual reality simulator for practicing common surgical procedures with haptic feedback and realistic tissue interaction physics.',
    description:
      "Internship project where I helped with optimizing the apk's performance, designed and implemented the UI Dashboard System and improved the UX.",
    technologies: ['Unity', 'C#', 'Blender', 'Figma', 'Meta SDK'],
    image: '/images/HI3.png',
    video: '/videos/PV3.m4v',
  },
  {
    id: 4,
    title: 'Space Showroom X',
    subtitle: 'VR Automotive Experience',
    category: 'VR Development',
    categoryKey: 'vr',
    summary:
      'A luxury car showroom set in space featuring a "Design Your Own Car" experience with customizable components and realistic lighting.',
    description:
      'Developed a VR Car Showroom in space. Optimized apk with fluid movement, smooth UI panel, fully customizable car model and interactive environment.',
    technologies: ['Unity', 'C#', 'Blender', 'Figma', 'Meta SDK'],
    image: '/images/HI4.png',
    video: '/videos/PV4.m4v',
  },
];

export interface TechCategory {
  id: number;
  title: string;
  description: string;
  icon: 'xr' | 'code' | 'cube' | 'spatial';
  skills: string[];
}

export const techCategories: TechCategory[] = [
  {
    id: 1,
    title: 'XR Games & Simulations',
    description:
      'Unity-built AR, VR, and MR — interactive games and training simulations powered by the Unity XR SDK and Meta SDK.',
    icon: 'xr',
    skills: ['Unity', 'XR (AR/VR/MR)', 'Meta SDK', 'Simulations'],
  },
  {
    id: 2,
    title: '3D Game Development',
    description:
      'Designing and building 3D games in Unity — gameplay systems, mechanics, and end-to-end performance optimization.',
    icon: 'cube',
    skills: ['Unity', 'C#', '3D Games', 'Optimization'],
  },
  {
    id: 3,
    title: 'Technical Art & UI/UX',
    description:
      'Bridging art and engineering — game UI/UX designed in Figma, plus 3D assets and scenes shaped in Blender.',
    icon: 'code',
    skills: ['Figma', 'Game UI/UX', 'Blender', '3D Assets'],
  },
  {
    id: 4,
    title: 'GenAI in Games',
    description:
      'Exploring generative and agentic AI to make game worlds think and react — smarter NPCs and dynamic systems.',
    icon: 'spatial',
    skills: ['GenAI', 'Agentic AI', 'AI NPCs'],
  },
];

export interface Inspiration {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export const inspirations: Inspiration[] = [
  {
    id: 1,
    name: 'John Carmack',
    role: 'Consulting CTO',
    company: 'Oculus VR',
    image: '/images/HI11.png',
    quote:
      'The measure of success is not whether you have a tough problem to deal with, but whether it is the same problem you had last year.',
  },
  {
    id: 2,
    name: 'Shigeru Miyamoto',
    role: 'Representative Director',
    company: 'Nintendo',
    image: '/images/HI22.png',
    quote: 'A delayed game is eventually good, but a rushed game is forever bad.',
  },
  {
    id: 3,
    name: 'Hideo Kojima',
    role: 'Game Designer & Director',
    company: 'Kojima Productions',
    image: '/images/HI33.png',
    quote:
      'Creating something that no one has created before is the only way to establish your own identity.',
  },
  {
    id: 4,
    name: 'Tim Sweeney',
    role: 'CEO & Founder',
    company: 'Epic Games',
    image: '/images/HI44.png',
    quote:
      'The metaverse is going to be far more pervasive and powerful than anything else. If one central company gains control of this, they will become more powerful than any government.',
  },
  {
    id: 5,
    name: 'Bonnie Ross',
    role: 'Head of 343 Industries',
    company: 'Microsoft',
    image: '/images/HI55.png',
    quote:
      "In this industry, things are always evolving and changing. If you're not passionate about what you do, it becomes really hard to keep up.",
  },
  {
    id: 6,
    name: 'Mark Zuckerberg',
    role: 'CEO & Founder',
    company: 'Meta',
    image: '/images/HI66.png',
    quote:
      "The next platform will be even more immersive—an embodied internet where you're in the experience, not just looking at it.",
  },
  {
    id: 7,
    name: 'Gabe Newell',
    role: 'Co-founder & President',
    company: 'Valve',
    image: '/images/HI77.png',
    quote: 'Piracy is almost always a service problem and not a pricing problem.',
  },
];

export const about = {
  heroSubtitle:
    'Technical artist & game designer crafting Unity-powered XR and 3D games, game UI/UX, and GenAI-driven experiences.',
  tags: ['Technical Artist', 'Game Designer', 'Unity & XR'],
  image: '/images/Pritam3.png',
  video: '/videos/AV1.mp4',
  bio: [
    'I\'m a technical artist and game designer with 4+ years in Unity — building XR games and simulations across AR, VR, and MR, crafting 3D games, and designing the game UI/UX that ties it all together. My journey started the moment I watched "Sword Art Online" and realised the line between fiction and real tech was thinner than I thought.',
    'I move comfortably between disciplines — gameplay and systems in Unity, technical art and optimization, and interface design in Figma — and I\'m now weaving GenAI and agentic AI into how games think and react.',
    "When I'm not building, you'll find me exploring new tech, deep diving into upcoming games and XR hardware, or sharing what I learn with the community.",
    "I genuinely love being part of a team where people share the same obsession — where we can cook up something crazy together, push what's possible in the game industry, and create experiences the player community will truly love.",
  ],
  skills: [
    { name: 'Unity', years: '4 yrs', level: 75 },
    { name: 'VR Development', years: '3+ yrs', level: 80 },
    { name: 'AR Development', years: '1.5 yrs', level: 70 },
    { name: 'UI/UX with Figma', years: '2 yrs', level: 80 },
    { name: 'Version Control · GitHub', years: '3 yrs', level: 80 },
    { name: 'Working in a Team', years: '4+ yrs', level: 85 },
    { name: 'Working Solo', years: '2 yrs', level: 70 },
  ],
  learning: ['GenAI', 'Agentic AI', 'Unreal Engine', 'Blender', 'MR Development', '2.5D Games'],
  milestones: [
    {
      title: '3+ Months Internship',
      detail:
        'Hands-on experience working with industry professionals on cutting-edge XR technologies',
    },
    {
      title: 'Freelance Experience',
      detail:
        'Delivering tailored XR solutions for clients with unique creative and technical requirements',
    },
    {
      title: '2+ Years MLSA Support',
      detail:
        'Dedicated technical leadership at Microsoft Learn Student Ambassadors, KIIT, India',
    },
  ],
  experiences: [
    {
      title: 'VR Technical Artist',
      company: 'Inion VR Technology · Internship',
      period: 'May 2024 to Aug 2024 · 4 mos',
      location: 'India · Remote',
      skills: 'UI/UX, Unity, VR, MR',
      description:
        'Worked as an VR Technical Artist, designing the whole UI system including Dashboard, Surgery Based Panels, etc. Making the UI system responsive and taking care of the UX. Also worked on the project optimization and FPS Management.',
    },
    {
      title: 'XR Lead',
      company: 'Microsoft Learn Student Ambassadors, KIIT Chapter',
      period: 'Jul 2023 to Jul 2024 · 1 yr 1 mo',
      location: 'Bhubaneswar, Odisha, India',
      skills: 'Unity, C#, AR, VR, XR',
      description: '',
    },
    {
      title: 'User Interface Designer',
      company: 'Microsoft Learn Student Ambassadors, KIIT Chapter',
      period: 'Jan 2022 to Jul 2023 · 1 yr 7 mos',
      location: 'India',
      skills: 'Adobe XD, Canva, Figma, User Interface Design',
      description: '',
    },
  ],
  education: [
    {
      degree: 'M.Sc. in Game Technologies',
      institution: 'Hochschule Bonn-Rhein-Sieg, Germany',
      period: '2025 - current',
    },
    {
      degree: 'Bachelor of Technology - BTech, Computer Science',
      institution: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
      period: '2021 - 2025',
    },
    {
      degree: 'Higher Secondary School Certificate',
      institution: 'Central Board of Secondary Education',
      period: 'Apr 2017 - Apr 2019',
    },
    {
      degree: 'All India Secondary School Examination',
      institution: 'Central Board of Secondary Education',
      period: 'Apr 2016 - Apr 2017',
    },
  ],
};

export const projectsPage = {
  hero: {
    title: 'Galactic Adventure',
    subtitle:
      'An immersive journey through the cosmos, blending technology and creativity in stunning XR experiences.',
    tags: ['XR Innovation', 'Space Exploration', 'Interactive Design'],
  },
  mockups: [
    {
      title: 'Website',
      caption: 'Website UI for College Fest.',
      image: '/images/PI1.png',
    },
    {
      title: 'Website 2',
      caption: 'Website UI for a Society Project.',
      image: '/images/PI2.png',
    },
    {
      title: 'VR Surgery Simulator',
      caption: 'VR UI for the Medical Surgery Simulator project.',
      image: '/images/PI3.png',
    },
    {
      title: 'Space Showroom X',
      caption: 'VR UI for XRCH Hackathon team project.',
      image: '/images/PI4.png',
    },
  ],
  roadmap: {
    image: '/images/PI11.jpg',
    inProgress: [
      {
        label: 'Blade of Fate',
        text:
          'A VR action-adventure game built in Unity as my M.Sc. major project at H-BRS, Germany — featuring custom haptic feedback via a physical cane controller, adaptive AI enemies, and a richly handcrafted fantasy world.',
      },
    ],
    future: [
      {
        label: 'Antigenic',
        text:
          'A soulslike 2.5D metroidvania — hollow knight-inspired in its atmosphere and movement — currently under production. Dark, punishing, and beautifully handcrafted.',
      },
      {
        label: '3D Open World MMORPG',
        text:
          'A large-scale 3D open-world project with MMORPG-style design — the kind of game I want to pour years into and build properly.',
      },
    ],
    dream: [
      {
        label: 'DejaVu',
        text:
          'An action, adventure, RPG, VR/MR game project which I plan to create after gaining deep practical knowledge in the gaming and XR sector.',
      },
      {
        label: 'Sword Art Online — Real',
        text:
          'A full-dive VR experience inspired by Sword Art Online. The dream project I would love to bring to life the moment NerveGear or Neuralink makes it possible.',
      },
    ],
  },
  process: {
    steps: [
      {
        number: 1,
        title: 'Research & Planning',
        text:
          'Defining project scope, researching technologies, and creating a development roadmap.',
      },
      {
        number: 2,
        title: 'Design & Prototyping',
        text:
          'Creating UI/UX wireframes, 3D assets, and building interactive prototypes.',
      },
      {
        number: 3,
        title: 'Development',
        text:
          'Implementing core features, scripting interactions, and creating immersive environments.',
      },
      {
        number: 4,
        title: 'Testing & Refinement',
        text:
          'Iterative testing for performance optimization, user feedback integration, and polishing.',
      },
    ],
    toolkit: ['Unity 3D', 'Blender', 'C#', 'Figma / UI Design'],
  },
};

export const contactPage = {
  hero: {
    title: 'Connect with Me',
    subtitle:
      "I'm always looking for new opportunities to create innovative digital experiences. Let's get in touch.",
    tags: ['Collaboration', 'Innovation', 'XR Projects'],
  },
  image: '/images/Pritam1.jpeg',
  inspiration: {
    title: 'Inspiration drives Innovation',
    subtitle: 'Embrace the future of gaming with XR technology',
    image: '/images/Pritam2.png',
    paragraphs: [
      "As XR technologies continue to advance, they're transforming how we experience digital environments. My work focuses on creating immersive experiences that push these boundaries further.",
      "Let's collaborate to create the next generation of digital experiences that blend reality with imagination.",
    ],
  },
};

export const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'projects', label: 'Work', path: '/projects' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];
