import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import {
  FiArrowRight,
  FiAward,
  FiCalendar,
  FiCopy,
  FiDatabase,
} from "react-icons/fi";
import chap1 from "./chap1.jpeg";
import chap2 from "./chap2.png";
import chap3 from "./chap3.jpeg";
import chap4 from "./chap4.jpeg";
import { SiInternetcomputer } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { GiMagicTrident } from "react-icons/gi";
import { GiStairsGoal } from "react-icons/gi";
import { image } from "framer-motion/client";
export const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
     
    </>
  );
};

const Card = ({ position, card, scrollYProgress }) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2 !== 0;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: "white",
        color: "black",
      }}
      className="border-2 sticky top-0 w-full origin-top px-4 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        {isOddCard ? (
          <>
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img 
                src={card.image}
                alt="Placeholder" 
                className="rounded-lg shadow-lg object-cover h-64 w-full max-w-[30rem]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <card.Icon className="mb-4 text-4xl text-red-500" />
              <h3 className="mb-4 text-3xl md:text-4xl font-semibold text-center md:text-left comic-relief-bold text-red-500">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-center md:text-left comic-relief-regular">
                {card.description}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end order-2 md:order-1">
              <card.Icon className="mb-4 text-4xl text-red-500" />
              <h3 className="mb-4 text-3xl md:text-4xl font-semibold text-center md:text-right text-red-500 comic-relief-bold">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-center md:text-right comic-relief-regular">
                {card.description}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
              <img 
                src={card.image}
                alt="Placeholder" 
                className="rounded-lg shadow-lg object-cover h-64 w-full max-w-[30rem]"
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

const CARD_HEIGHT = 500;

const CARDS = [
  {
    id: 1,
    Icon: SiInternetcomputer,
    title: "The System Breaker",
    description:
      "I began inside the machine — scaling startups, leading GTM, raising capital. The system called me a success. But I saw the hollowness behind growth-for-growth's sake. And in that moment of clarity, the system lost its grip on me.",
    ctaClasses: "bg-violet-300",
    routeTo: "#",
    image: chap1,
  },
  {
    id: 2,
    Icon: FaFire,
    title: "Fire Within",
    description:
      "I didn’t pivot. I let go — burning false identities one by one: the startup star, the growth hacker, even the mystic mask. What emerged wasn’t someone new. It was someone real. A person who could see the system for what it was: a cage.",
    ctaClasses: "bg-pink-300",
    routeTo: "#",
    image: chap2,
  },
  {
    id: 3,
    Icon: GiMagicTrident,
    title: "Technology as Tantra",
    description:
      "To me, tech isn’t a trend. It’s a tool of truth. Web3 is sacred ground — not for domination, but for decentralization. I doesn’t build to impress; I builds to free.",
    ctaClasses: "bg-red-300",
    routeTo: "#",
    image: chap3,
  },
  {
    id: 4,
    Icon: GiStairsGoal,
    title: "The Real Mission",
    description:
      "I doesn’t play the game of optics. I walk with fire. Where others seek fame, I seek alignment. My work is not loud — but it echoes.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
    image: chap4,
  },
];