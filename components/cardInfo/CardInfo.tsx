import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAreDataVisible } from '../../redux/data/data.selectors';

import styles from '../../styles/CardInfoBar.module.scss';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

interface Props {
  title: string;
  isTrendUp: boolean;
  isTrendFlat?: boolean;
  amount: number;
  areDataVisible: boolean;
}

const CardInfo = ({
  title,
  isTrendUp,
  amount,
  areDataVisible,
  isTrendFlat = false,
}: Props) => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.leftContainer}>
        <p data-testid='CardInfoTitle' className={styles.leftContainerTitle}>
          {title.replace(/^\w/, (c) => c.toUpperCase())}
        </p>
        <p
          data-testid='cardInfoAmountIndicator'
          className={`${styles.leftContainerAmount} ${
            areDataVisible
              ? isTrendFlat
                ? 'colorOrange'
                : isTrendUp
                ? 'colorGreen'
                : 'colorRed'
              : ''
          }`}
        >
          {areDataVisible ? (isTrendUp ? `+${amount}` : `-${amount}`) : '...'}€
        </p>
      </div>
      <div className={styles.rightContainer}>
        {areDataVisible && isTrendUp && !isTrendFlat && (
          <TrendingUpIcon className={styles.rightContainerIconUp} />
        )}
        {areDataVisible && !isTrendUp && !isTrendFlat && (
          <TrendingDownIcon className={styles.rightContainerIconDown} />
        )}
        {areDataVisible && isTrendFlat && (
          <TrendingFlatIcon className={styles.rightContainerIconFlat} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  areDataVisible: selectAreDataVisible,
});

export default connect(mapStateToProps)(CardInfo);
