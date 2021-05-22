import { observable } from 'mobx';
import { StoreExtension } from '../GenericStore/StoreExtension';
import { LandingPageViewState } from './LandingPageViewState';
import { FormMutator } from './mutator/FormMutator';
import { PopUpMutator } from './mutator/PopUpMutator';

export class LandingPageViewActions extends StoreExtension<LandingPageViewState> {
  @observable public formMutator: FormMutator;
  @observable public popUpMutator: PopUpMutator;

  constructor(state: LandingPageViewState) {
    super(state);
    this.formMutator = new FormMutator(state.formState);
    this.popUpMutator = new PopUpMutator(state.popUpState);
  }
}
