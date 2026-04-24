import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, LogoCanvas } from './components/'
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { motion } from "framer-motion";
import { slideIn } from './utils/motion';

const THEME_STORAGE_KEY = 'portfolio-theme';
const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
  } catch (error) {
    // Ignore storage access issues and fall back to system preference.
  }

  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const App = () => {
  const [isCompatible, setIsCompatible] = useState(true);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      // Ignore storage access issues.
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleRedirect = () => {
    setIsCompatible(true);
  };

  if (!isCompatible) {
    return (

      <div className='flex min-h-screen flex-col lg:flex-row items-center justify-center gap-6 px-4 py-8 theme-page'>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] -mb-10 cursor-grab'
        >
          <LogoCanvas />
        </motion.div>
        <motion.div className='flex flex-col justify-center items-center glass-panel space-y-4 py-6 -mt-2 mx-6 h-full rounded-lg'>
          <h1 className={` font-black text-center text-[26px]`}>Compatibility Issues</h1>
          <p className={`${styles.heroSubText} font-light text-center px-4`}>This Website doesn't support on mobile devices perfectly. Open on Desktop or wait until we redirect you to mobile version</p>
          <p className={`${styles.heroSubText} font-light text-center px-4`}>Redirecting shortly...</p>
          <p className={`${styles.heroSubText} font-light text-center px-4 opacity-50`}>---- or ----</p>
          <button className='btn-primary flex-1 my-2 py-3 px-4 rounded-xl outline-none w-fit font-semibold text-sm shadow-md shadow-primary'
            onClick={handleRedirect}
          >
            Redirect Now!
          </button>
        </motion.div>
        <StarsCanvas theme={theme} />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className='relative z-0 theme-page overflow-x-hidden'>
        <div className='bg-hero-pattern bg-opacity-20 bg-cover bg-no-repeat bg-center'>

          <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact theme={theme} />
          <StarsCanvas theme={theme} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
