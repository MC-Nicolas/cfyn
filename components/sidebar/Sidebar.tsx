import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';

import styles from '../../styles/Sidebar.module.scss';

type Props = {
  userEmail: string;
  handleClick: any;
};

const Sidebar = ({ userEmail, handleClick }: Props) => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarUserInfoContainer}>
        <div className={styles.sidebarUserImageContainer}>
          <Image
            className={styles.sidebarUserImage}
            width={80}
            height={80}
            src='/img.jpeg'
          />
        </div>
        <p>{userEmail}</p>
      </div>
      <div className={styles.sidebarMenuContainer}>
        <div className='divider80' />

        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => handleClick('balance')}
        >
          Balance
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => handleClick('goals')}
        >
          Goals
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => handleClick('incomes')}
        >
          Incomes
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => handleClick('expenses')}
        >
          Expenses
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => handleClick('debts')}
        >
          Debts
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => handleClick('savings')}
        >
          Savings
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => handleClick('investments')}
        >
          Investments
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => handleClick('settings')}
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
