import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, LogoCanvas } from './components/'
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { motion } from "framer-motion";
import { slideIn } from './utils/motion';

const App = () => {
  const [isCompatible, setIsCompatible] = useState(true);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (!isCompatible) {
      const intervalId = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isCompatible])

  if (!isCompatible) {
    return (

      <div className='flex-row  '>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] -mb-10 cursor-grab'
        >
          {/* <EarthCanvas /> */}
          <LogoCanvas />
        </motion.div>
        <motion.div className='flex flex-col justify-center items-center backdrop-blur-sm  space-y-4 py-6 -mt-2  mx-6  h-full bg-gradient-to-br from-[#fcfcfc33]  rounded-lg border border-gray-500'>
          <h1 className={` font-black text-center text-[26px]`}>Compatibility Issues</h1>
          <p className={`${styles.heroSubText} font-light text-center px-4`}>This Website doesn't support on mobile devices perfectly. Open on Desktop or wait until we redirect you to mobile version</p>
          <p className={`${styles.heroSubText} font-light text-center px-4`}>Redirecting in {countdown} !...</p>
          <p className={`${styles.heroSubText} font-light text-center px-4 opacity-50`}>---- or ----</p>
          <button className='backdrop-blur-sm flex-1 my-2 bg-[#ffffff28] py-3 px-4 rounded-xl hover:bg-[#0707071d] outline-none w-fit text-white font-semibold text-sm shadow-md shadow-primary'
            onClick={handleRedirect}
          >
            Redirect Now!
          </button>
        </motion.div>
        <StarsCanvas />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-opacity-20 bg-cover bg-no-repeat bg-center'>

          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
