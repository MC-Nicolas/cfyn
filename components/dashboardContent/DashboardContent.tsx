import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/DashboardContent.module.scss';

// Components
import DashboardActionBar from '../dashboardActionBar/DashboardActionBar';
import CardInfoBar from '../cardInfoBar/CardInfoBar';
import CardMainGraph from '../cardMainGraph/CardMainGraph';
import RecentActivities from '../recentActivities/RecentActivities';

type Props = {
  userEmail: string;
  activeTab:
    | 'balance'
    | 'incomes'
    | 'expenses'
    | 'goals'
    | 'debts'
    | 'investments'
    | 'savings'
    | 'settings';
};

const DashboardContent = ({ userEmail, activeTab }: Props) => {
  useEffect(() => {
    document.body.classList.add('gradientBackground');
  });
  // get static props ? to get data an hydrate
  return (
    <div className={styles.dashboardContentContainer}>
      <DashboardActionBar activeTab={activeTab} />
      <div className={styles.dashboardInfoBar}>
        <CardInfoBar userEmail={userEmail} activeTab={activeTab} />
      </div>
      {activeTab === 'balance' && <CardMainGraph title='Balance' />}
      {activeTab === 'incomes' && <CardMainGraph title='Total Incomes' />}
      {activeTab === 'expenses' && <CardMainGraph title='Total Expenses' />}
      {activeTab === 'goals' && <CardMainGraph title='Goal 1' />}
      {activeTab === 'debts' && <CardMainGraph title='Total Debts' />}
      {activeTab === 'investments' && <CardMainGraph title='Total portfolio' />}
      {activeTab === 'savings' && <CardMainGraph title='Total Saving' />}
      <RecentActivities activeTab={activeTab} />
    </div>
  );
};

export default DashboardContent;
