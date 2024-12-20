import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// higer order components are functions that take a component and return a new component
// An HOC is not a component itself but a function that "wraps" another component and adds extra capabilities.

// this SectionWrapper is made to wrap all the files so that content remain in center and give same type of animation to them
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* this span is used for scrolling of the page by clicking on 
        scroller given just below the computer based on idName given as 
        given in about while exporting as 
        export default SectionWrapper(About, "about");
         */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
