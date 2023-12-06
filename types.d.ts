import { StaticImageData } from "next/image";

export type NavLinkType = {
  name: string;
  link: string;
  linkIcon?: IconType;
};

export type ExperienceType = {
  title: string;
  date: string;
  company: string;
  place: string;
  description: string[];
};

export type ProjectType = {
  name: string;
  subtitle: string;
  description: string;
  skillset: string[];
  github?: string;
  site?: string;
  photo: StaticImageData;
};

export type SkillType = {
  icon: IconType;
  name: string;
  color: string;
}
