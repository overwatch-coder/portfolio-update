import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
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

export function Hero() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-10">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
        <TypingAnimation
          text="Hi, I am Overwatch Coder."
          className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          duration={200}
        />
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Full Stack Developer passionate about building beautiful, functional,
          and user-centered digital experiences.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
        <div className="flex gap-4 mt-4">
          {socials.map((social) => (
            <Button variant="ghost" size="icon" asChild key={social.platform}>
              <Link href={social.url} target="_blank">
                <social.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
