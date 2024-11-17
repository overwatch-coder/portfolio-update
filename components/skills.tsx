"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiVercel,
  SiFigma,
  SiPostman,
  SiLaravel,
  SiPhp,
  SiNestjs,
} from "react-icons/si";

const skills = {
  frontend: [
    {
      name: "React",
      icon: SiReact,
      link: "https://reactjs.org/",
      color: { light: "#61DBFB", dark: "#61DBFB" },
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      link: "https://nextjs.org/",
      color: { light: "#000000", dark: "#ffffff" },
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      link: "https://www.typescriptlang.org/",
      color: { light: "#007ACC", dark: "#007ACC" },
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      link: "https://tailwindcss.com/",
      color: { light: "#38BDF8", dark: "#38BDF8" },
    },
    {
      name: "Redux",
      icon: SiRedux,
      link: "https://redux.js.org/",
      color: { light: "#764ABC", dark: "#764ABC" },
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      color: { light: "#E44D26", dark: "#E44D26" },
    },
    {
      name: "CSS3",
      icon: SiCss3,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      color: { light: "#264DE4", dark: "#264DE4" },
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      color: { light: "#F0DB4F", dark: "#F0DB4F" },
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      link: "https://nodejs.org/",
      color: { light: "#68A063", dark: "#68A063" },
    },
    {
      name: "Express",
      icon: SiExpress,
      link: "https://expressjs.com/",
      color: { light: "#000000", dark: "#ffffff" },
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      link: "https://www.mongodb.com/",
      color: { light: "#4DB33D", dark: "#4DB33D" },
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      link: "https://laravel.com/",
      color: { light: "#FF2D20", dark: "#FF2D20" },
    },
    {
      name: "PHP",
      icon: SiPhp,
      link: "https://www.php.net/",
      color: { light: "#777BB4", dark: "#777BB4" },
    },
    {
      name: "NestJS",
      icon: SiNestjs,
      link: "https://nestjs.com/",
      color: { light: "#E0234E", dark: "#E0234E" },
    },
  ],
  tools: [
    {
      name: "Git",
      icon: SiGit,
      link: "https://git-scm.com/",
      color: { light: "#F1502F", dark: "#F1502F" },
    },
    {
      name: "GitHub",
      icon: SiGithub,
      link: "https://github.com/",
      color: { light: "#181717", dark: "#ffffff" },
    },
    {
      name: "VS Code",
      icon: SiVisualstudiocode,
      link: "https://code.visualstudio.com/",
      color: { light: "#0078D4", dark: "#0078D4" },
    },
    {
      name: "Vercel",
      icon: SiVercel,
      link: "https://vercel.com/",
      color: { light: "#000000", dark: "#ffffff" },
    },
    {
      name: "Figma",
      icon: SiFigma,
      link: "https://www.figma.com/",
      color: { light: "#F24E1E", dark: "#F24E1E" },
    },
    {
      name: "Postman",
      icon: SiPostman,
      link: "https://www.postman.com/",
      color: { light: "#F7A300", dark: "#F7A300" },
    },
  ],
};

export function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="container py-10 -mt-12">
      <div className="group">
        <h2 className="text-[10vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear px-4 md:px-10">
          Skills
        </h2>
        <div className="h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
      </div>

      <Tabs defaultValue="frontend" className="w-full px-4 md:px-10">
        <TabsList className="grid w-full grid-cols-3 mb-12">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>
        {Object.entries(skills).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {items.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className="flex items-center gap-3 justify-center p-6">
                    <skill.icon
                      size={20}
                      color={
                        theme
                          ? theme === "light"
                            ? skill.color.light
                            : skill.color.dark
                          : skill.color.dark
                      }
                    />
                    <Link
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center font-medium"
                    >
                      {skill.name}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
