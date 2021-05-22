import { observable } from 'mobx';
import { FormState } from './state/FormState';
import { PopUpState } from './state/PopUpState';

export class LandingPageViewState {
  @observable public formState: FormState = new FormState();
  @observable public popUpState: PopUpState = new PopUpState();
}
