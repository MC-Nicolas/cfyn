import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from '../../styles/RecentActivities.module.scss';
import Image from 'next/image';
import { selectAreDataVisible } from '../../redux/data/data.selectors';

type Props = {
  typeOfMovement: 'income' | 'expense' | 'investment';
  amount: number;
  reasonOfMovement: string;
  date: string;
  areDataVisible: boolean;
};

const RecentActivity = ({
  typeOfMovement,
  amount,
  reasonOfMovement,
  date,
  areDataVisible,
}: Props) => {
  if (areDataVisible) {
    return (
      <div className={styles.recentActivity}>
        {typeOfMovement === 'income' && (
          <Image
            src='/entry.png'
            width={40}
            height={40}
            className={styles.recentActivityIcon}
          />
        )}
        {typeOfMovement === 'expense' && (
          <Image
            src='/expense.png'
            width={40}
            height={40}
            className={styles.recentActivityIcon}
          />
        )}
        {typeOfMovement === 'investment' && amount > 0 && (
          <Image
            src='/entry.png'
            width={40}
            height={40}
            className={styles.recentActivityIcon}
          />
        )}
        {typeOfMovement === 'investment' && amount < 0 && (
          <Image
            src='/expense.png'
            width={40}
            height={40}
            className={styles.recentActivityIcon}
          />
        )}

        <p> {typeOfMovement.replace(/^\w/, (c) => c.toUpperCase())}</p>
        <p>{amount > 0 ? `+${amount}` : amount}€</p>
        <p>{reasonOfMovement.replace(/^\w/, (c) => c.toUpperCase())}</p>
        <p>{date}</p>
      </div>
    );
  } else return null;
};

const mapStateToProps = createStructuredSelector({
  areDataVisible: selectAreDataVisible,
});

export default connect(mapStateToProps)(RecentActivity);
