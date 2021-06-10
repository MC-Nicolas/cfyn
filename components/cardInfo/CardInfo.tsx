import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAreDataVisible } from '../../redux/data/data.selectors';

import styles from '../../styles/CardInfoBar.module.scss';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

interface Props {
  title: string;
  isTrendUp: boolean;
  amount: number;
  areDataVisible: boolean;
}

const CardInfo = ({ title, isTrendUp, amount, areDataVisible }: Props) => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.leftContainer}>
        <p className={styles.leftContainerTitle}>
          {title.replace(/^\w/, c => c.toUpperCase())}
        </p>
        <p
          className={`${styles.leftContainerAmount} ${
            areDataVisible ? (amount > 0 ? 'colorGreen' : 'colorRed') : ''
          }`}
        >
          {areDataVisible ? (amount > 0 ? `+${amount}` : `${amount}`) : '...'}€
        </p>
      </div>
      <div className={styles.rightContainer}>
        {areDataVisible && isTrendUp && (
          <TrendingUpIcon className={styles.rightContainerIconUp} />
        )}
        {areDataVisible && !isTrendUp && (
          <TrendingDownIcon className={styles.rightContainerIconDown} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  areDataVisible: selectAreDataVisible,
});

export default connect(mapStateToProps)(CardInfo);
