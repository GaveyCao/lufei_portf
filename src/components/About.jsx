import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a designer, my projects range from web interfaces to mobile apps, 
        each enhancing my dedication to user-centric design solutions. 
        My goal is to merge aesthetic elegance with functional design, 
        enhancing both user interaction and satisfaction.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
