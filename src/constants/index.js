const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Learning" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 3, suffix: "", label: "Internships & Fellowships" },
  { value: 10, suffix: "+", label: "Technologies Learned" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality, scalable web applications with attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping collaborators informed at every step with transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Completing projects on schedule without compromising on quality or functionality.",
  },
];

const techStackImgs = [
  { name: "React.js",          imgPath: "/images/logos/react.png" },
  { name: "Node.js",           imgPath: "/images/logos/node.png" },
  { name: "MongoDB",           imgPath: "/images/logos/mongodb.svg" },
  { name: "Express.js",        imgPath: "/images/logos/express.svg" },
  { name: "JavaScript ES6+",   imgPath: "/images/logos/javascript.svg" },
  { name: "Tailwind CSS",      imgPath: "/images/logos/tailwindcss.svg" },
  { name: "Python",            imgPath: "/images/logos/python.svg" },
  { name: "Git & GitHub",      imgPath: "/images/logos/git.svg" },
  { name: "Power BI",          imgPath: "/images/logos/company-logo-9.png" },
  { name: "MySQL",             imgPath: "/images/logos/mysql.svg" },
];

// Experience — most recent FIRST: Amal (Present) → NBP → Bano Qabil
const expCards = [
  {
    review:
      "Enrolled in Amal Academy's fellowship — backed by Stanford University and PepsiCo — building professional, leadership, and career-readiness skills alongside a 10,600+ alumni network.",
    imgPath: "/images/logo-amal.png",
    logoPath: "/images/logo-amal.png",
    title: "Amal Academy Fellow",
    date: "Present",
    responsibilities: [
      "Participating in professional development and career readiness training.",
      "Strengthening leadership, communication, teamwork, and productivity skills.",
      "Engaging in workshops focused on professional growth and workplace effectiveness.",
    ],
  },
  {
    review:
      "Gained hands-on exposure to enterprise-level banking systems, database operations, and IT infrastructure at one of Pakistan's largest state-owned banks.",
    imgPath: "/images/logo-nbp.png",
    logoPath: "/images/logo-nbp.png",
    title: "IT Intern – Core Banking Application (CBA) Team",
    date: "National Bank of Pakistan – Head Office IT Department | 6 Weeks",
    responsibilities: [
      "Worked directly with the Core Banking Application (CBA) team on live enterprise systems.",
      "Observed and documented banking software workflows and IT infrastructure operations.",
      "Gained exposure to database operations and enterprise-level data management.",
      "Learned software maintenance and business process integration in the banking sector.",
      "Collaborated with IT professionals in a structured corporate environment.",
    ],
  },
  {
    review:
      "Contributed to web application development at Bano Qabil Incubation Center, working with modern web technologies and collaborative software development workflows.",
    imgPath: "/images/logo-banoqabil.png",
    logoPath: "/images/logo-banoqabil.png",
    title: "Software Development Intern",
    date: "Bano Qabil Incubation Center",
    responsibilities: [
      "Contributed to the development and enhancement of web-based applications.",
      "Collaborated with team members on project planning, implementation, and testing.",
      "Worked with modern web technologies to build responsive and user-friendly interfaces.",
      "Participated in code reviews, debugging, and feature development.",
      "Gained practical experience in software development workflows and version control systems.",
    ],
  },
];

const expLogos = [
  { name: "Amal Academy", imgPath: "/images/logo-amal.png" },
  { name: "NBP",          imgPath: "/images/logo-nbp.png" },
  { name: "Bano Qabil",   imgPath: "/images/logo-banoqabil.png" },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review: "Exceptional problem-solving ability and clean code. Delivered our project with precision and great communication throughout.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review: "Turned a complex set of requirements into a polished, functional product. Highly professional and reliable.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review: "A dedicated developer with a strong eye for detail. Brings both technical skill and creative thinking to every project.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review: "Fast, thorough, and easy to work with. The final product exceeded our expectations in both design and functionality.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review: "Great full-stack skills — handled both frontend and backend seamlessly. Would absolutely work with again.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review: "Very strong grasp of MERN stack development. Delivered a scalable, well-structured application on time.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/githubf.png",
    url: "https://github.com/Chandnibai04",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://linkedin.com/in/chandni-maheshwari-100704216",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackImgs,
  navLinks,
};
