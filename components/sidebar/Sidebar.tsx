import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Image from 'next/image';
import styles from '../../styles/Sidebar.module.scss';

import { setActiveTab } from '../../redux/pages/pages.actions';

type Props = {
  userEmail: string;
  setActiveTab: (tab: string) => void;
};

const Sidebar = ({ userEmail, setActiveTab }: Props) => {
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
          onClick={() => setActiveTab('balance')}
        >
          Balance
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => setActiveTab('goals')}
        >
          Goals
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => setActiveTab('incomes')}
        >
          Incomes
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => setActiveTab('expenses')}
        >
          Expenses
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => setActiveTab('debts')}
        >
          Debts
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => setActiveTab('savings')}
        >
          Savings
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => setActiveTab('investments')}
        >
          Investments
        </button>
        <button
          className={`${styles.sidebarMenuText} cursorPointer`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  setActiveTab: (activeTab: string) => dispatch(setActiveTab(activeTab)),
});

export default connect(null, mapDispatchToProps)(Sidebar);
