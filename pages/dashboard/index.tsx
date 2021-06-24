import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Router from 'next/router';

import { selectUserEmail } from '../../redux/user/user.selectors';

import styles from '../../styles/DashboardPage.module.css';
import Metatags from '../../components/metatags/Metatags';
import Sidebar from '../../components/sidebar/Sidebar';
import DashboardContent from '../../components/dashboardContent/DashboardContent';

// Components

type Tab =
  | 'balance'
  | 'incomes'
  | 'expenses'
  | 'goals'
  | 'debts'
  | 'investments'
  | 'savings'
  | 'settings'
  | 'addData';

type DashboardProps = {
  userEmail: string;
};

const Dashboard = ({ userEmail }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('balance');
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  useEffect(() => {
    if (!userEmail && !isLoading) {
      Router.push('/login');
    }
  }, []);

  return (
    <div className={styles.dashboardPageContainer}>
      <Metatags title='CFYN | Dashboard' />
      {/* Sidebar decide the content to show */}
      <Sidebar userEmail={userEmail} />
      {/*  Main Content */}
      {/* Dashboard Content*/}
      <DashboardContent userEmail={userEmail} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  userEmail: selectUserEmail,
});

export default connect(mapStateToProps)(Dashboard);
