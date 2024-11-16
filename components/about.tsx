import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Profile } from "@/components/profile";

export function About() {
  return (
    <section id="about" className="container py-10 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 px-4 md:px-10">
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Profile />
        </div>

        <div className="space-y-6 -mt-20">
          <div className="group">
            <h2 className="text-[4vw] md:text-[2vw] translate-y-20 leading-[100%] uppercase font-semibold bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
              About Me
            </h2>
            <div className="h-20 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
          </div>

          <p className="text-muted-foreground text-justify">
            I love exploring new things! 👋 Hello! I am currently a final-year
            Masters student studying Embedded Electronics. My academic journey
            has equipped me with a solid foundation in digital electronics and
            hands-on experience with tools like MATLAB, Proteus, AutoCAD,
            LabVIEW, and Arduino.
          </p>

          <p className="text-muted-foreground text-justify">
            💻 In the digital realm, I wear another hat as a web developer. I
            have had the pleasure of crafting and launching various web
            applications using cutting-edge technologies.
          </p>

          <p className="text-muted-foreground text-justify">
            🚀 My journey is fueled by an insatiable passion for harnessing
            modern technology to address real-world challenges. If you are
            seeking a versatile web developer with a knack for innovation, feel
            free to connect with me. Let us explore how I can bring my diverse
            skill set to enhance your projects.
          </p>

          <Button variant="outline" asChild>
            <Link target="_blank" href="/nyamadi_atsu_cv.pdf">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
