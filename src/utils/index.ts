import { ExperienceType, NavLinkType } from "../../types";
import { BsPerson } from "react-icons/bs";
import { MdWorkOutline, MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";

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
