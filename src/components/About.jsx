import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ServicesCard = ({ index, title, icon, }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full "
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full glass-card p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="theme-surface rounded-[20px] py-5 px-6 sm:px-12 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className="theme-text-primary text-[20px] font-bold text-center
          ">{title}</h3>
        </div>
      </motion.div>
    </Tilt >
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 theme-text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Full Stack Developer (Frontend-Focused) skilled in crafting responsive UIs with React and Flutter, and integrating robust backend systems via .NET APIs. Strong in VPS hosting on Ubuntu using aaPanel, and experienced with FreeRADIUS setup for ISP solutions. Known for delivering clean, intuitive interfaces without compromising functionality.
      </motion.p>
      <div className="sm:flex-1 justify-center mt-12 sm:mt-20 flex flex-wrap gap-6 sm:gap-10">
        {services.map((services, index) => (
          <ServicesCard key={services.title} index={index} title={services.title} icon={services.icon} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")