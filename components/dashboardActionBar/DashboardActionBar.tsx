import React, { useState, useEffect } from 'react';
import styles from '../../styles/DashboardContent.module.scss';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAreDataVisible } from '../../redux/data/data.selectors';
import { setAreDataVisible } from '../../redux/data/data.actions';

// Components
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddBoxIcon from '@material-ui/icons/AddBox';

interface Props {
  activeTab:
    | 'balance'
    | 'incomes'
    | 'expenses'
    | 'goals'
    | 'debts'
    | 'investments'
    | 'savings'
    | 'settings';
  areDataVisible: boolean;
  setDataAreVisible: (arg: boolean) => void;
}

const DashboardActionBar = ({
  activeTab,
  areDataVisible,
  setDataAreVisible,
}: Props) => {
  return (
    <div className={styles.dashboardActionsBar}>
      <h3>{activeTab.replace(/^\w/, (c) => c.toUpperCase())}</h3>
      <div className={styles.dashboardActionContainer}>
        <button className='icon-button'>
          <AddBoxIcon />
        </button>
        <button
          className='icon-button'
          onClick={() => setDataAreVisible(!areDataVisible)}
        >
          {!areDataVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  areDataVisible: selectAreDataVisible,
});

const mapDispatchToProps = (dispatch: any) => ({
  setDataAreVisible: (areDataVisible: boolean) =>
    dispatch(setAreDataVisible(areDataVisible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardActionBar);
