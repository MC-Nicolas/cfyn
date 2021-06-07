import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav>
        <div className={styles.logoContainer}>
          <img src='/logo.png' width={80} />
          <h2 className='noselect'>CFYN</h2>
        </div>
        <ul className={styles.navbarMenu}>
          <li>
            <Link href='/'>How it works</Link>
          </li>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href={{ pathname: 'dashboard/Dashboard' }} as='/dashboard'>
              Contact us
            </Link>
          </li>
        </ul>
        <Link href={{ pathname: '/login/Login' }} as='login'>
          <button className={`${styles.navbarButton} transparentButton`}>
            Log in
          </button>
        </Link>
      </nav>
      {/* Nav menu */}
    </div>
  );
};

export default Navbar;
