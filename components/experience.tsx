"use client";

import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { useScroll } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const experiences = [
    {
      title: "Full Stack Developer (Frontend Focus)",
      company: "White Hat Digital (WHD) Agency, Casablanca, Morocco",
      date: "05/2024 - Present",
      description: [
        "Created responsive mobile-first and interactive dashboard menu component enhancing user experience and smooth navigation.",
        "Managed the creation and maintenance of landing and documentation pages, ensuring consistency and user-friendly experience.",
        "Efficiently managed API endpoints with Axios and Fetch API, enabling seamless data integration and interaction with the backend.",
        "Created a real-time restaurant digital menu theme customization system, allowing managers to easily customize the menu and enhance user experience.",
      ],
    },
    {
      title: "React Software Developer - Intern",
      company: "Software LAB, India",
      date: "06/2023 - 10/2023",
      description: [
        "Transformed client requirements into updated and visually impressive websites, ensuring timely delivery and client satisfaction.",
        "Implemented UI designs from Figma into responsive web interfaces using React JS, Next JS, and Metronics, enhancing user experiences.",
        "Efficiently managed API endpoints with Axios and Fetch API, enabling seamless data integration and interaction with the backend.",
        "Led backend development initiatives, creating secure API endpoints, and authentication processes, and optimized data processing in Laravel and Node JS.",
      ],
    },
    {
      title: "Freelance Web Designer & UI Developer",
      company: "Freelance, Morocco",
      date: "08/2021 - 06/2023",
      description: [
        "Created responsive mobile-first websites and UI designs for various clients ensuring optimal user experience and meeting their specific requirements.",
        "Utilized a range of technologies including Node JS, Express, React, Tailwind CSS, MongoDB, JWT, Context API, HTML, CSS, Figma, and Adobe XD to develop websites and user interfaces that were fast, scalable, and visually appealing.",
        "Worked closely with clients to understand their needs, provide recommendations, and deliver high-quality work within tight deadlines.",
        "Collaborated with cross-functional teams, including UX designers, front-end developers to ensure seamless integration and delivery of final products.",
      ],
    },
  ];

  return (
    <ReactLenis root>
      <section ref={container} id="experience" className="relative">
        <div className="group relative pb-16 md:pb-0">
          <h2 className="text-[10vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear px-4 md:px-10">
            Experience
          </h2>
          <div className="h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
        </div>

        <section className="text-black dark:text-white w-full -mt-28">
          {experiences.map((experience, i) => {
            const targetScale = 1 - (experiences.length - i) * 0.05;
            return (
              <ExperienceCard
                key={`exp_${i}`}
                i={i}
                title={experience.title}
                company={experience.company}
                date={experience.date}
                description={experience.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </section>
    </ReactLenis>
  );
}
