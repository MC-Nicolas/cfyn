import React, { useState, useEffect } from 'react';
import styles from '../../styles/RecentActivities.module.scss';
import Image from 'next/image';
import RecentActivity from '../recentActivity/RecentActivity';
import TocIcon from '@material-ui/icons/Toc';

type Props = {
  activeTab:
    | 'balance'
    | 'incomes'
    | 'expenses'
    | 'goals'
    | 'debts'
    | 'investments'
    | 'savings'
    | 'settings'
    | 'addData';
};

const RecentActivities = ({ activeTab }: Props) => {
  if (activeTab !== 'settings') {
    return (
      <div className={styles.recentActivityContainer}>
        <div className={styles.recentActivityTitleContainer}>
          <h3 className={styles.recentActivityTitle}>Recent activities</h3>
          <button className={styles.recentActivityTitleButton}>
            <TocIcon fontSize='large' />
          </button>
        </div>
        <RecentActivity
          typeOfMovement='investment'
          amount={1000}
          reasonOfMovement='Stock Purchase AAPL'
          date='20/01/2021'
        />
        <div className='divider100 marginTop10 marginBottom10' />
        <RecentActivity
          typeOfMovement='expense'
          amount={-100}
          reasonOfMovement='Groceries'
          date='22/01/2021'
        />
      </div>
    );
  } else return null;
};

export default RecentActivities;
