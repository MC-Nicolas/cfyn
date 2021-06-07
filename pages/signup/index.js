import React from 'react';
import styles from '../../styles/LoginPage.module.css';
import Link from 'next/link';

import { InputWithIcon } from '../../components/input/Input';
import { ButtonLogin } from '../../components/buttons/Buttons';

const SignupPage = () => {
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginCard}>
        <h4>Sign Up</h4>
        <div className={styles.loginInputsContainer}>
          <InputWithIcon icon='at' typeOfInput='email' placeholder='Email' />
          <InputWithIcon
            icon='at'
            typeOfInput='email'
            placeholder='Email Confirmation'
          />
          <InputWithIcon
            icon='lock'
            typeOfInput='password'
            placeholder='Password'
          />
          <InputWithIcon
            icon='lock'
            typeOfInput='password'
            placeholder='Password Confirmation'
          />
          <ButtonLogin title='Sign Up' backgroundCol='#fff' textColor='#000' />
          <ButtonLogin title='Sign up with Google' backgroundCol='#4285F4' />
        </div>
        <p>
          Already have an account ?
          <Link href='/login'>
            <span className='underlined-link'> Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
