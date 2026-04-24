import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (WrappedComponent, idName) => {
    const HOC = (About,) => {
        return (
            <motion.section
                id={idName}
                variants={staggerContainer()}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} mx-auto relative z-0 w-full max-w-7xl min-w-0 overflow-x-hidden`}
            >
                <WrappedComponent {...About} />
            </motion.section>
        );
    };
    return HOC;
};

export default SectionWrapper;
