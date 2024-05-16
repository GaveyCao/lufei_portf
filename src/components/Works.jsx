import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  navigateTo,
}) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(navigateTo); 
  };
  return (
    <motion.div onClick={handleClick} variants={fadeIn("up", "spring", index * 0.5, 0.75)} whileHover={{ scale: 1.05 }} style={{ cursor: 'pointer' , maxWidth: '360px', width: '100%' }}>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
    </motion.div>
  );
};

const Works = () => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
            navigateTo={`/components/Portfolio0${index + 1}`} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
