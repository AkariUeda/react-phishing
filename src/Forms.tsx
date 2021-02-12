import './Forms.css';
import React from 'react';
import { UserData } from './IUserData';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { FormStore } from './FormStore';

@observer
class Forms extends React.Component<any, UserData> {
  formStore = new FormStore();

  private isFieldValid = (isValueValid: boolean) => {
    return !this.formStore.wasButtonClicked() || isValueValid;
  };

  handleSubmit = () => {
    this.formStore.setButtonClicked();
    if (this.formStore.isValid) {
      this.props.handleFormSubmit({
        fullName: this.formStore.user.fullName,
        cardCVV: this.formStore.user.cardCVV,
        cardNumber: this.formStore.user.cardNumber,
        expDate: this.formStore.user.expDate
      });
    }
  };

  render() {
    return (
      <div className="Forms">
        <form action="" method="post" className="subscription-form">
          <div className="form-row">
            <label>
              Full Name
              <input
                id="full-name"
                className={
                  this.isFieldValid(this.formStore.isNameValid)
                    ? ''
                    : 'invalid-field'
                }
                type="text"
                name="fullName"
                onChange={this.formStore.handleNameChange}
              />
            </label>
            <label>
              Card CVV
              <input
                id="card-cvv"
                className={
                  this.isFieldValid(this.formStore.isCvvValid)
                    ? ''
                    : 'invalid-field'
                }
                type="text"
                name="cardCVV"
                maxLength={3}
                onChange={this.formStore.handleCVVChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Credit Card Number
              <input
                id="card-number"
                className={
                  this.isFieldValid(this.formStore.isCardNumberValid)
                    ? ''
                    : 'invalid-field'
                }
                type="text"
                name="cardNumber"
                maxLength={16}
                onChange={this.formStore.handleCardNumberChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Card Expiration Date
              <input
                id="card-expiration"
                className={
                  this.isFieldValid(this.formStore.isDateValid)
                    ? ''
                    : 'invalid-field'
                }
                type="text"
                maxLength={5}
                value={this.formStore.user.expDate}
                name="expDate"
                onChange={this.formStore.handleDateChange}
              />
            </label>
          </div>
          <div className="form-row">
            <button
              type="button"
              className="submitButton"
              onClick={this.handleSubmit}
            >
              Get free subscription!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Forms;
