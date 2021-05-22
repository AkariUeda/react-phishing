import { observable } from 'mobx';
import { StoreExtension } from '../GenericStore/StoreExtension';
import { LandingPageViewState } from './LandingPageViewState';
import { FormSelector } from './selector/FormSelector';
import { PopUpSelector } from './selector/PopUpSelector';

export class LandingPageViewSelectors extends StoreExtension<LandingPageViewState> {
  @observable public formSelector: FormSelector;
  @observable public popUpSelector: PopUpSelector;

  constructor(state: LandingPageViewState) {
    super(state);
    this.formSelector = new FormSelector(state.formState);
    this.popUpSelector = new PopUpSelector(state.popUpState);
  }
}
