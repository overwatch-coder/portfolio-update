import { ExperienceType } from "@types";
import { GoDotFill } from "react-icons/go";

const Experience = ({
  title,
  company,
  date,
  description,
  place,
}: ExperienceType) => {
  return (
    <div data-aos="fade-up" className="flex flex-col space-y-3">
      <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:items-center md:justify-between">
        <h2 className="text-lg md:text-2xl font-bold capitalize text-blue-900">
          {title}
        </h2>
        <p className="text-xs md:text-sm text-gray-400">{date}</p>
      </div>
      <p className="flex items-center space-x-1">
        <span className="font-semibold text-cyan-600">{company},</span>
        <span className="text-gray-400 font-light">{place}</span>
      </p>
      <ul className="flex flex-col space-y-3">
        {description.map((desc, idx) => (
          <li
            key={idx}
            className="ps-4 text-sm text-gray-400 flex items-center space-x-3"
          >
            <GoDotFill className="text-gray-600" />
            <span>{desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
