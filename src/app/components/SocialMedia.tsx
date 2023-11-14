"use client";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="pt-3 flex flex-col items-start gap-y-3">
      <h2 className="tracking-wider text-sm uppercase text-slate-900 border-b-2 border-slate-900">
        Let's Link Up On Social Media
      </h2>

      <p className="pt-3 flex items-center gap-x-5">
        <Link
          href={"https://www.instagram.com/overwatch_coder/"}
          target="_blank"
        >
          <BsInstagram className="text-xl md:text-2xl hover:text-cyan-700" />
        </Link>

        <Link target="_blank" href={"https://www.twitter.com/overwatch_coder"}>
          <BsTwitter className="text-xl md:text-2xl hover:text-cyan-700" />
        </Link>

        <Link target="_blank" href={"https://www.github.com/overwatch-coder"}>
          <BsGithub className="text-xl md:text-2xl hover:text-cyan-700" />
        </Link>

        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/nyamadi-atsu/"}
        >
          <BsLinkedin className="text-xl md:text-2xl hover:text-cyan-700" />
        </Link>

        <Link target="_blank" href={"https://wa.me/+212698551516"}>
          <BsWhatsapp className="text-xl md:text-2xl hover:text-cyan-700" />
        </Link>

        <Link
          target="_blank"
          href={
            "mailto:devbrainy98@gmail.com?subject=Request Help From Overwatch Coder"
          }
        >
          <MdOutlineEmail className="text-xl md:text-2xl hover:text-cyan-700" />
        </Link>
      </p>
    </div>
  );
};

export default SocialMedia;
