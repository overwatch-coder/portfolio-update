import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <section className="pt-5 px-5 flex flex-col space-y-2">
      <h1 className="text-center md:text-start text-3xl md:text-5xl lg:text-7xl tracking-wider font-semibold text-slate-900">
        Overwatch Coder.
      </h1>

      <p className="text-sm md:text-2xl font-light text-slate-600 text-center md:text-start">
        I love Exploring new things!
      </p>

      <div className="flex flex-col space-y-5 pt-4">
        <p className="text-slate-600 text-[17px] text-justify">
          <span className="text-2xl">👋</span> Hello! I am currently a
          first-year Masters student studying Electrical Engineering and
          Industrial Computing. My academic journey equipped me with a solid
          foundation in digital electronics and hands-on experience with tools
          like MATLAB, Proteus, AutoCAD, LabVIEW, and Arduino.
        </p>

        <p className="text-slate-600 text-[17px] text-justify">
          <span className="text-2xl">💻</span>
          In the digital realm, I wear another hat as a web developer. I have
          had the pleasure of crafting and launching various web applications
          using cutting-edge technologies. My expertise spans both frontend
          (React, Next, Typescript, Tailwind, JavaScript, HTML, CSS) and backend
          (Node, Express, MongoDB, MySQL, JWT, NestJS) development.
        </p>

        <p className="text-slate-600 text-[17px] text-justify">
          <span className="text-2xl">🚀</span> My journey is fueled by an
          insatiable passion for harnessing modern technology to address
          real-world challenges. If you are seeking a versatile web developer
          with a knack for innovation, feel free to connect with me. Let us
          explore how I can bring my diverse skill set to enhance your projects.
        </p>
      </div>

      <div className="flex items-center justify-between pt-4">
        <Link
          target="_blank"
          href="/nyamadi_atsu_cv.pdf"
          className="hover:underline text-gray-900 font-medium"
        >
          View my Resume
        </Link>

        <Link
          href="/contact"
          className="bg-slate-900 px-4 py-2 text-white rounded hover:scale-105"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
