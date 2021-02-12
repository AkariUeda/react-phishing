import { makeObservable, observable, action, computed } from 'mobx';
import { UserData } from './IUserData';
import { FormValidation } from './FormValidation';
import { observer } from 'mobx-react';

export class FormStore {
  user: UserData;
  firstButtonClick = false;
  constructor() {
    makeObservable(this, {
      user: observable,
      firstButtonClick: observable,
      isNameValid: computed,
      isCvvValid: computed,
      isCardNumberValid: computed,
      isDateValid: computed,
      isValid: computed,
      handleNameChange: action,
      handleCVVChange: action,
      handleCardNumberChange: action,
      handleDateChange: action,
      setButtonClicked: action
    });

    this.user = {
      fullName: '',
      cardCVV: 0,
      cardNumber: 0,
      expDate: '06/20'
    };
  }

  public get isNameValid(): boolean {
    return FormValidation.validName(this.user.fullName);
  }

  public get isCvvValid(): boolean {
    return FormValidation.validCvv(this.user.cardCVV);
  }

  public get isCardNumberValid(): boolean {
    return FormValidation.validCardNumber(this.user.cardNumber);
  }

  public get isDateValid(): boolean {
    return FormValidation.validDate(this.user.expDate);
  }

  public get isValid(): boolean {
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

  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.user.fullName = value;
  };

  handleCVVChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    this.user.cardCVV = value;
  };

  handleCardNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    this.user.cardNumber = value;
  };

  handleDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.user.expDate = value;
  };

  wasButtonClicked = () => {
    return this.firstButtonClick;
  };

  setButtonClicked = () => {
    this.firstButtonClick = true;
  };
}
