import React from 'react';
import {
  getAllByText,
  getByText,
  render,
  within,
  screen,
  waitFor,
  getByTestId,
  cleanup,
  getByRole,
  queryByRole
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { UserData } from './IUserData';

const setupFormFill = (formData: UserData) => {
  const utils = render(<App />);

  userEvent.clear(utils.getByLabelText('Card Expiration Date'));

  userEvent.type(utils.getByLabelText('Full Name'), formData.fullName);
  userEvent.type(utils.getByLabelText('Card CVV'), String(formData.cardCVV));
  userEvent.type(
    utils.getByLabelText('Credit Card Number'),
    String(formData.cardNumber)
  );
  userEvent.type(
    utils.getByLabelText('Card Expiration Date'),
    formData.expDate
  );
  userEvent.click(utils.getByRole('submit-button'));
  return { ...utils };
};

test('The user fills all fields correctly with a CVV matching a Pokemon ID', async () => {
  const userInfo = {
    id: '10',
    fullName: 'Shakira',
    cardCVV: 100,
    cardNumber: 1234567891234567,
    expDate: '05/23'
  };

  const { getByRole } = setupFormFill(userInfo);

  await waitFor(() => {
    const table = getByRole('table');
    expect(table).toHaveTextContent(userInfo.fullName);
    expect(table).toHaveTextContent(String(userInfo.cardCVV));
    expect(table).toHaveTextContent(String(userInfo.cardNumber));
    expect(table).toHaveTextContent(userInfo.expDate);
    expect(getByRole('popup')).toHaveTextContent('voltorb');
  });
});

test('The user fills all fields correctly, but WITHOUT matching a Pokemon ID', async () => {
  const userInfo = {
    id: '10',
    fullName: 'Beyonce',
    cardCVV: 999,
    cardNumber: 1234567891234567,
    expDate: '05/23'
  };

  const { getByRole, queryByRole } = setupFormFill(userInfo);

  await waitFor(() => {
    const table = getByRole('table');

    expect(table).toHaveTextContent(userInfo.fullName);
    expect(table).toHaveTextContent(String(userInfo.cardCVV));
    expect(table).toHaveTextContent(String(userInfo.cardNumber));
    expect(table).toHaveTextContent(userInfo.expDate);
    expect(queryByRole('popup')).toBeNull();
  });
});
