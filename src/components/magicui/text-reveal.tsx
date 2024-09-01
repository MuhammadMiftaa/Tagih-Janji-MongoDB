"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/src/lib/utils";
import Link from "next/link";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  link?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  link,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative pb-20 z-0 h-[200vh]", className)}
    >
      <div
        className={
          "sticky top-0 mx-auto flex h-1/2 max-w-4xl items-start bg-transparent overflow-hidden"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap text-lg text-black/20 dark:text-white/20 md:py-4 md:text-xl lg:py-8 lg:text-2xl xl:text-3xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}

          <span className="absolute bottom-0 h-64 right-0 left-0 bg-gradient-to-t from-yellow to-transparent from-25%">
            <Link
              href={
                "/janji-prabowo-gibran/" +
                  link?.toLowerCase().replace(/ /g, "-") || ""
              }
              className="absolute bottom-3 right-3 px-4 py-2 rounded-md border border-black bg-yellow font-lora text-black text-xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
            >
              Kenapa Ini Penting?
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
