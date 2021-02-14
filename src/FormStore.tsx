import { makeObservable, observable, action, computed } from 'mobx';
import { UserData } from './IUserData';
import { FormValidation } from './FormValidation';

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
      setDate: action,
      setName: action,
      setCvv: action,
      setCardNumber: action,
      setButtonClicked: action
    });

    this.user = {
      fullName: '',
      cardCVV: 0,
      cardNumber: 0,
      expDate: '06/20'
    };
  }

  get isNameValid(): boolean {
    return FormValidation.validName(this.user.fullName);
  }

  get isCvvValid(): boolean {
    return FormValidation.validCvv(this.user.cardCVV);
  }

  get isCardNumberValid(): boolean {
    return FormValidation.validCardNumber(this.user.cardNumber);
  }

  get isDateValid(): boolean {
    return FormValidation.validDate(this.user.expDate);
  }

  get isValid(): boolean {
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

  setDate = (value: string) => {
    this.user.expDate = value;
  };

  setName = (value: string) => {
    this.user.fullName = value;
  };

  setCvv = (value: number) => {
    this.user.cardCVV = value;
  };

  setCardNumber = (value: number) => {
    this.user.cardNumber = value;
  };

  wasButtonClicked = () => {
    return this.firstButtonClick;
  };

  setButtonClicked = () => {
    this.firstButtonClick = true;
  };
}
