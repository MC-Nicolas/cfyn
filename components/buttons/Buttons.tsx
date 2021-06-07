import React from 'react';
import styles from '../../styles/Buttons.module.css';

type Props = {
  title: string;
  backgroundCol: string;
  textColor: string;
  onClick: () => void;
};

export const ButtonLogin = ({
  title,
  backgroundCol,
  textColor,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={styles.button1}
      style={{ backgroundColor: backgroundCol, color: textColor }}
    >
      {title}
    </button>
  );
};
