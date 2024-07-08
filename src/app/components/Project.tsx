import Link from "next/link";
import { ProjectType } from "@types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Image from "next/image";

const Project = ({
  name,
  subtitle,
  description,
  skillset,
  github,
  site,
  photo
}: ProjectType) => {
  return (
    <div
      data-aos={"fade-down"}
      className="flex flex-col space-y-2 border-b border-gray-400 py-4 last:border-b-0"
    >
      <Link
        href={site ? site : "/projects"}
        target="_blank"
        className="uppercase font-bold tracking-wide text-xl md:text-3xl text-blue-900 hover:underline hover:scale-105 w-fit duration-1000 transition"
      >
        {name}
      </Link>

      <p className="text-gray-500 capitalize">{subtitle}</p>

      <Link href={site ? site : "/projects"} target="_blank" className="flex-1">
        <Image
          src={photo}
          alt={name}
          width={500}
          height={500}
          loading="lazy"
          quality={100}
          className="w-full md:w-[350px] hover:scale-105 transition object-contain"
        />
      </Link>

      <p className="text-gray-400 text-sm py-2 leading-loose">{description}</p>

      <div className="items-center flex space-x-10 py-3">
        {github && (
          <Link
            target="_blank"
            href={github}
            className="hover:scale-105 transition"
          >
            <FaGithub size={30} />
          </Link>
        )}

        {site && (
          <Link
            target="_blank"
            href={site}
            className="hover:scale-105 transition"
          >
            <FaExternalLinkAlt size={30} />
          </Link>
        )}
      </div>

      <p className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:items-center space-x-1 pt-2">
        <span className="text-slate-700 font-semibold text-sm md:text-lg capitalize">
          Skillset:
        </span>
        <span className="flex items-center space-x-2 text-gray-400 text-xs md:text-sm flex-wrap">
          {skillset.map((skill) => (
            <span key={skill}>{skill},</span>
          ))}
        </span>
      </p>
    </div>
  );
};

export default Project;
