import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const Feedbacks = () => {
  return (
    <div
      className="min-h-screen flex flex-col antialiased bg-white 
      dark:bg-black-200 dark:bg-grid-white/[0.05] items-center 
      justify-center relative overflow-hidden px-4"
    >
      {/* Title positioned at the top */}
      <h1 className="text-white text-4xl md:text-6xl font-bold absolute top-6 md:top-10">
        Voices of Trust
      </h1>

      {/* Content stays centered */}
      <div className="flex flex-col items-center justify-center w-full mt-20 md:mt-28">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
