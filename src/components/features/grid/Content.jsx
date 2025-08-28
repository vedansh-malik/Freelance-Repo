//import { MaxWidthWrapper } from "../components/utils/MaxWidthWrapper";
import { MaxWidthWrapper } from "../../utils/MaxWidthWrapper";
import React from "react";
import { Tower } from "./Tower";
import { MiniCard1 } from "./MiniCard1";
import { MiniCard2 } from "./MiniCard2";
import { LongCard } from "./LongCard";
import { SimpleGrid } from "./SimpleGrid";
import {SectionHeading} from "../../utils/SectionHeading";
import { SectionSubheading } from "../../utils/SectionSubheading";
import { SectionHeadingSpacing } from "../../utils/SectionHeadingSpacing";

export const Content = () => {
  return (
    <section>
      <MaxWidthWrapper className="relative z-20 pb-20 pt-20 md:pb-12 md:pt-12">
        <SectionHeadingSpacing>
          <SectionHeading>
          Take the Next Step  
            <br />
            <span className="bg-gradient-to-br from-indigo-500 to-indigo-500 bg-clip-text text-transparent">
            Elevate Your Success Today
            </span>
          </SectionHeading>
          <SectionSubheading>
            From Idea to Impact. Let’s discuss your next steps and unlock the potential of your business.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid />
        <div className="my-12 h-[1px] w-full bg-gradient-to-r from-blue-800/0 via-blue-400/50 to-blue-800/0 md:my-20" />
        <SimpleGrid />
      </MaxWidthWrapper>
    </section>
  );
};

const Grid = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <Tower />
    <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
      <MiniCard1 />
      <MiniCard2 />
      <LongCard />
    </div>
  </div>
);
