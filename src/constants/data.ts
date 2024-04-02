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
    title: "Software Developer CO-OP",
    location: "Waterloo, Ontario",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    // icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - Apr 2023",
  },
  {
    title: "System Engineer",
    location: "Mumbai, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    // icon: React.createElement(CgWorkAlt),
    date: "Oct 2020 - Jun 2022",
  },
  {
    title: "Business Analysts Intern",
    location: "Ahmedabad, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    // icon: React.createElement(FaReact),
    date: "May 2019 - Jul 2019",
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