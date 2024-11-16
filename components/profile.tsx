import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowBigDown,
  ArrowRight,
  ChevronRight,
  Heart,
  MoveUpRight,
} from "lucide-react";

export function Profile() {
  return (
    <>
      <div className="w-full relative mt-4 h-[400px] group mx-auto dark:bg-black  bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
        <div className="w-full rounded-t-md h-[300px] group-hover:h-[380px] overflow-hidden transition-all duration-300">
          <Image
            src="/brainy.jpg"
            alt="Overwatch Coder"
            width={600}
            height={600}
            className="h-full w-full scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300"
          />
        </div>
        <article className="relative overflow-hidden  flex-grow">
          <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
            <p className="md:text-2xl font-semibold">Nyamadi Mawumenyo Atsu</p>
            <p className="sm:text-base text-sm">Full Stack React Developer</p>
          </div>
          <button className="absolute h-12 -bottom-5 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3 text-2xl font-medium transition-all duration-300 w-full text-center">
            Full Stack React Developer
          </button>
        </article>
      </div>
    </>
  );
}
