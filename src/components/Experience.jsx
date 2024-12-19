import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import {motion} from "framer-motion";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#111827",
                color: "#94a3b8",
            }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            icon={
                <a
                    href={experience.company_website}
                    target="_blank"
                    className="flex justify-center items-center w-full h-full"
                >
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </a>
            }
            iconStyle={{ background: experience.iconBg }}
            date={experience.date}
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>
            <ul className="mt-5 ml-5 list-disc space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};
const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant(1.0)}
                        initial="hidden"
                        animate="show">
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, 'experience')

