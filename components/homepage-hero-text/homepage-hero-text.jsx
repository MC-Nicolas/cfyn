import React, { useState, useLayoutEffect } from 'react';
import styles from '../../styles/Home.module.css';
import { useSpring, animated } from 'react-spring';

const HomepageHeroText = () => {
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
    <div className={`${styles.titlesContainer} noselect`}>
      <animated.h2
        className={`${styles.title}`}
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
        This is the only place you need to finally understand and take control
        of your finances
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
  );
};

export default HomepageHeroText;
