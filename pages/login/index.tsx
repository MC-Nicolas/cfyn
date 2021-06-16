import React, { useEffect } from 'react';
import styles from '../../styles/LoginPage.module.css';
import Link from 'next/link';
import Router from 'next/router';

import { InputWithIcon } from '../../components/input/Input';
import { Button01 } from '../../components/buttons/Buttons';
import Metatags from '../../components/metatags/Metatags';
// Firebase
import { auth, googleAuthProvider } from '../../lib/firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserEmail } from '../../redux/user/user.selectors';

type SignInProps = {
  userEmail: string;
};

const signInWithGoogle = async () => {
  await auth.signInWithPopup(googleAuthProvider);
};

const LoginPage = ({ userEmail }: SignInProps) => {
  useEffect(() => {
    userEmail && Router.push('/dashboard');
  }, [userEmail]);

  return (
    <div className={styles.loginPageContainer}>
      <Metatags title='CFYN | Login' />
      <div className={styles.loginCard}>
        <h4>Log in</h4>
        <div className={styles.loginInputsContainer}>
          <InputWithIcon icon='at' typeOfInput='email' placeholder='Email' />
          <InputWithIcon
            icon='lock'
            typeOfInput='password'
            placeholder='Password'
          />
          <Button01
            title='Login'
            backgroundCol='#fff'
            textColor='#000'
            onClick={() => console.log('test')}
          />
          <Button01
            title='Log in with Google'
            backgroundCol='#4285F4'
            onClick={() => signInWithGoogle()}
          />
        </div>
        <p>
          Don't have an account ?{' '}
          <Link href='/signup'>
            <span className='underlined-link'>Create one</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  userEmail: selectUserEmail,
});

export default connect(mapStateToProps)(LoginPage);
