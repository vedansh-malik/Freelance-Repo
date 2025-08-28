import { SiGithub } from "react-icons/si";
import { CalloutChip } from "../../utils/CalloutChip";
import { Card } from "../../utils/Card";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBell,
  FiGrid,
  FiMail,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { CornerBlur } from "../../utils/CornerBlur";
import { PulseLine } from "../../utils/PulseLine";
//import { PulseLine } from "@/components/utils/PulseLine";

export const Tower = () => {
  return (
    <div className="col-span-1 h-[600px] lg:col-span-4 lg:h-[600px]">
      <Card>
        <PulseLine />

        <CalloutChip>Lorem</CalloutChip>
        <p className="mb-2 text-2xl font-semibold">Lorem, ipsum dolor.</p>
        <p className="mb-8 text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          aliquid beatae laboriosam molestias illum dolores fugiat recusandae,
          dolorum consequuntur ipsa?
        </p>

        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Application UI v2.0.0{" "}
              <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on January 13th, 2022
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                class="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              Download ZIP
            </a>
          </li>
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Figma v1.3.0
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 7th, 2021
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li class="ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Library v1.2.2
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 2nd, 2021
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>

        <CornerBlur />
        {/* <Mockup /> */}
      </Card>
    </div>
  );
};

const Mockup = () => (
  <div className="absolute -bottom-4 left-6 h-[340px] w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/50 sm:h-[370px]">
    <MockupTopBar />
    <div className="flex h-full w-full">
      <MockupSideBar />
      <MockupMain />
    </div>
  </div>
);

const MockupSideBar = () => (
  <div className="h-full w-24 border-r border-zinc-700 bg-zinc-900 p-2">
    <div className="mb-4 flex items-center justify-between ">
      <SiGithub className="text-zinc-700" />
      <FiBell className="text-blue-500" />
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-1 rounded bg-zinc-700 px-1 py-0.5 text-xs text-zinc-200">
        <FiUser />
        Users
      </div>
      <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
        <FiMail />
        Campaigns
      </div>
      <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
        <FiAward />
        Goals
      </div>
      <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
        <FiGrid />
        Tools
      </div>
      <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
        <FiSettings />
        Settings
      </div>
    </div>
  </div>
);

const MockupTopBar = () => (
  <div className="flex gap-1 border-b border-zinc-700 bg-zinc-950 p-2">
    <div className="size-2 rounded-full bg-red-600"></div>
    <div className="size-2 rounded-full bg-yellow-600"></div>
    <div className="size-2 rounded-full bg-green-600"></div>
  </div>
);

const MockupMain = () => {
  const [users, setUsers] = useState([
    {
      name: "John Johnson",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      name: "Dan Daniels",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dan",
    },
    {
      name: "Tom Thomas",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    },
    {
      name: "Andrea Andreas",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andrea",
    },
    {
      name: "Pete Peters",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pete",
    },
    {
      name: "Phil Phillips",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Phil",
    },
    {
      name: "Garry Garrison",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Garry",
    },
    {
      name: "Frank Franklin",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank",
    },
    {
      name: "Don Donaldson",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Don",
    },
  ]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setUsers((pv) => {
        const copy = [...pv];
        const lastEl = copy.shift();

        if (lastEl) {
          copy.push(lastEl);
        }

        return copy;
      });
    }, 5000);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative z-0 w-full p-4">
        <div className="w-full border-b border-zinc-700 pb-2 text-xs font-semibold uppercase text-zinc-500">
          <span>User</span>
        </div>
        {users.map((u, i) => (
          <motion.div
            layout
            key={u.name}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              zIndex: i === users.length - 1 ? 0 : 1,
            }}
            className="relative flex items-center gap-2 py-2 text-xs"
          >
            <motion.img
              animate={{
                scale: i === 0 ? 1.25 : 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              src={u.src}
              alt={`Placeholder image for faux user ${u.name}`}
              className="size-5 rounded-full"
            />
            <span className={i === 0 ? "text-zinc-200" : "text-zinc-500"}>
              {u.name}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-1/4 z-10 bg-gradient-to-b from-zinc-950/0 via-zinc-950/90 to-zinc-950" />
    </div>
  );
};
