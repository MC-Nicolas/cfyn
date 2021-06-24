import React from 'react';
import styles from '../../styles/Buttons.module.css';

type Props = {
  title: string;
  backgroundCol: string;
  textColor?: string;
  onClick: (e: any) => void;
};

export const Button01 = ({
  title,
  backgroundCol,
  textColor,
  onClick,
}: Props) => {
  return (
    <button
      data-testid='button01'
      onClick={onClick}
      className={styles.button1}
      style={{ backgroundColor: backgroundCol, color: textColor }}
    >
      {title}
    </button>
  );
};
