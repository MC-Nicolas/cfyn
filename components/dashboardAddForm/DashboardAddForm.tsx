import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from '../../styles/DashboardAddForm.module.scss';
import { Select } from 'evergreen-ui';
interface Props {}

const DashboardAddForm = (props: Props) => {
  return (
    <div className={styles.dashboardAddFormContainer}>
      <Select width={240} height={80}>
        <option value='foo' selected>
          Foo
        </option>
        <option value='bar'>Bar</option>
      </Select>
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
