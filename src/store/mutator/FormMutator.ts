import { action, makeObservable } from 'mobx';
import { StoreExtension } from '../../GenericStore/StoreExtension';
import { FormState } from '../state/FormState';

export class FormMutator extends StoreExtension<FormState> {
  @action
  public setDate = (value: string) => {
    this.state.formUserData.expDate = value;
  };

  @action
  public setName = (value: string) => {
    this.state.formUserData.fullName = value;
    console.log(this.state.formUserData.fullName);
  };

  @action
  public setCvv = (value: number) => {
    this.state.formUserData.cardCVV = value;
  };

  @action
  public setCardNumber = (value: number) => {
    this.state.formUserData.cardNumber = value;
  };

  @action
  public setButtonClicked = () => {
    this.state.firstButtonClick = true;
  };
}