import React, { useState, useEffect } from 'react';
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
    | 'settings';
};

const CardInfoBar = ({ userEmail, activeTab }: Props) => {
  return (
    <div className={styles.cardInfoBarContainer}>
      {activeTab === 'balance' && (
        <>
          <CardInfo title='balance' isTrendUp={true} amount={200} />
          <CardInfo title='savings' isTrendUp={false} amount={-120} />
          <CardInfo title='Total Worth' isTrendUp={true} amount={80} />
        </>
      )}
      {activeTab === 'incomes' && (
        <>
          <CardInfo title='total' isTrendUp={true} amount={200} />
          <CardInfo title='Income 1' isTrendUp={false} amount={-120} />
          <CardInfo title='Income 2' isTrendUp={true} amount={80} />
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

export default CardInfoBar;
