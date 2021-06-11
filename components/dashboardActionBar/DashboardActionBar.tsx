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
import CancelIcon from '@material-ui/icons/Cancel';

interface Props {
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
  areDataVisible: boolean;
  setDataAreVisible: (arg: boolean) => void;
  handleClick: (activeTab: string) => void;
}

const DashboardActionBar = ({
  activeTab,
  areDataVisible,
  setDataAreVisible,
  handleClick,
}: Props) => {
  return (
    <div className={styles.dashboardActionsBar}>
      <h3 data-testid='dashboardActionBarTitle'>
        {activeTab === 'addData'
          ? 'Add a record'
          : activeTab.replace(/^\w/, (c) => c.toUpperCase())}
      </h3>
      <div className={styles.dashboardActionContainer}>
        {activeTab !== 'addData' ? (
          <>
            <button
              className='icon-button'
              onClick={() => handleClick(activeTab)}
            >
              <AddBoxIcon fontSize='large' />
            </button>
            <button
              className='icon-button'
              onClick={() => setDataAreVisible(!areDataVisible)}
            >
              {!areDataVisible ? (
                <VisibilityIcon fontSize='large' />
              ) : (
                <VisibilityOffIcon fontSize='large' />
              )}
            </button>
          </>
        ) : (
          <button
            className='icon-button'
            onClick={() => handleClick(activeTab)}
          >
            <CancelIcon fontSize='large' />
          </button>
        )}
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
