import { motion } from "framer-motion";

const Testimonal = () => {
  return (
    <div className="bg-white py-4 border border-t-0 border-black">
      
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 " />

        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </div>
       

        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 " />
      </div>
    </div>
  );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          >
            <div className="w-full h-44 bg-white flex items-center justify-center">
  <img src={t.img} className="w-full h-full object-cover rounded-none" />
</div>
            <div className="bg-black text-slate-50 p-4">
              <span className="block font-semibold text-lg mb-1 comic-relief-bold text-red-500">{t.name}</span>
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm text-slate-300 comic-relief-regular">{t.info}</span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-slate-700">
              "
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/v2/D5603AQFFB2Mltx_mWA/profile-displayphoto-shrink_100_100/B56ZX58j4fGcAU-/0/1743655157884?e=1752105600&v=beta&t=VxZ4mhekRAxgHIhibyX_UR-yj1V_AFWY81RTqkeGIOA",
      name: "Mohammad Wasim Afzal",
      title: "Senior Manager @ A&M India",
      info: "Chilli brings energy, intent, and adaptability. He quickly adjusts, manages tasks well, and is a strong asset to any team.",
    },
    {
      id: 2,
      img: "https://media.licdn.com/dms/image/v2/C5603AQGWTPRZ2f5GWQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1639230300966?e=1752105600&v=beta&t=Gom_c5MIQd6Yu9m8y8PuwJMrw7LphpgXiv1GAxNcMeA",
      name: "Ganesh Abhishek",
      title: "Deeptech Investments at SeafundDeeptech Investments at Seafund",
      info: "Chilli pushed our goals higher, challenged norms, and drove real growth. Grateful to learn from such a visionary coach.",
    },
    {
      id: 3,
      img: "https://media.licdn.com/dms/image/v2/D4D03AQE8i0bAUG-PJw/profile-displayphoto-shrink_100_100/B4DZaLeCFiH4AY-/0/1746096629142?e=1752105600&v=beta&t=uZINBR6M4dWjrEsK1pZ_xzPKnHWgorViRWDcBeaCxaQ",
      name: "Karan Gera",
      title: "Business Development & Commercial Strategy",
      info: "Chilli blends ingenuity with relentless drive. Sharp communicator, business-minded, and dependable — working with him ensures swift, goal-focused execution.",
    },
    {
      id: 4,
      img: "https://media.licdn.com/dms/image/v2/D5603AQE8zfdTHPvTqA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718246248917?e=1752105600&v=beta&t=tsijVWAfBDRRQ5CRwaLKqmSHn_XR8qMOSZpxyTdPvGE",
      name: "Aman Singh",
      title: "Sales Manager at Happay",
      info: "Chilli excelled at Byju’s with customer focus and sharp problem-solving. His growth reflects rare talent — a true team asset.",
    },
    {
      id: 5,
      img: "https://media.licdn.com/dms/image/v2/D4D03AQGyfq32U0ST5A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1697445437764?e=1752105600&v=beta&t=I_wLONjTvNypf_T65SW5yiy4Mn3xBaS6mCZp0sju_rc",
      name: "Mathew Cherian",
      title: "HRMS | HRIS",
      info: "Chilli excels at sales, captivating customers with innovation and strategy. A valuable asset, he’s proven at BYJU’S and beyond.",
    },
  ]
};

export default Testimonal;