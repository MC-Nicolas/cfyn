import React, { useLayoutEffect, useState } from 'react';
import Metatags from '../components/metatags/Metatags';
import styles from '../styles/Home.module.css';
import { useSpring, animated } from 'react-spring';

// Components
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  const [areAnimationsLaunched, setAreAnimationsLaunched] = useState(false);
  const { x, y } = useSpring({
    x: areAnimationsLaunched ? 0 : 100,
    y: !areAnimationsLaunched ? 0 : 1,
    config: { tension: 100, friction: 30 },
  });

  useLayoutEffect(() => {
    setAreAnimationsLaunched(true);
  }, []);

  return (
    <main>
      <div className={styles.homepageSection1}>
        <Metatags title='CFYN' description='Your finance made easy' />
        {/* Main Content */}
        <Navbar />
        <div className={`${styles.titlesContainer} noselect`}>
          <animated.h2
            className={`${styles.title} `}
            style={{
              transform: x.to(x => `translate3d(${x}%, 0, 0)`),
            }}
          >
            Plan your budgets & improve your finances
          </animated.h2>
          <animated.h3
            className={`${styles.subTitle}`}
            style={{
              transform: x.to(x => `translate3d(-${x}%, 0, 0)`),
            }}
          >
            This is the only place you need to finally understand and take
            control of your finances{' '}
          </animated.h3>
          <animated.button
            className='buttonCallToActionWhite'
            style={{
              opacity: y.to(y => y),
            }}
          >
            Try for free
          </animated.button>
        </div>
      </div>
      {/* Wave */}
      <img src='/wave.svg' className={styles.homepageWave} />
      <div className={styles.presentation1}>psdfsdfsd</div>
    </main>
  );
};

export default Home;
