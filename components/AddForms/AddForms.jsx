import React, { useState } from 'react';
import { store } from '../../redux/store';

// Components
import { Button01 } from '../buttons/Buttons';
import { InputWithLabel } from '../InputWithLabel/InputWithLabel';
import SelectWithLabel from '../selectWithLabel/selectWithLabel';

// Databases
import { handleAddFormSubmit } from '../../lib/utils';

export const BalanceAddForm = ({ userId }) => {
  const [form, setForm] = useState({
    date: '',
    record: '',
  });
  return (
    <>
      <InputWithLabel
        title='date'
        typeOfInput='date'
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <InputWithLabel
        title='record'
        typeOfInput='number'
        onChange={(e) => setForm({ ...form, record: e.target.value })}
      />
      <Button01
        title='Add record'
        backgroundCol='black'
        textColor='white'
        onClick={(e) => handleAddFormSubmit(e, 'balance', userId, form)}
      />
    </>
  );
};

export const IncomesAddForm = ({ userId }) => {
  return (
    <>
      <InputWithLabel title='date' typeOfInput='date' />
      <InputWithLabel title='type of income' typeOfInput='string' />

      <InputWithLabel title='amount' typeOfInput='number' />

      <SelectWithLabel
        title='Is recurrent ?'
        selectOptions={['no', 'yes']}
        onChange={(e) => console.log(e)}
      />

      <Button01
        title='Add record'
        backgroundCol='black'
        textColor='white'
        onClick={(e) => handleAddFormSubmit(e, userId)}
      />
    </>
  );
};

export const ExpensesAddForm = ({ userId }) => {
  return (
    <>
      <InputWithLabel title='date' typeOfInput='date' />
      <InputWithLabel title='type of expense' typeOfInput='string' />
      <InputWithLabel title='amount' typeOfInput='number' />

      <SelectWithLabel
        title='Is recurrent ?'
        selectOptions={['no', 'yes']}
        onChange={(e) => console.log(e)}
      />

      <Button01
        title='Add record'
        backgroundCol='black'
        textColor='white'
        onClick={(e) => handleAddFormSubmit(e, userId)}
      />
    </>
  );
};
export const DebtsAddForm = ({ userId }) => {
  return (
    <>
      <InputWithLabel title='date' typeOfInput='date' />
      <InputWithLabel title='type of debt' typeOfInput='string' />
      <InputWithLabel
        title='duration of the debt ( in month ) '
        typeOfInput='number'
      />
      <InputWithLabel title='amount already payed back' typeOfInput='number' />
      <InputWithLabel title='total amount to pay back' typeOfInput='number' />

      <Button01
        title='Add record'
        backgroundCol='black'
        textColor='white'
        onClick={(e) => handleAddFormSubmit(e, userId)}
      />
    </>
  );
};

export const SavingsAddForm = ({ userId }) => {
  const [form, setForm] = useState({
    date: '',
    typeOfMovement: 'Add',
    typeOfSaving: '',
    amount: 0,
    isRecurrent: false,
  });
  return (
    <>
      <InputWithLabel
        title='date'
        typeOfInput='date'
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <SelectWithLabel
        title='Type of movement'
        selectOptions={['Add', 'Remove']}
        onChange={(val) => setForm({ ...form, typeOfMovement: val })}
      />

      <InputWithLabel
        title='amount'
        typeOfInput='number'
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <SelectWithLabel
        title='Is recurrent ?'
        selectOptions={['no', 'yes']}
        onChange={(val) => setForm({ ...form, isRecurrent: val })}
      />
      <Button01
        title='Add record'
        backgroundCol='black'
        textColor='white'
        onClick={(e) => handleAddFormSubmit(e, 'savings', userId, form)}
      />
    </>
  );
};

export const InvestmentsAddForm = ({ userId }) => {
  return (
    <>
      <InputWithLabel title='date of purchase' typeOfInput='date' />
      <SelectWithLabel
        title='Type of Investment'
        selectOptions={['Stock', 'Crypto']}
        onChange={(e) => console.log(e)}
      />
      <InputWithLabel title='Ticker' typeOfInput='string' />
      <InputWithLabel title='Number of shares' typeOfInput='number' />

      <Button01
        title='Add record'
        backgroundCol='black'
        textColor='white'
        onClick={(e) => handleAddFormSubmit(e, userId)}
      />
    </>
  );
};
