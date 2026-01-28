import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = {
  frontend: [
    {
      subtitle: "Professional Photography Portfolio",
      title: "Nobies Lens",
      github: "https://github.com/overwatch-coder/nobies_lens",
      demo: "https://nobies-lens.vercel.app",
      description:
        "A professional photography website showcasing artistic portfolios and services, designed to transform fleeting moments into timeless memories through elegant visual storytelling.",
      skillset: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      image: "/nobies-lens.png",
    },
    {
      subtitle: "A Photography Portfolio Website",
      title: "Qlik Studios",
      github: "https://github.com/overwatch-coder/qlikstudios-rebuild",
      demo: "https://qlikstudios.vercel.app/",
      description:
        "A modern photography portfolio showcasing recent works and available services, featuring a seamless booking system for client appointments and inquiries.",
      skillset: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Zod",
        "React Hook Form",
        "Email JS",
      ],
      image: "/qlikstudio.png",
    },
    {
      subtitle: "An Artist Music Website",
      title: "D Rwoy",
      github: "https://github.com/overwatch-coder/drwoy",
      demo: "https://officialdrwoy.vercel.app/",
      description:
        "A music portfolio platform for an artist to showcase recent releases, promote merchandise, grow newsletter subscriptions, and connect audiences to social media channels.",
      skillset: ["Tailwind CSS", "React JS", "MailChimp Newsletter"],
      image: "/drwoy.png",
    },
    {
      subtitle: "A Transport and Logistics Website",
      title: "ETL",
      demo: "https://etl-express.vercel.app/",
      skillset: ["React Js", "Tailwind CSS"],
      description:
        "A transport and logistics website offering auto transportation services, ride solutions, vehicle repairs, and an intuitive appointment booking experience.",
      image: "/etl.png",
    },
    {
      subtitle: "SRC Campaign Website",
      title: "VaMiDzo",
      github: "https://github.com/overwatch-coder/src-campaign-uhas",
      demo: "https://src-campaign-uhas.vercel.app/",
      description:
        "A campaign website designed for a Student Representative Council (SRC) presidential candidate to communicate goals, initiatives, and engage the student body.",
      skillset: ["Next Js", "Tailwind CSS"],
      image: "/src.png",
    },
  ],
  fullstack: [
    {
      subtitle: "Stream the latest movies and TV shows",
      title: "StreameFlix",
      github: "https://github.com/overwatch-coder/streameflix",
      demo: "https://streameflix.vercel.app/",
      description:
        "A modern video streaming platform for discovering trending movies and TV shows, featuring genre filtering, advanced search, and responsive HD-ready layouts.",
      skillset: ["Next.Js", "Tailwind CSS", "TypeScript", "TMDB Api"],
      image: "/streameflix.png",
    },
    {
      subtitle: "Premium Sneakers & Apparel Store",
      title: "Money’s Outlet",
      github: "https://github.com/overwatch-coder/moneys-outlet",
      demo: "https://moneysoutlet.vercel.app/",
      description:
        "A modern e-commerce platform for premium sneakers and apparel featuring product catalogs, authentication, inventory management, and conversion-focused shopping flows.",
      skillset: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/moneys-outlet.png",
    },
    {
      subtitle: "Luxury Jewelry E-commerce Platform",
      title: "Elita Jewelry",
      github: "https://github.com/overwatch-coder/elita-jewelry",
      demo: "https://elita-jewelry.vercel.app/",
      description:
        "A full-stack jewelry e-commerce platform showcasing handcrafted collections, product browsing, and order workflows designed for elegance and seamless user experience.",
      skillset: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Laravel",
        "MySQL",
      ],
      image: "/elita.png",
    },
    {
      subtitle: "A Full Stack Proposal Website",
      title: "PTM App",
      github: "https://github.com/overwatch-coder/propose2me",
      demo: "https://ptm-app.vercel.app/",
      description:
        "A full-stack platform enabling users to create and share personalized proposal links, complete with secure authentication, real-time responses, and email notifications.",
      skillset: [
        "Node JS",
        "Express JS",
        "Next.Js",
        "Tailwind CSS",
        "MongoDB",
        "TypeScript",
      ],
      image: "/ptm.png",
    },
    {
      subtitle: "A Fashion Design Website",
      title: "Metakay",
      github: "https://github.com/overwatch-coder/metakay",
      demo: "https://metakay.vercel.app/",
      description:
        "A fashion brand website featuring portfolio showcases, product catalogs, cart systems, and streamlined ordering workflows with CMS integration.",
      skillset: ["React Js", "Tailwind CSS", "Contentful CMS"],
      image: "/metakay.png",
    },
  ],
  ai: [
    {
      subtitle: "AI Cover Letter Generator",
      title: "LetterCraft",
      github: "https://github.com/overwatch-coder/lettercraft",
      demo: "https://lettercraft.vercel.app/",
      description:
        "An AI-powered cover letter generator that creates tailored, professional applications using job descriptions and user profiles, dramatically reducing application prep time.",
      skillset: ["React", "TypeScript", "Vite", "Tailwind CSS", "OpenAI API"],
      image: "/lettercraft.png",
    },
    {
      subtitle: "AI-Powered Educational Study Guide",
      title: "StudyBot",
      github: "https://github.com/overwatch-coder/studybot",
      demo: "https://studybot-ai.vercel.app/",
      description:
        "An AI-driven educational assistant that generates study materials, answers questions, and provides interactive learning tools for students.",
      skillset: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "OpenAI API",
        "Supabase",
      ],
      image: "/studybot.png",
    },
  ],
};

export function Projects() {
  return (
    <section id="projects" className="container -mt-32 py-10 sm:py-16">
      <div className="group">
        <h2 className="text-[10vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear px-4 md:px-10">
          Projects
        </h2>
        <div className="h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
      </div>

      <Tabs defaultValue="fullstack" className="w-full px-4 md:px-10">
        <TabsList className="grid w-full grid-cols-3 mb-12">
          <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="ai">AI Web Apps</TabsTrigger>
        </TabsList>

        {Object.entries(projects).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {items.map((project) => (
                <Card key={project.title} className="flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <CardTitle className="mb-2 flex flex-col gap-2">
                      <span>{project.title}</span>
                      <span className="font-normal text-sm">
                        {project.subtitle}
                      </span>
                    </CardTitle>
                    <CardDescription className="mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skillset.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted rounded-md text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto pt-4">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.github} target="_blank">
                            <FaGithub className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild>
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
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
