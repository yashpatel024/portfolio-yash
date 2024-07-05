export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About me",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Project",
    hash: "#project",
  },
] as const;

export const experiencesData = [
  {
    id: "agfa-experience",
    title: "Software Developer",
    company: "Agfa Healthcare",
    companyUrl: "https://www.agfa.com/",
    location: "Waterloo, Canada",
    description:
      "Improved software reliability by 30% through resolving automated test issues and achieved 100% compliance with healthcare standards. Utilized Mockito, JUnit, and Bitbucket for efficient testing and version control. Actively participated in Agile ceremonies and leveraged DevOps tools to streamline development and deployment, ensuring adherence to industry regulations like DICOM, HL7, and FHIR.",
    icon: "/assets/images/agfa-logo.png",
    date: "Jan, 2023 - May, 2023",
    skills: ["Java", "Junit", "Automated tests", "Git",  "Mockito", "Jenkins"]
  },
  {
    id: "tcs-experience",
    title: "System Engineer / Developer",
    company: "Tata Consultancy Services Ltd",
    companyUrl: "https://www.tcs.com/",
    location: "Mumbai, India",
    description:
      "Led backend development with Java EE, focusing on scalable architectures and secure MySQL databases. Directed Jakarta XML Web Services implementation, integrated Hazelcast Caching for 25% faster load times, and utilized Apache POI for big data management. Developed RESTful APIs, enhanced version control with SVN, and authored comprehensive documentation, ensuring data integrity and seamless user experiences.",
    icon: "/assets/images/tcs-logo.png",
    date: "Jun, 2020 - Jun, 2022",
    skills: ["Java", "React", "MySQL", "REST APIs", "Git", "Back-end"]
  },
  {
    id: "evosys-experience",
    title: "BI Developer",
    company: "Evosys",
    companyUrl: "https://www.evosysglobal.com/",
    location: "Ahmedabad, India",
    description:
      "As a Business Intelligence Developer Intern at Evolutionary Systems in 2019, collaboratively developed a Digital Assistant deployed on Google Assistant, leveraging Oracle's infrastructure. Utilizing DialogFlow's popularity, integrated Google services like translation and digital assistants into a chatbot solution, identifying new service offerings the company could provide to potential customers.",
    icon: "/assets/images/evosys-logo.png",
    date: "May, 2019 - Jul, 2019",
    skills: ["JavaScript", "Python", "SaaS", "Node.js", "Chatbot", "Oracle"]
  },
] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     // imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     // imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     // imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;