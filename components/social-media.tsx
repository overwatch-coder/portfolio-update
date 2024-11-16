"use client";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/brainy_201/",
    icon: BsInstagram,
  },
  {
    platform: "Twitter",
    url: "https://www.twitter.com/overwatch_coder",
    icon: FaXTwitter,
  },
  {
    platform: "Github",
    url: "https://www.github.com/overwatch-coder",
    icon: BsGithub,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/nyamadi-atsu/",
    icon: BsLinkedin,
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/+212777824970",
    icon: BsWhatsapp,
  },
  {
    platform: "Email",
    url: "mailto:devbrainy98@gmail.com?subject=Request Help From Overwatch Coder",
    icon: MdOutlineEmail,
  },
];

const SocialMedia = ({ classes }: { classes?: string }) => {
  return (
    <div className="pt-3 flex flex-col items-start gap-y-3">
      <h2
        className={`tracking-wider text-sm uppercase ${
          classes ? classes : "text-slate-900 border-slate-900"
        } border-b-2`}
      >
        Let&apos;s Link Up On Social Media
      </h2>

      <div className="pt-3 flex items-center gap-x-5">
        {socials.map((social, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={index}
            className="flex items-center gap-4"
          >
            <Link href={social.url} target="_blank">
              <social.icon className={"text-xl md:text-2xl"} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
