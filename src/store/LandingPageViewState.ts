import { makeObservable, observable } from 'mobx';
import { FormState } from './state/FormState';

export class LandingPageViewState {
  @observable public formState: FormState = new FormState();
}
