import React, { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styles from '../../styles/DashboardContent.module.scss';

// Components
import DashboardActionBar from '../dashboardActionBar/DashboardActionBar';
import CardInfoBar from '../cardInfoBar/CardInfoBar';
import CardMainGraph from '../cardMainGraph/CardMainGraph';
import RecentActivities from '../recentActivities/RecentActivities';
import DashboardAddForm from '../dashboardAddForm/DashboardAddForm';

import { selectActiveTab } from '../../redux/pages/pages.selectors';
import {
  fetchBalanceDataStartAsync,
  fetchSavingsDataStartAsync,
} from '../../redux/databases/databases.actions';
import { selectUserId } from '../../redux/user/user.selectors';
import { selectBalancesForGraph } from '../../redux/databases/databases.selectors';

type Props = {
  userEmail: string;
  userId: string;
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
  fetchBalanceData: (userEmail: string) => void;
  fetchSavingsData: (userId: string) => void;
  balanceData: any;
};

const DashboardContent = ({
  userEmail,
  userId,
  activeTab,
  fetchBalanceData,
  fetchSavingsData,
  balanceData,
}: Props) => {
  useEffect(() => {
    document.body.classList.add('gradientBackground');
  }, []);
  useEffect(() => {
    fetchSavingsData(userId);
    fetchBalanceData(userId);
  }, [userId]);

  // get static props ? to get data an hydrate

  return (
    <div className={styles.dashboardContentContainer}>
      {activeTab === 'addData' ? (
        <>
          <DashboardActionBar activeTab={activeTab} />
          <div className={styles.dashboardFormContainer}>
            <DashboardAddForm />
          </div>
        </>
      ) : (
        <>
          <DashboardActionBar activeTab={activeTab} />
          <div className={styles.dashboardInfoBar}>
            <CardInfoBar userEmail={userEmail} activeTab={activeTab} />
          </div>
          {activeTab === 'balance' && (
            <CardMainGraph title='Balance' data={balanceData} />
          )}
          {activeTab === 'incomes' && (
            <CardMainGraph data={[]} title='Total Incomes' />
          )}
          {activeTab === 'expenses' && (
            <CardMainGraph data={[]} title='Total Expenses' />
          )}
          {activeTab === 'goals' && <CardMainGraph data={[]} title='Goal 1' />}
          {activeTab === 'debts' && (
            <CardMainGraph data={[]} title='Total Debts' />
          )}
          {activeTab === 'investments' && (
            <CardMainGraph data={[]} title='Total portfolio' />
          )}
          {activeTab === 'savings' && (
            <CardMainGraph data={[]} title='Total Saving' />
          )}
          <RecentActivities activeTab={activeTab} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  activeTab: selectActiveTab,
  userId: selectUserId,
  balanceData: selectBalancesForGraph,
});
const mapDispatchToProps = (dispatch: any) => ({
  fetchBalanceData: (userId: string) =>
    dispatch(fetchBalanceDataStartAsync(userId)),
  fetchSavingsData: (userId: string) =>
    dispatch(fetchSavingsDataStartAsync(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContent);
