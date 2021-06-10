import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

// Redux
import { selectUserEmail } from '../../redux/user/user.selectors';

type NavbarProps = {
  userEmail?: string;
};
const Navbar = ({ userEmail }: NavbarProps) => {
  return (
    <div className={styles.navbarContainer}>
      <nav>
        <div className={styles.logoContainer}>
          <img className={styles.navbarLogo} src='/logo.png' />
          <h2 className={`${styles.navbarBrandTitle} noselect`}>CFYN</h2>
        </div>
        <ul className={styles.navbarMenu}>
          <li>
            <Link href='/'>How it works</Link>
          </li>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Contact us</Link>
          </li>
        </ul>

        {userEmail ? (
          <Link href='/dashboard'>
            <div
              data-testid='dynamicButton'
              className={`${styles.navbarButton} transparentButton`}
            >
              Dashboard
            </div>
          </Link>
        ) : (
          <Link href='/login'>
            <button
              data-testid='dynamicButton'
              className={`${styles.navbarButton} transparentButton`}
            >
              Log in
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};
export const mapStateToProps = createStructuredSelector({
  userEmail: selectUserEmail,
});

export default connect(mapStateToProps)(Navbar);
