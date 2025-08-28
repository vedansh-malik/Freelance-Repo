import React from "react";
import {
  FiCalendar,
  FiCheck,
  FiCloud,
  FiDollarSign,
  FiMoon,
  FiWatch,
} from "react-icons/fi";

export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={FiCalendar}
      title="Investor Relations"
      subtitle="Build strong investor confidence with data-driven insights and transparent communication."
    />
    <Item
      Icon={FiWatch}
      title="Strategic Initiatives"
      subtitle="Drive innovation and growth with well-executed, forward-thinking strategies."
    />
    <Item
      Icon={FiMoon}
      title="Business Analytics"
      subtitle="Turn complex data into actionable insights to optimize business performance."
    />
    <Item
      Icon={FiDollarSign}
      title="Problem Solving"
      subtitle="Tackle challenges head-on with creative, results-oriented solutions."
    />
    <Item
      Icon={FiCloud}
      title="Stakeholder Management"
      subtitle="Strengthen relationships and align interests for long-term success."
    />
    <Item
      Icon={FiCheck}
      title="Strategic Thinking"
      subtitle="Make informed decisions and stay ahead with a clear vision and roadmap."
    />
  </div>
);

const Item = ({ Icon, title, subtitle }) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-lg font-medium md:text-xl text-white">
        <Icon className="mr-1.5 h-[26px] text-primary" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
