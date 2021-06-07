import React from 'react';
import styles from '../../styles/Inputs.module.css';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockIcon from '@material-ui/icons/Lock';

export const ButtonEmail = () => {
  return <input type='email' />;
};

type InputProps = {
  icon: string;
  typeOfInput: string;
  placeholder: string;
};
export const InputWithIcon = ({
  icon,
  typeOfInput,
  placeholder,
}: InputProps) => (
  <div className={styles.inputContainer}>
    <div className={styles.inputLogoContainer}>
      {icon === 'at' && <AlternateEmailIcon color='inherit' />}
      {icon === 'lock' && <LockIcon color='inherit' />}
    </div>
    {typeOfInput === 'email' && (
      <input type='email' className={styles.input} placeholder={placeholder} />
    )}
    {typeOfInput === 'password' && (
      <input
        type='password'
        className={styles.input}
        placeholder={placeholder}
      />
    )}
  </div>
);
