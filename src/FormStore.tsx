import { makeObservable, observable, action, computed } from 'mobx';
import { UserData } from './IUserData';
import { FormValidation } from './FormValidation';

export class FormStore {
  formUserData: UserData;
  firstButtonClick = false;
  constructor() {
    makeObservable(this, {
      formUserData: observable,
      firstButtonClick: observable,
      isNameValid: computed,
      isCvvValid: computed,
      isCardNumberValid: computed,
      isDateValid: computed,
      isValid: computed,
      name: computed,
      cardNumber: computed,
      cvv: computed,
      expDate: computed,
      setDate: action,
      setName: action,
      setCvv: action,
      setCardNumber: action,
      setButtonClicked: action
    });

    this.formUserData = {
      id: '',
      fullName: '',
      cardCVV: 0,
      cardNumber: 0,
      expDate: '06/20'
    };
  }

  get isNameValid(): boolean {
    return FormValidation.validName(this.formUserData.fullName);
  }

  get isCvvValid(): boolean {
    return FormValidation.validCvv(this.formUserData.cardCVV);
  }

  get isCardNumberValid(): boolean {
    return FormValidation.validCardNumber(this.formUserData.cardNumber);
  }

  get isDateValid(): boolean {
    return FormValidation.validDate(this.formUserData.expDate);
  }

  get isValid(): boolean {
    if (
      FormValidation.validate(
        this.formUserData.fullName,
        this.formUserData.cardCVV,
        this.formUserData.cardNumber,
        this.formUserData.expDate
      )
    ) {
      return true;
    }
    return false;
  }

  setDate = (value: string) => {
    this.formUserData.expDate = value;
  };

  setName = (value: string) => {
    this.formUserData.fullName = value;
  };

  setCvv = (value: number) => {
    this.formUserData.cardCVV = value;
  };

  setCardNumber = (value: number) => {
    this.formUserData.cardNumber = value;
  };

  
  setButtonClicked = () => {
    this.firstButtonClick = true;
  };
  wasButtonClicked = () => {
    return this.firstButtonClick;
  };

  get expDate(): string {
    return this.formUserData.expDate;
  }

  get name(): string {
    return this.formUserData.fullName;
  }
  get cvv(): number {
    return this.formUserData.cardCVV;
  }
  get cardNumber(): number {
    return this.formUserData.cardNumber;
  }
}
