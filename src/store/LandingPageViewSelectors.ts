import { makeObservable, observable } from 'mobx';
import { StoreExtension } from '../GenericStore/StoreExtension';
import { LandingPageViewState } from './LandingPageViewState';
import { FormSelector } from './selector/FormSelector';

export class LandingPageViewSelectors extends StoreExtension<LandingPageViewState> {
  @observable public formSelector: FormSelector;

  constructor(state: LandingPageViewState) {
    super(state);
    this.formSelector = new FormSelector(state.formState);
  }
}
