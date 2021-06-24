import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectDiffWithLastBalance } from '../../redux/databases/databases.selectors';
import { createStructuredSelector } from 'reselect';

import styles from '../../styles/CardInfoBar.module.scss';
import CardInfo from '../cardInfo/CardInfo';

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
    | 'settings'
    | 'addData';
  diffWithLastBalance: { isTrendUp: boolean; amount: number };
};

const CardInfoBar = ({ userEmail, activeTab, diffWithLastBalance }: Props) => {
  return (
    <div className={styles.cardInfoBarContainer}>
      {activeTab === 'balance' && (
        <>
          <CardInfo
            title='balance'
            isTrendUp={diffWithLastBalance.isTrendUp}
            amount={diffWithLastBalance.amount}
          />
          <CardInfo title='savings' isTrendUp={false} amount={120} />
          <CardInfo title='Total Worth' isTrendUp={true} amount={80} />
        </>
      )}
      {activeTab === 'incomes' && (
        <>
          <CardInfo title='total' isTrendUp={true} amount={200} />
          <CardInfo title='Income 1' isTrendUp={false} amount={120} />
          <CardInfo
            title='Income 2'
            isTrendUp={false}
            isTrendFlat={true}
            amount={0}
          />
        </>
      )}
      {activeTab === 'expenses' && (
        <>
          <CardInfo title='total' isTrendUp={true} amount={200} />
          <CardInfo title='expense 1' isTrendUp={false} amount={-120} />
          <CardInfo title='expense 2' isTrendUp={true} amount={80} />
        </>
      )}
      {activeTab === 'goals' && (
        <>
          <CardInfo title='goal 1' isTrendUp={true} amount={200} />
          <CardInfo title='goal 2' isTrendUp={false} amount={-120} />
          <CardInfo title='goal 3' isTrendUp={true} amount={80} />
        </>
      )}
      {activeTab === 'debts' && (
        <>
          <CardInfo title='Percentage of Debt' isTrendUp={true} amount={200} />
          <CardInfo title='Debt 1 ' isTrendUp={false} amount={-120} />
          <CardInfo title='Debt 2' isTrendUp={true} amount={80} />
        </>
      )}
      {activeTab === 'investments' && (
        <>
          <CardInfo title='Total' isTrendUp={true} amount={200} />
          <CardInfo title='Stocks' isTrendUp={false} amount={-120} />
          <CardInfo title='Crypto' isTrendUp={true} amount={80} />
        </>
      )}
      {activeTab === 'savings' && (
        <>
          <CardInfo title='Total' isTrendUp={true} amount={200} />
          <CardInfo title='saving 1' isTrendUp={false} amount={-120} />
          <CardInfo title='saving 2' isTrendUp={true} amount={80} />
        </>
      )}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  diffWithLastBalance: selectDiffWithLastBalance,
});
export default connect(mapStateToProps)(CardInfoBar);
