const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Blueprint",
    link: "#blueprint",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const blueprint = [
  {
    name: "01. Discovery & Strategy",
    mentions: "UI/UX Research",
    review:
      "Every great project starts with understanding. I dive deep into your business goals, target audience, and requirements. We map out user journeys to build a solid foundation before any design takes place.",
    // Saya menggunakan gambar dari array 'words' Anda agar tidak blank
    imgPath: "/images/ideas.svg", 
  },
  {
    name: "02. Brand Identity",
    mentions: "Graphic Design",
    review:
      "Crafting a unique visual identity, from logos to typography and color palettes. I ensure your brand communicates the right message, evokes the right emotion, and stands out strongly in the market.",
    imgPath: "/images/seo.png",
  },
  {
    name: "03. UI/UX Prototyping",
    mentions: "Wireframing / Figma",
    review:
      "Translating strategies into high-fidelity wireframes and interactive prototypes in Figma. Every pixel is placed with modern aesthetics, accessibility, and seamless user experience in mind.",
    imgPath: "/images/designs.svg",
  },
  {
    name: "04. Frontend Engineering",
    mentions: "React / Tailwind",
    review:
      "Bringing the static designs to life with clean, responsive, and highly performant code. I focus on building interactive user interfaces with stunning animations that run flawlessly on all devices.",
    imgPath: "/images/code.svg",
  },
  {
    name: "05. Backend Integration",
    mentions: "Node.js / Fullstack",
    review:
      "Building robust architectures, RESTful APIs, and database structures. I connect the frontend to powerful backend services to ensure a seamless, secure, and scalable fullstack operation.",
    imgPath: "/images/code.svg",
  },
  {
    name: "06. Launch & Optimize",
    mentions: "Testing / Deployment",
    review:
      "Rigorous testing for bugs, performance bottlenecks, and SEO optimization. Once everything is pixel-perfect and running smoothly, we deploy the application to production for the world to see.",
    imgPath: "/images/time.png",
  },
];

// const blueprint = [
//   {
//     step: "01",
//     title: "Discovery & Strategy",
//     desc: "We start by deeply understanding your vision, target audience, and business goals to build a solid project foundation. Every great project begins with a clear roadmap.",
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
//     ),
//     gridClass: "md:col-span-2 md:row-span-1", 
//   },
//   {
//     step: "02",
//     title: "Visual Design",
//     desc: "Crafting wireframes and high-fidelity prototypes in Figma, focusing on modern aesthetics, typography, and seamless user experience. I ensure every pixel serves a purpose before we write a single line of code.",
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
//     ),
//     gridClass: "md:col-span-1 md:row-span-2",
//   },
//   {
//     step: "03",
//     title: "Development",
//     desc: "Translating pixel-perfect designs into clean, responsive, and highly performant code.",
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
//     ),
//     gridClass: "md:col-span-1 md:row-span-1",
//   },
//   {
//     step: "04",
//     title: "Launch",
//     desc: "Rigorous testing, final optimization, and deployment for a smooth, impactful launch.",
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 2.5a2.121 2.121 0 0 0-3 0L3 10l9.5 9.5 7.5-7.5-6.5-9.5z"></path><path d="M10.5 5.5l3 3"></path><path d="M12 15h.01"></path></svg>
//     ),
//     gridClass: "md:col-span-1 md:row-span-1",
//   }
// ];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  blueprint,      // PASTIKAN blueprint ADA DI SINI
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
