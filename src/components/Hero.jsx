import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

const messages = ['Full Stack Developer', 'React · API Integration · VPS Hosting'];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[index];

    const isTypingDone = !isDeleting && displayText === currentMessage;
    const isDeletingDone = isDeleting && displayText === '';

    const timeout = setTimeout(() => {
      if (isTypingDone) {
        setIsDeleting(true);
        return;
      }

      if (isDeletingDone) {
        setIsDeleting(false);
        setIndex((currentIndex) => (currentIndex + 1) % messages.length);
        return;
      }

      const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1;
      setDisplayText(currentMessage.slice(0, nextLength));
    }, isTypingDone ? 1200 : isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [displayText, index, isDeleting]);

  return (
    <StyledHero>
      <div className={`${styles.paddingX} backdrop-blur-sm absolute inset-0 top-[180px] sm:top-[220px] lg:top-[260px] max-w-7xl mx-auto flex flex-row`}>
        <div className='theme-panel w-full h-fit lg:px-8 px-4 py-6 rounded-xl flex flex-row items-start lg:space-x-6 space-x-4'>
          <div className="flex flex-col items-center mt-2 self-stretch">
            <div className="w-5 h-5 rounded-full bg-[color:var(--accent)]" />
            <div className="w-1 flex-1 min-h-[80px] sm:min-h-[120px] neon-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hey, I'm <br /><span className="text-[color:var(--accent)]">Ajaya Nemkul Shrestha</span></h1>
            <StyledHeroSubText className={`${styles.heroSubText} mt-2 theme-text-secondary`}>
              <span>{displayText}</span>
              <span className='cursor'>|</span>
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
  .cursor {
    display: inline-block;
    margin-left: 4px;
    color: var(--accent);
    animation: blink 0.9s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export default Hero;
