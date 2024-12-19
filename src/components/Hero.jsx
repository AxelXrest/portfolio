import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { styles } from '../styles';
const Hero = () => {
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const messages = ['Web App Developer', "Mobile App Developer"];
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setIndex((index) => (index === messages.length - 1 ? 0 : index + 1));
        setShowText(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const currentText = messages[index];
  const currentTextLetters = currentText.split('');
  return (
    <StyledHero>
      <div className={`${styles.paddingX}  backdrop-blur-sm absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row `}>
        <div className=' bg-gradient-to-br lg:w-[1200px] w-full h-[350px] backdrop:blur-lg from-[#ffffff25] to-[#05050521] border-2 border-gray-500 lg:px-8  px-4 py-6 rounded-xl flex flex-row lg:space-x-6 space-x-6'>
          <div className=" flex flex-col justify-start items-center mt-6">
            <div className="w-5 h-5 rounded-full bg-[#10ffcb]" />
            <div className="w-1 sm:h-60 h-30 neon-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hey, I'm <br /><span className="text-[#10ffcb]">Ajay Nemkul Shrestha</span></h1>
            <StyledHeroSubText className={`${styles.heroSubText} mt-2 text-white-100`}>
              {showText && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {currentTextLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.5,
                        ease: 'easeInOut',
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </StyledHeroSubText>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const StyledHeroSubText = styled.p`
  display: inline-block;
  position: relative;
  overflow: hidden;
  > div {
    display: inline-block;
    position: relative;
    top: -2px;
    margin-left: 4px;
  }
`;

export default Hero;
