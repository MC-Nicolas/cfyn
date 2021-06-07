import React from 'react';
import styles from '../../styles/LoginPage.module.css';
import Link from 'next/link';

import { InputWithIcon } from '../../components/input/Input';
import { ButtonLogin } from '../../components/buttons/Buttons';

// Firebase
import { auth, googleAuthProvider } from '../../utils/firebase';

const signInWithGoogle = async () => {
  await auth.signInWithPopup(googleAuthProvider);
};

const LoginPage = () => {
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginCard}>
        <h4>Log in</h4>
        <div className={styles.loginInputsContainer}>
          <InputWithIcon icon='at' typeOfInput='email' placeholder='Email' />
          <InputWithIcon
            icon='lock'
            typeOfInput='password'
            placeholder='Password'
          />
          <ButtonLogin
            title='Login'
            backgroundCol='#fff'
            textColor='#000'
            onClick={() => console.log('test')}
          />
          <ButtonLogin
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

export default LoginPage;
