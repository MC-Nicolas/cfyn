import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

// Redux
import { selectUserEmail } from '../../redux/user/user.selectors';

const Navbar = ({ userEmail }) => {
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
            <Link href='/'>Contact us</Link>
          </li>
        </ul>

        {userEmail ? (
          <Link href='/dashboard'>
            <div className={`${styles.navbarButton} transparentButton`}>
              Dashboard
            </div>
          </Link>
        ) : (
          <Link href='/login'>
            <button className={`${styles.navbarButton} transparentButton`}>
              Log in
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  userEmail: selectUserEmail,
});

export default connect(mapStateToProps)(Navbar);
