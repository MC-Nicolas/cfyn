import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from '../../styles/DashboardAddForm.module.scss';
import { Select } from 'evergreen-ui';

import { selectUserId } from '../../redux/user/user.selectors';

// Components
import {
  BalanceAddForm,
  IncomesAddForm,
  ExpensesAddForm,
  DebtsAddForm,
  SavingsAddForm,
  InvestmentsAddForm,
} from '../AddForms/AddForms';
import SelectWithLabel from '../selectWithLabel/selectWithLabel';

type Props = {
  userId: string;
};

const DashboardAddForm = ({ userId }: Props) => {
  const [typeOfForm, setTypeOfForm] = useState<String>('balance');
  return (
    <div className={styles.dashboardAddFormContainer}>
      <div className={styles.dashboardAddFormSelectContainer}>
        <SelectWithLabel
          title='Type of record'
          onChange={setTypeOfForm}
          selectOptions={[
            'balance',
            'incomes',
            'expenses',
            'debts',
            'savings',
            'investments',
          ]}
        />
      </div>
      <div className={styles.dashboardAddFormFormContainer}>
        {typeOfForm === 'balance' && <BalanceAddForm userId={userId} />}
        {typeOfForm === 'incomes' && <IncomesAddForm userId={userId} />}
        {typeOfForm === 'expenses' && <ExpensesAddForm userId={userId} />}
        {typeOfForm === 'debts' && <DebtsAddForm userId={userId} />}
        {typeOfForm === 'savings' && <SavingsAddForm userId={userId} />}
        {typeOfForm === 'investments' && <InvestmentsAddForm userId={userId} />}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  userId: selectUserId,
});

const mapDispatchToProps = {
  //
};

export default connect(mapStateToProps)(DashboardAddForm);
