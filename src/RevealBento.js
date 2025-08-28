import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiX, SiYoutube,SiLinkedin } from "react-icons/si";
import profile from "./profile.png";
export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />


      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-white comic-relief-regular p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src={profile}
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight text-red-500">
      Hi, I'm Anurag.{" "}
      <span className="text-zinc-400">
        Web3 Founders BUIDL, <span className="text-red-500">I monetize it. {" "}</span> <span className="hidden sm:block">Beyond growth strategy, I understand the power of storytelling and narrative formation—helping projects cut through the noise, build conviction, and scale faster.</span>
      </span>
    </h1>
    <a
      href="https://www.linkedin.com/in/closerchilli/"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#3b82f5] md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/closerchilli"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </a>
    </Block>


    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-900 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/closerchilli"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
    <Block className="col-span-6 text-3xl leading-snug hidden sm:block">
    <p className="text-red-500">
    When does a founder lose?{" "}
      <span className="text-zinc-400">
      When their runway ends. No.
     When their competitors raise more capital? No.
A founder loses when they forget why they started.
When noise drowns their signal.
When growth becomes hollow.

I don't offer hacks. I offer fire.
Strategy sharpened by silence.
      </span>
    </p>
  </Block>
  </>
);

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
      © 2025 chilli.eth{" "}
        <a href="#" className="text-red-500 hover:underline">
        All Rights Reserved
        </a>
      </p>
    </footer>
  );
};