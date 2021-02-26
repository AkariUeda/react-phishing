import { computed, makeObservable } from 'mobx';
import { FormStore } from '../../FormStore';
import { FormValidation } from '../../FormValidation';
import { StoreExtension } from '../../GenericStore/StoreExtension';
import { FormState } from '../state/FormState';

export class FormSelector extends StoreExtension<FormState> {
  @computed
  public get isNameValid(): boolean {
    console.log(this.state.formUserData.fullName);
    return FormValidation.validName(this.state.formUserData.fullName);
  }

  @computed
  public get isCvvValid(): boolean {
    return FormValidation.validCvv(this.state.formUserData.cardCVV);
  }

  @computed
  public get isCardNumberValid(): boolean {
    return FormValidation.validCardNumber(this.state.formUserData.cardNumber);
  }

  @computed
  public get isDateValid(): boolean {
    return FormValidation.validDate(this.state.formUserData.expDate);
  }

  @computed
  public get isValid(): boolean {
    if (
      FormValidation.validate(
        this.state.formUserData.fullName,
        this.state.formUserData.cardCVV,
        this.state.formUserData.cardNumber,
        this.state.formUserData.expDate
      )
    ) {
      return true;
    }
    return false;
  }

  @computed
  public get wasButtonClicked(): boolean {
    return this.state.firstButtonClick;
  }

  @computed
  public get name(): string {
    return this.state.formUserData.fullName;
  }

  @computed
  public get cvv(): number {
    return this.state.formUserData.cardCVV;
  }

  @computed
  public get cardNumber(): number {
    return this.state.formUserData.cardNumber;
  }

  @computed
  public get expDate(): string {
    return this.state.formUserData.expDate;
  }
}
