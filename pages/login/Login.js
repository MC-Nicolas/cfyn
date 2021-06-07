import React from 'react';
import styles from '../../styles/LoginPage.module.css';
import Link from 'next/link';

import { InputWithIcon } from '../../components/input/Input';
import { ButtonLogin } from '../../components/buttons/Buttons';

const LoginPage = () => {
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginCard}>
        <h4>Log in</h4>
        <div className={styles.loginInputsContainer}>
          <InputWithIcon icon='at' typeOfInput='email' />
          <InputWithIcon icon='lock' typeOfInput='password' />
          <ButtonLogin title='Login' backgroundCol='#fff' textColor='#000' />
          <ButtonLogin title='Log in with Google' backgroundCol='#4285F4' />
        </div>
        <p>
          Don't have an account ? <Link href='/'>Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
