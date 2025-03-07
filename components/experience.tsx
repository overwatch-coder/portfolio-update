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
      title: "Full Stack Developer",
      company: "White Hat Digital (WHD) Agency, Casablanca, Morocco",
      date: "05/2024 - Present",
      description: [
        "Developed complex web interfaces, including admin dashboards, to enhance user engagement",
        " Developed and Secured backend data and API endpoints, improving platform security",
        "Integrated customizable themes for restaurant dashboards, offering flexibility in business management",
        "Assisted in server deployment hosting web applications.",
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
        "Engineered highly responsive and scalable web applications using TypeScript, React.js, and Next.js, resulting in a 30% increase in user engagement.",
        "• Drove website traffic by implementing user-friendly designs and optimizing code, leading to a 25% decrease in bounce rates.",
        "Improved website speed and performance through continuous development efforts, achieving a 40% decrease in page load times.",
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
