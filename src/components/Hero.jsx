import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

{
  /*this hero section is called in app.jsx where {bg-hero-pattern} css is written which is actuallya a image in assets with name{herobg.png} 
  so when here its {relative w-full h-screen} this css is written then it expands to whole screen*/
}

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5
      `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi,I'm<span className="text-[#915eff]">Shreyansh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals ,user
            <br className="sm:block hidden" /> | interfaces and web applications
          </p>
        </div>
      </div>
      {/* it is for scroller shown just below computer //here it is shown that
      when scroller is move down it reaches to link of #about*/}
      <ComputersCanvas />
      <div
        className="absolute xs:bottom-10 bottom-32 
      w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4
           border-secondary flex justify-center
            items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              // here it is looped to infinity so that it the ball in scroller moves up and down in loop infinite no. of times

              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
