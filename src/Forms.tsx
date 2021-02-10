import './Forms.css';
import React from 'react';
import { UserData } from './IUserData';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { FormValidation } from './FormValidation';
// Bonus: use validation on inputs
// Use a @computed get to return a boolean, whether the form is valid (passes all validation checks)

@observer
class Forms extends React.Component<any, UserData> {
  user: UserData = observable({
    fullName: '',
    cardCVV: 0,
    cardNumber: 0,
    expDate: '06/20'
  });

  firstButtonClick = observable.box(false);
  private isFieldValid = (isValueValid: boolean) => {
    if (!this.firstButtonClick.get() || isValueValid) {
      return true;
    }
    return false;
  };

  @computed public get isNameValid(): boolean {
    return FormValidation.validName(this.user.fullName);
  }

  @computed public get isCvvValid(): boolean {
    return FormValidation.validCvv(this.user.cardCVV);
  }

  @computed public get isCardNumberValid(): boolean {
    return FormValidation.validCardNumber(this.user.cardNumber);
  }

  @computed public get isDateValid(): boolean {
    return FormValidation.validDate(this.user.expDate);
  }

  @computed public get isValid(): boolean {
    if (
      FormValidation.validate(
        this.user.fullName,
        this.user.cardCVV,
        this.user.cardNumber,
        this.user.expDate
      )
    ) {
      return true;
    }
    return false;
  }

  // Could also use computeds to validate input fields (outlined as red if invalid)
  // Use computed value to apply CSS class to input

  @action
  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.user.fullName = value;
  };

  @action
  handleCVVChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    this.user.cardCVV = value;
  };

  @action
  handleCardNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    this.user.cardNumber = value;
  };

  @action
  handleDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.user.expDate = value;
  };

  @action
  handleSubmit = () => {
    this.firstButtonClick.set(true);
    if (this.isValid) {
      this.props.handleFormSubmit(this.user);
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
                  this.isFieldValid(this.isNameValid) ? '' : 'invalid-field'
                }
                type="text"
                name="fullName"
                onChange={this.handleNameChange}
              />
            </label>
            <label>
              Card CVV
              <input
                id="card-cvv"
                className={
                  this.isFieldValid(this.isCvvValid) ? '' : 'invalid-field'
                }
                type="text"
                name="cardCVV"
                maxLength={3}
                onChange={this.handleCVVChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Credit Card Number
              <input
                id="card-number"
                className={
                  this.isFieldValid(this.isCardNumberValid)
                    ? ''
                    : 'invalid-field'
                }
                type="text"
                name="cardNumber"
                maxLength={16}
                onChange={this.handleCardNumberChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Card Expiration Date
              <input
                id="card-expiration"
                className={
                  this.isFieldValid(this.isDateValid) ? '' : 'invalid-field'
                }
                type="text"
                maxLength={5}
                value={this.user.expDate}
                name="expDate"
                onChange={this.handleDateChange}
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
