import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { logo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const openProject = () => window.open(source_code_link, "_blank");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 28,
          scale: 1,
          speed: 450,
        }}
        className='group glass-card hover:shadow-card shadow-gray-900 p-4 sm:p-5 rounded-2xl sm:w-[360px] w-full transition-all duration-300'
      >
          <div
              className="relative w-full h-[200px] sm:h-[230px] cursor-pointer overflow-hidden rounded-2xl"
              onClick={openProject}
          >
              <img
                  src={image}
                  alt='project_image'
                  className='w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100' />

              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                  <div
                      onClick={openProject}
                      className='btn-ghost w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  >
                      <img
                          src={logo}
                          alt='source code'
                          className='w-8 h-8 object-contain'
                      />
                  </div>
              </div>

              <div className='absolute left-3 bottom-3'>
                <span className='btn-primary text-xs font-semibold rounded-full px-3 py-1'>View Project</span>
              </div>
          </div>

          <div className='mt-5'>
              <h3 className='theme-text-primary font-bold text-[20px] sm:text-[24px]'>{name}</h3>
              <p className='mt-2 theme-text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color} px-2 py-1 rounded-full theme-surface border border-[color:var(--border-color)]`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Projects</p>
        <h2 className={`${styles.sectionHeadText}`}>My Works.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 theme-text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to live demos or app download link. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-12 sm:mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");