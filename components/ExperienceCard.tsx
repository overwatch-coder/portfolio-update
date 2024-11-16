import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceCardProps {
  i: number;
  title: string;
  company: string;
  date: string;
  description: string[];
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function ExperienceCard({
  i,
  title,
  company,
  date,
  description,
  progress,
  range,
  targetScale,
}: ExperienceCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress || scrollYProgress, range, [
    1,
    targetScale,
  ]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative -top-[25%] w-full md:w-[70%] max-w-2xl origin-top"
      >
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              {title}
            </CardTitle>
            <p className="text-center text-lg italic text-muted-foreground">
              {company}
            </p>
            <p className="text-center text-sm text-muted-foreground">{date}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 pl-0">
              {description.map((desc, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primary">✅</span>
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {desc}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
