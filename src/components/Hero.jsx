import { motion } from "framer-motion";
import Typed from "typed.js";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    // Define options for the Typed.js animation
    const options = {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Mobile Developer",
        "Blogger",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    // Create a new instance of Typed animation
    const typed = new Typed(el.current, options);
    // Cleanup: Destroy the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, it's me <span className="text-[#915EFF]">Nisar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span ref={el}></span>
          </p>
        </div>
      </div>
      <br />
      <ComputersCanvas />
      <br />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
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
