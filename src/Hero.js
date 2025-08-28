import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
  } from "framer-motion";
  import React, { useRef } from "react";
  import { FiArrowDown } from "react-icons/fi";
  import mascot from "./mascot.png";
  export const Hero = () => {
    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const scrollVelocity = useVelocity(scrollYProgress);
  
    const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    return (
      <section
        ref={targetRef}
        className="h-[500vh] bg-neutral-50 text-neutral-950"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
          <Nav />
          <CenterCopy />
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-7xl font-black uppercase leading-[0.85] md:text-9xl md:leading-[0.85]"
          >
            "They said Web3 was cold...So I brought the <span className="text-stroke">Heat</span>""
          </motion.p>
          <ScrollArrow />
        </div>
      </section>
    );
  };
  
  const Nav = () => {
    return (
      <div className="relative mb-1 flex w-full justify-between p-6">
        <p className="hidden text-xs text-red-500 font-mono uppercase tracking-wide md:block">
          Scoville Level: MAX <br />
          📍 Location: Hot Wallet
        </p>
        <Logo />
        <Links />
      </div>
    );
  };
  
  
  const Logo = () => {
    // Temp logo from https://logoipsum.com/
    return (
      <p>chilli.eth</p>
    );
  };
  
  const Links = () => {
    return (
      <nav className="flex gap-3 text-sm">
         
      <a href="https://www.linkedin.com/in/closerchilli">🧙‍♂️ Summon</a>
      </nav>
    );
  };
  
  const CenterCopy = () => {
    return (
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-auto  items-center justify-center px-4">
        <img
          src={mascot}
          alt="Placeholder image"
          className="mr-2 h-full w-60  object-cover"
        />
        <h1 className="text-3xl font-bold text-neutral-400 sm:text-5xl md:text-7xl">
        Making something <br/> 
        <span className="inline-block -skew-x-[18deg] font-black text-red-500">
        SPICY
          </span>
         <br/>
        Summon the {" "}
          <span className="inline-block -skew-x-[18deg] font-black text-red-500">
            CHILLY
          </span>
        </h1>
      </div>
    );
  };
  
  const ScrollArrow = () => {
    return (
      <>
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto" />
        </div>
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto" />
        </div>
      </>
    );
  };