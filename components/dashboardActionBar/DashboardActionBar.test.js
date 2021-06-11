/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import DashboardActionBar from './DashboardActionBar';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('<DashboardActionBar />', () => {
  // Check the title is being proccessed and used from props
  it('Should get the title as props', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DashboardActionBar activeTab='balance' />
      </Provider>
    );
    const title = getByTestId('dashboardActionBarTitle');
    expect(title.textContent).toBe('Balance');
  });
});
