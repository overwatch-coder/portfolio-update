import {
  ExperienceType,
  NavLinkType,
  ProjectType,
  SkillType,
} from "../../types";
import { BsPerson } from "react-icons/bs";
import { MdWorkOutline, MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiBootstrap,
  SiGit,
  SiExpress,
  SiNodedotjs,
  SiNestjs,
} from "react-icons/si";

import src from "@/assets/src.png";
import metakay from "@/assets/metakay.png";
import drwoy from "@/assets/drwoy.png";
import etl from "@/assets/etl.png";
import ptm from "@/assets/ptm.png";
import qlikstudio from "@/assets/qlikstudio.png";

export const navlinks: NavLinkType[] = [
  {
    name: "About",
    link: "/about",
    linkIcon: BsPerson,
  },
  {
    name: "Experience",
    link: "/experience",
    linkIcon: MdWorkOutline,
  },
  {
    name: "Projects",
    link: "/projects",
    linkIcon: GrProjects,
  },
  {
    name: "Skills",
    link: "/skills",
    linkIcon: GiSkills,
  },
  {
    name: "Contact",
    link: "/contact",
    linkIcon: MdContactPhone,
  },
];

export const Experiences: ExperienceType[] = [
  {
    title: "React Software Developer - Intern",
    date: "06/2023 - 10/2023",
    company: "Software LAB",
    place: "India",
    description: [
      "Transformed client requirements into updated and visually impressive websites, ensuring timely delivery and client satisfaction.",
      "Implemented UI designs from Figma into responsive web interfaces using React JS, Next Js and Metronics, enhancing user experiences.",
      "Efficiently managed API endpoints with Axios and Fetch API, enabling seamless data integration and interaction with the backend.",
      "Led backend development initiatives, creating secure API endpoints, and authentication processes, and optimized data processing in Laravel and Node JS.",
    ],
  },
  {
    title: "Freelance Web Designer & UI Developer",
    date: "08/2021 - 06/2023",
    company: "Freelance",
    place: "Morocco",
    description: [
      "Created responsive mobile-first websites and UI designs for various clients ensuring optimal user experience and meeting their specific requirements.",
      "Utilized a range of technologies including Node Js, Express, React, Tailwind CSS, MongoDB, JWT, Context API, HTML, CSS, Figma, and Adobe XD to develop websites and user interfaces that were fast, scalable, and visually appealing",
      "Worked closely with clients to understand their needs, provide recommendations, and deliver high-quality work within tight deadlines.",
      "Collaborated with cross-functional teams, including UX designers, front-end developers to ensure seamless integration and delivery of final products.",
    ],
  },
];

export const Projects: ProjectType[] = [
  {
    subtitle: "A Full Stack Proposal Website",
    name: "PTM App",
    github: "https://github.com/overwatch-coder/propose2me",
    site: "https://ptm-app.vercel.app/",
    description:
      "PTM is a platform designed to help individuals express their love and propose to their partners with confidence. It provides an effortless method for users to write their heartfelt requests and generate a unique link for their proposal. Users can then share the link with their potential partner, who can view the proposal and respond with an answer.",
    skillset: ["Node JS", "Express JS", "Next.Js", "Tailwind CSS", "MongoDB"],
    photo: ptm,
  },
  {
    subtitle: "SRC Campaign Website",
    name: "VaMiDzo",
    github: "https://github.com/overwatch-coder/src-campaign-uhas",
    site: "https://src-campaign-uhas.vercel.app/",
    description:
      "This Campaign website was designed for a Student Representative Council(SRC) president aspirant to post the agenda and goals he has for the Student body of the University.",
    skillset: ["Next Js", "Tailwind CSS"],
    photo: src,
  },
  {
    subtitle: "A Transport and Logistics Website",
    name: "ETL",
    site: "https://www.etl.express/",
    skillset: ["React Js", "Tailwind CSS"],
    description:
      "ETL is a transport and Logistics Website that specializes in auto transportation solutions, various uber services as well as auto repairs and maintenance. Clients can also book various appointments easily using the simple and easy appointment booking system found on the website.",
    photo: etl,
  },
  {
    subtitle: "A Fashion Design Website",
    name: "Metakay",
    github: "https://github.com/overwatch-coder/metakay",
    site: "https://metakay.vercel.app/",
    description:
      "This is a fashion design website for a brand called Metakay. Integrated into the website include the brand's portfolio, shopping space, cart system and taking orders",
    skillset: ["React Js", "Tailwind CSS", "Contentful CMS"],
    photo: metakay,
  },
  {
    subtitle: "An Artist Music Website",
    name: "D Rwoy",
    github: "https://github.com/overwatch-coder/drwoy",
    site: "https://www.drwoy.com/",
    description:
      "A Music Portfolio for an artist which shows the recent songs. Also users can find merch, subscribe to newsletters as well as find social media details.",
    skillset: ["Tailwind CSS", "React JS", "MailChimp Newsletter"],
    photo: drwoy,
  },
  {
    subtitle: "A Photography Portfolio Website",
    name: "Qlik Studios",
    github: "https://github.com/overwatch-coder/qlikstudios",
    site: "https://qlikstudios.vercel.app/",
    description:
      "You can view the some of the client's recent works on photography a well as services available. Appointment Booking of Services can also be achieved easily.",
    skillset: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    photo: qlikstudio,
  },
];

export const Skills: SkillType[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F0DB4F",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#F1502F",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#264DE4",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#4DD6E9",
    url: "https://tailwindcss.com/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#4DB33D",
    url: "https://www.mongodb.com/",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DBFB",
    url: "https://reactjs.org/",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#007ACC",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Node Js",
    icon: SiNodedotjs,
    color: "#68A063",
    url: "https://nodejs.org/",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#563D7C",
    url: "https://getbootstrap.com/",
  },
  { name: "Git", icon: SiGit, color: "#F1502F", url: "https://git-scm.com/" },
  {
    name: "Express Js",
    icon: SiExpress,
    color: "#000000",
    url: "https://expressjs.com/",
  },
  {
    name: "Next Js",
    icon: SiNextdotjs,
    color: "#000000",
    url: "https://nextjs.org/",
  },
  {
    name: "Nest Js",
    icon: SiNestjs,
    color: "#E0234E",
    url: "https://nestjs.com/",
  },
];
