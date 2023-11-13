import { NavLinkType } from "../../types";
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
