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
      subtitle: "A Photography Portfolio Website",
      title: "Qlik Studios",
      github: "https://github.com/overwatch-coder/qlikstudios-rebuild",
      demo: "https://qlikstudios.vercel.app/",
      description:
        "You can view the some of the client's recent works on photography a well as services available. Appointment Booking of Services can also be achieved easily.",
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
        "A Music Portfolio for an artist which shows the recent songs. Also users can find merch, subscribe to newsletters as well as find social media details.",
      skillset: ["Tailwind CSS", "React JS", "MailChimp Newsletter"],
      image: "/drwoy.png",
    },
    {
      subtitle: "A Transport and Logistics Website",
      title: "ETL",
      demo: "https://etl-express.vercel.app/",
      skillset: ["React Js", "Tailwind CSS"],
      description:
        "ETL is a transport and Logistics Website that specializes in auto transportation solutions, various uber services as well as auto repairs and maintenance. Clients can also book various appointments easily using the simple and easy appointment booking system found on the website.",
      image: "/etl.png",
    },
    {
      subtitle: "SRC Campaign Website",
      title: "VaMiDzo",
      github: "https://github.com/overwatch-coder/src-campaign-uhas",
      demo: "https://src-campaign-uhas.vercel.app/",
      description:
        "This Campaign website was designed for a Student Representative Council(SRC) president aspirant to post the agenda and goals he has for the Student body of the University.",
      skillset: ["Next Js", "Tailwind CSS"],
      image: "/src.png",
    },
  ],
  fullstack: [
    {
      subtitle: "A Full Stack Proposal Website",
      title: "PTM App",
      github: "https://github.com/overwatch-coder/propose2me",
      demo: "https://ptm-app.vercel.app/",
      description:
        "PTM is a platform designed to help individuals express their love and propose to their partners with confidence. It provides an effortless method for users to write their heartfelt requests and generate a unique link for their proposal. Users can then share the link with their potential partner, who can view the proposal and respond with an answer.",
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
      subtitle: "AirBnB Rental Full Stack Web App",
      title: "SpaceShare Vacation Rentals",
      github: "https://github.com/overwatch-coder/SpaceShare",
      demo: "https://spaceshare.onrender.com/",
      description:
        "Creating an Airbnb website, named SpaceShare. The website aims to connect people who want to rent their properties with people who are looking for accommodations.",
      skillset: [
        "Node JS",
        "Express JS",
        "Next.Js",
        "Tailwind CSS",
        "MongoDB",
        "TypeScript",
      ],
      image: "/sheshare.png",
    },
    {
      subtitle: "A Fashion Design Website",
      title: "Metakay",
      github: "https://github.com/overwatch-coder/metakay",
      demo: "https://metakay.vercel.app/",
      description:
        "This is a fashion design website for a brand called Metakay. Integrated into the website include the brand's portfolio, shopping space, cart system and taking orders",
      skillset: ["React Js", "Tailwind CSS", "Contentful CMS"],
      image: "/metakay.png",
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

      <Tabs defaultValue="frontend" className="w-full px-4 md:px-10">
        <TabsList className="grid w-full grid-cols-2 mb-12">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
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
                      <Button size="sm" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
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
