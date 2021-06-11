/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import DashboardContent from './DashboardContent';

import { store } from '../../redux/store';
import { Provider } from 'react-redux';

afterEach(cleanup);

describe('<DashboardContent />', () => {
  it('Should have add a record as title', () => {
    const { getByTestId, debug } = render(
      <DashboardContent userEmail='test@gmail.com' activeTab='addData' />
    );
    const title = getByTestId('dashboardContentTitle');
    expect(title.textContent).toBe('Add a record');
  });
  it('Should have add a record as title', () => {
    const { queryByTestId, debug } = render(
      <Provider store={store}>
        <DashboardContent userEmail='test@gmail.com' activeTab='incomes' />
      </Provider>
    );
    const title = queryByTestId('dashboardContentTitle');
    expect(title).toBeNull();
  });
});
