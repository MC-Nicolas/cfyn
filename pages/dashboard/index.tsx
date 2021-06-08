import React, { useState } from 'react';
import styles from '../../styles/DashboardPage.module.css';
import Metatags from '../../components/metatags/Metatags';

type Tab =
  | 'balance'
  | 'incomes'
  | 'expenses'
  | 'goals'
  | 'debts'
  | 'investments'
  | 'savings'
  | 'settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>('balance');

  return (
    <div className={styles.dashboardPageContainer}>
      <Metatags title='CFYN | Dashboard' />
      {/* Sidebar decide the content to show */}

      {/*  Main Content */}
    </div>
  );
};

export default Dashboard;
