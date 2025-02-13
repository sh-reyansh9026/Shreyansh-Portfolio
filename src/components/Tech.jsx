import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { SiPython } from "react-icons/si";

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  const techs = [
    {
      name: "React",
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    },
    { name: "MySQL", icon: <GrMysql className="text-7xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-7xl text-cyan-500" /> },
    { name: "Express", icon: <SiExpress className="text-7xl text-red-700" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-7xl text-green-500" /> },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className="text-7xl text-sky-700" />,
    },
    { name: "Github", icon: <FaGithub className="text-7xl text-green-500" /> },
    {
      name: "Material UI",
      icon: <SiMui className="text-7xl text-green-500" />,
    },
    { name: "HTML 5", icon: <FaHtml5 className="text-7xl text-green-500" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-7xl text-green-500" />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript className="text-7xl text-green-500" />,
    },
    {
      name: "Socket.io",
      icon: <SiSocketdotio className="text-7xl text-green-500" />,
    },
    { name: "Java", icon: <FaJava className="text-7xl text-green-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-7xl text-green-500" /> },
    { name: "C", icon: <SiC className="text-7xl text-green-500" /> },
    { name: "Python", icon: <SiPython className="text-7xl text-green-500" /> },
  ];

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-6xl font-extrabold text-white"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techs.map(({ name, icon }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(2 + index)}
            className="p-7 m-1 relative group"
          >
            {icon}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-white text-xl">
              <div className="relative ">
                <div
                  className="absolute w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-transparent border-l-transparent border-r-transparent border-t-8
                 border-t-white transform rotate-0 left-1/2 -translate-x-1/2"
                ></div>
                {name}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
