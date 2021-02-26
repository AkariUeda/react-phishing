import './Forms.css';
import React from 'react';
import { UserData } from './IUserData';
import { observer } from 'mobx-react'; //mobx-react-lite use 'observer' from there
import { useStore } from './store/viewContext';
import { runInAction } from 'mobx';

interface FormsProps {
  handleFormSubmit: (userData: UserData) => void;
}

export const Forms = observer(({ handleFormSubmit }: FormsProps) => {
  const store = useStore();
  const formMutator = store.actions.formMutator;
  const formSelector = store.viewSelectors.formSelector;

  const isFieldValid = (isValueValid: boolean) => {
    return !formSelector.wasButtonClicked || isValueValid;
  };

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    formMutator.setName(value);
  };

  const handleCVVChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    formMutator.setCvv(value);
  };

  const handleCardNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    formMutator.setCardNumber(value);
  };

  const handleDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    formMutator.setDate(value);
  };

  const handleSubmit = () => {
    formMutator.setButtonClicked();

    if (formSelector.isValid) {
      handleFormSubmit({
        id: String(Date.now()),
        fullName: formSelector.name,
        cardCVV: formSelector.cvv,
        cardNumber: formSelector.cardNumber,
        expDate: formSelector.expDate
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
                isFieldValid(formSelector.isNameValid) ? '' : 'invalid-field'
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
                isFieldValid(formSelector.isCvvValid) ? '' : 'invalid-field'
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
                isFieldValid(formSelector.isCardNumberValid)
                  ? ''
                  : 'invalid-field'
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
                isFieldValid(formSelector.isDateValid) ? '' : 'invalid-field'
              }
              type="text"
              maxLength={5}
              value={formSelector.expDate}
              name="expDate"
              onChange={handleDateChange}
            />
          </label>
        </div>
        <div className="form-row">
          <button
            role="submit-button"
            type="button"
            className="submitButton"
            onClick={handleSubmit}
          >
            Get free subscription!
          </button>
        </div>
      </form>
    </div>
  );
});
