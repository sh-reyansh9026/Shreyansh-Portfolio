import { link } from "framer-motion/client";
import {
  backend,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  udemy,
  flipkartGrid,
  drishya,
  school,
  college,
  udemy1,
  BeautifulPlanetLogo,
  PenWryt,
  Nexify,
  drumBeats,
  music,
  SimonGame,
  TODO,
  react,
  nextjs,
  native,
} from "../assets";
import React from "react";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },

  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const certifications = [
  {
    overlayText: {
      title: "Udemy",
      content:
        "Completed a comprehensive Web Development Bootcamp, gaining hands-on experience in full-stack development, including front-end and back-end technologies such as React, Node.js, Express, and MongoDB. Developed real-world projects to strengthen my skills.",
      link: udemy,
    },
    image: udemy1,
  },
  {
    overlayText: {
      title: "Flipkart",
      content:
        "Participated in Flipkart Grid, a competitive problem-solving contest, honing my skills, and optimizing solutions under time pressure.",
      link: flipkartGrid,
    },
    image: flipkartGrid,
  },
  {
    overlayText: {
      title: "Drishya",
      content:
        "Engaged in a Career Counselling program to gain insights into career paths, skill development, and industry trends, helping shape my professional goals and aspirations.",
      link: drishya,
    },
    image: drishya,
  },
];
const services = [
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Nextjs Developer",
    icon: nextjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: native,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "appwrite",
    icon: git,
  },
];

const educations = [
  {
    title: "2020 - 2026",
    content: (
      <div className="flex flex-col space-y-4">
        {/* Degree and Icon Section */}
        <div className="flex items-center space-x-4">
          <img
            src={college}
            alt="college"
            className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-md"
          />
          <h1 className="text-2xl font-semibold">Bachelor of Technology</h1>
        </div>

        {/* Course and University */}
        <div>
          <h3 className="text-xl font-medium text-zinc-300">
            Computer Science and Engineering
          </h3>
          <p className="text-zinc-300">
            Madan Mohan Malaviya University of Technology
          </p>
        </div>

        {/* Additional Details */}
        <p className="text-sm text-gray-500 font-normal leading-relaxed">
          ✅ Completed coursework in Computer Science
          <br />
          ✅ Currently in 3rd year
          <br />✅ Worked on several projects
        </p>
      </div>
    ),
    link: "https://www.mmmut.ac.in/",
  },

  {
    title: "2020 - 2021",
    content: (
      <div className="flex flex-col space-y-4">
        {/* Degree and Icon Section */}
        <div className="flex items-center space-x-4">
          <img
            src={school}
            alt="school"
            className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-md"
          />
          <h1 className="text-2xl font-semibold">12th</h1>
        </div>

        {/* Course and University */}
        <div>
          <h3 className="text-xl font-medium text-zinc-300">
            PCM , Computer , English
          </h3>
          <p className="text-zinc-300">St.Joseph College</p>
        </div>

        {/* Additional Details */}
        <p className="text-sm text-gray-500 font-normal leading-relaxed">
          ✅ Completed coursework in PCM
          <br />
          ✅ Gained knowledge in programming concepts, data structures, and
          algorithms.
          <br />✅ Strengthened analytical skills through subjects like
          Mathematics and Physics.
        </p>
      </div>
    ),
    link: "https://www.stjosephlucknow.edu.in/",
  },

  {
    title: "2018 - 2019",
    content: (
      <div className="flex flex-col space-y-4">
        {/* Degree and Icon Section */}
        <div className="flex items-center space-x-4">
          <img
            src={school}
            alt="school"
            className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-md"
          />
          <h1 className="text-2xl font-semibold">10th</h1>
        </div>

        {/* Course and University */}
        <div>
          <h3 className="text-xl font-medium text-zinc-300">
            PCM , Computer , English
          </h3>
          <p className="text-zinc-300">St.Joseph College</p>
        </div>

        {/* Additional Details */}
        <p className="text-sm text-gray-500 font-normal leading-relaxed">
          ✅ Completed coursework in PCM
          <br />
          ✅ Built a strong foundation in Mathematics and Science.
          <br />✅ Developed problem-solving and logical thinking skills.
        </p>
      </div>
    ),
    link: "https://www.stjosephlucknow.edu.in/",
  },
];

const experiences = [
  {
    title: "Jan 2025 - Present",
    content: (
      <div className="flex flex-col space-y-4">
        {/* Degree and Icon Section */}
        <div className="flex items-center space-x-4">
          <img
            src={BeautifulPlanetLogo}
            alt="company"
            className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-md"
          />
          <h1 className="text-2xl font-semibold">
            Software Development Engineer Intern
          </h1>
        </div>

        {/* Course and University */}
        <div>
          {/* <h3 className="text-lg font-medium text-gray-700">
            PCM , Computer , English
          </h3> */}
          <p className="text-xl font-medium text-zinc-300">
            Beautiful Planet.AI
          </p>
        </div>

        {/* Additional Details */}
        <p className="text-sm text-gray-500 font-normal leading-relaxed">
          ✅ Currently working as an SDE Intern at Beautiful Planet.AI
          <br />
          ✅ Developed company's website using Next.js for fast and scalable
          wesbite.
          <br />
          ✅ Integrated Strapi as a headless CMS to efficiently manage site
          content content.
          <br />✅ Worked on optimizing performance and implementing sustainable
          solutions.
          <br /> ✅ Learned the deployement of website using AWS.
          <br />✅ Currently working on company's new project using React
          Native.
        </p>
      </div>
    ),
    link: "https://www.linkedin.com/company/beautiful-planet-ai/",
  },
];
const testimonials = [
  {
    testimonial:
      "Shreyansh is a fantastic web developer with a deep understanding of modern web technologies. His work on our project was exceptional—efficient, well-structured, and optimized for performance. He is always up-to-date with the latest trends in web development and ensures that every website he builds is both visually appealing and highly functional. I highly recommend him for any web development project!",
    name: "Prakhar Shukla",
    designation: "System Engineering Specialist Advisor",
    company: "NTT Data",
  },
  {
    testimonial:
      "Shreyansh is a highly skilled and dedicated web developer. His ability to craft scalable and responsive applications using the MERN stack is impressive. He not only delivers clean and maintainable code but also ensures that the final product aligns perfectly with the project requirements. If you're looking for a developer who truly understands web technologies and brings ideas to life, Shreyansh is the one!",
    name: "Shruti Shukla",
    designation: "Software Engineer",
    company: "Q3 Technologies",
  },
];

const projects = [
  {
    name: "Nexify",
    description:
      "Developed Nexify, a real-time social networking web app using React Vite.Implemented realtime communication features such as messaging using Socket.io with JWT authentication . Built a responsive and user-friendly interface , integrated 32 customizable themes, enhancing user personalization options, with a secure backend powered by Node.js and Express.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "red-text-gradient",
      },
    ],
    image: Nexify,
    source_code_link_github: "https://github.com/sh-reyansh9026/Nexify",
    source_code_link_deploy: "https://nexify-yz99.onrender.com/",
  },
  {
    name: "PenWryt",
    description:
      "Created a responsive blog web app using React, Appwrite, and Tailwind CSS. Leveraged Appwrite for user authentication, database management, and secure API integrations. Used Tailwind CSS to design a modern and responsive UI, ensuring a seamless user experience across devices.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: PenWryt,
    source_code_link_github: "https://github.com/sh-reyansh9026/PenWryt",
    source_code_link_deploy: "https://penwryt.vercel.app/",
  },
  {
    name: "Music App",
    description:
      "Developed using Next.js, TypeScript, and Aceternity UI, this modern music academy app provides an interactive and user-friendly interface. It features an elegant UI designed for seamless navigation, offering courses, lessons, and resources to enhance the learning experience. This project highlights my expertise in frontend development, UI/UX design, and component-based architecture.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "acceternityui",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link_github: "https://github.com/sh-reyansh9026/music",
    source_code_link_deploy: "",
  },
  {
    name: "TODO React App",
    description:
      "Built with React.js, Redux Toolkit, and React Hooks, this efficient TODO app helps users manage their daily tasks with ease. It features a clean and intuitive UI, allowing users to add and delete tasks effortlessly. The app leverages state management with Redux Toolkit for a seamless user experience. This project showcases my skills in modern React development, state management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "reacthooks",
        color: "pink-text-gradient",
      },
    ],
    image: TODO,
    source_code_link_github: "https://github.com/sh-reyansh9026/TODO-React-App",
    source_code_link_deploy: "",
  },
  {
    name: "Simon Game",
    description:
      "Developed using HTML, CSS, and JavaScript, this classic Simon game challenges players to test their memory by repeating an increasing sequence of colors. The game features smooth animations, interactive sound effects, and a responsive design for an engaging user experience. This project highlights my skills in JavaScript logic, DOM manipulation, and frontend development.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: SimonGame,
    source_code_link_github: "https://github.com/sh-reyansh9026/Simon-Game",
    source_code_link_deploy: "",
  },
  {
    name: "Drum Beats",
    description:
      "Created using HTML, CSS, and JavaScript, this interactive drum beats project allows users to play different drum sounds by clicking on various drum elements. The project features responsive design, smooth animations, and engaging audio effects, providing an immersive experience. This project showcases my skills in JavaScript event handling, DOM manipulation, and frontend development.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: drumBeats,
    source_code_link_github: "https://github.com/sh-reyansh9026/drumbeats",
    source_code_link_deploy: "",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  educations,
  certifications,
};
