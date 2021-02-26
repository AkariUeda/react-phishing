import { makeObservable, observable } from 'mobx';
import { StoreExtension } from '../GenericStore/StoreExtension';
import { LandingPageViewState } from './LandingPageViewState';
import { FormMutator } from './mutator/FormMutator';

export class LandingPageViewActions extends StoreExtension<LandingPageViewState> {
  @observable public formMutator: FormMutator;

  constructor(state: LandingPageViewState) {
    super(state);
    this.formMutator = new FormMutator(state.formState);
  }
}
