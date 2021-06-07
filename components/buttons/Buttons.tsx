import React from 'react';
import styles from '../../styles/Buttons.module.css';

type Props = {
  title: string;
  backgroundCol: string;
  textColor: string;
};

export const ButtonLogin = ({ title, backgroundCol, textColor }: Props) => {
  return (
    <button
      className={styles.button1}
      style={{ backgroundColor: backgroundCol, color: textColor }}
    >
      {title}
    </button>
  );
};
