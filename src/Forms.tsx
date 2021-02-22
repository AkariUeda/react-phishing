import './Forms.css';
import React from 'react';
import { UserData } from './IUserData';
import { observer } from 'mobx-react';
import { FormStore } from './FormStore';

interface FormsProps {
  handleFormSubmit: (userData: UserData) => void;
}
const formStore = new FormStore();

export const Forms = observer(({ handleFormSubmit }: FormsProps) => {
  const isFieldValid = (isValueValid: boolean) => {
    return !formStore.wasButtonClicked() || isValueValid;
  };

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    formStore.setName(value);
  };

  const handleCVVChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    formStore.setCvv(value);
  };

  const handleCardNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    formStore.setCardNumber(value);
  };

  const handleDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    formStore.setDate(value);
  };

  const handleSubmit = () => {
    formStore.setButtonClicked();

    if (formStore.isValid) {
      handleFormSubmit({
        id: String(Date.now()),
        fullName: formStore.user.fullName,
        cardCVV: formStore.user.cardCVV,
        cardNumber: formStore.user.cardNumber,
        expDate: formStore.user.expDate
      });
    }
  };

  return (
    <div className="Forms">
      <form action="" method="post" className="subscription-form">
        <div className="form-row">
          <label>
            Full Name
            <input
              id="full-name"
              className={
                isFieldValid(formStore.isNameValid) ? '' : 'invalid-field'
              }
              type="text"
              name="fullName"
              onChange={handleNameChange}
            />
          </label>
          <label>
            Card CVV
            <input
              id="card-cvv"
              className={
                isFieldValid(formStore.isCvvValid) ? '' : 'invalid-field'
              }
              type="text"
              name="cardCVV"
              maxLength={3}
              onChange={handleCVVChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Credit Card Number
            <input
              id="card-number"
              className={
                isFieldValid(formStore.isCardNumberValid) ? '' : 'invalid-field'
              }
              type="text"
              name="cardNumber"
              maxLength={16}
              onChange={handleCardNumberChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Card Expiration Date
            <input
              id="card-expiration"
              className={
                isFieldValid(formStore.isDateValid) ? '' : 'invalid-field'
              }
              type="text"
              maxLength={5}
              value={formStore.user.expDate}
              name="expDate"
              onChange={handleDateChange}
            />
          </label>
        </div>
        <div className="form-row">
          <button type="button" className="submitButton" onClick={handleSubmit}>
            Get free subscription!
          </button>
        </div>
      </form>
    </div>
  );
});
