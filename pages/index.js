import React, { useLayoutEffect, useState } from 'react';
import Metatags from '../components/metatags/Metatags';
import styles from '../styles/Home.module.css';

// Components
import Navbar from '../components/navbar/Navbar';
import HomepageHeroText from '../components/homepage-hero-text/homepage-hero-text';

const Home = () => {
  return (
    <main>
      <div className={styles.homepageSection1}>
        <Metatags title='CFYN' description='Your finance made easy' />
        {/* Main Content */}
        <Navbar />
        <HomepageHeroText />
      </div>
      {/* Wave */}
      <img src='/wave.svg' className={styles.homepageWave} />
      <div className={styles.presentation1}>psdfsdfsd</div>
    </main>
  );
};

export default Home;
