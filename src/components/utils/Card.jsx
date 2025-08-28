import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Card = ({ className, children, style = {} }) => {
  return (
    <motion.div
      initial={{
        filter: "blur(2px)",
      }}
      whileInView={{
        filter: "blur(0px)",
        
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.25,
      }}
      style={style}
      className={twMerge(
        "relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-indigo-500/70 to-indigo-500/100 p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};


/* rgb(141 7 252 / 80%)  */