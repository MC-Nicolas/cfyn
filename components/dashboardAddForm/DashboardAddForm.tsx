import React, { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styles from '../../styles/DashboardAddForm.module.scss';
import { Select } from 'evergreen-ui';

// Components
import { BalanceAddForm } from '../AddForms/AddForms';

interface Props {}

const DashboardAddForm = (props: Props) => {
  const [typeOfForm, setTypeOfForm] = useState<String>('balance');
  return (
    <div className={styles.dashboardAddFormContainer}>
      <div className={styles.dashboardAddFormSelectContainer}>
        <div className='col-container'>
          <label>Type of record</label>
          <div className='width100'>
            <Select
              width={260}
              height={40}
              defaultValue='balance'
              onChange={(e) => setTypeOfForm(e.target.value)}
            >
              <option value='balance'>Balance</option>
              <option value='incomes'>Incomes</option>
              <option value='expenses'>Expenses</option>
              <option value='debts'>Debts</option>
              <option value='savings'>Savings</option>
              <option value='investments'>Investments</option>
            </Select>
          </div>
        </div>
      </div>
      <div className={styles.dashboardAddFormFormContainer}>
        {typeOfForm === 'balance' && <BalanceAddForm />}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  //
});

const mapDispatchToProps = {
  //
};

export default DashboardAddForm;
