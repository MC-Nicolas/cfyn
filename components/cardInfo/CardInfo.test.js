/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  getNodeText,
} from '@testing-library/react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import CardInfo from './CardInfo';

afterEach(cleanup);

describe('<CardInfo />', () => {
  it('Positive amount', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CardInfo title='total' isTrendUp={true} amount={20} />
      </Provider>
    );
    const amountIndicator = getByTestId('cardInfoAmountIndicator');
    const cardTitle = getByTestId('CardInfoTitle');
    expect(cardTitle.textContent).toBe('Total');
    expect(amountIndicator.textContent).toBe('+20€');
    expect(amountIndicator).toHaveClass('colorGreen');
    expect(amountIndicator).toMatchSnapshot();
  });
  it('Negative Amount', () => {
    const { getByTestId, debug } = render(
      <Provider store={store}>
        <CardInfo title='income 1' isTrendUp={false} amount={-100} />
      </Provider>
    );
    const amountIndicator = getByTestId('cardInfoAmountIndicator');
    const cardTitle = getByTestId('CardInfoTitle');
    expect(cardTitle.textContent).toBe('Income 1');
    expect(amountIndicator.textContent).toBe('-100€');
    expect(amountIndicator).toHaveClass('colorRed');
    expect(amountIndicator).toMatchSnapshot();
  });

  it('Equal amount', () => {
    const { getByTestId, debug } = render(
      <Provider store={store}>
        <CardInfo
          title='balance'
          isTrendUp={false}
          isTrendFlat={true}
          amount={0}
        />
      </Provider>
    );
    const amountIndicator = getByTestId('cardInfoAmountIndicator');
    const cardTitle = getByTestId('CardInfoTitle');
    expect(cardTitle.textContent).toBe('Balance');
    expect(amountIndicator.textContent).toBe('0€');
    expect(amountIndicator).toHaveClass('colorOrange');
    expect(amountIndicator).toMatchSnapshot();
  });
});
