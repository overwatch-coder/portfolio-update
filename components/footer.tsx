"use client";

import { Mail, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    platform: "Github",
    url: "https://www.github.com/overwatch-coder",
    icon: FaGithub,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/nyamadi-atsu/",
    icon: FaLinkedin,
  },
  {
    platform: "Email",
    url: "mailto:devbrainy98@gmail.com?subject=Request Help From Overwatch Coder",
    icon: Mail,
  },
];

const links = [
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Projects",
    url: "#projects",
  },
  {
    label: "Experience",
    url: "#experience",
  },
  {
    label: "Skills",
    url: "#skills",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

export function Footer() {
  return (
    <motion.footer
      className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container py-8 md:py-12 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Overwatch Coder</h3>
            <p className="text-sm text-muted-foreground">
              I love exploring new things!
              <Heart className="inline-block w-7 h-7 mx-1.5 text-red-500 animate-pulse" />
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.div
                  key={social.platform}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-4"
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    className="hover:text-primary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Overwatch Coder. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
