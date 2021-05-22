import { computed, makeObservable } from 'mobx';
import { StoreExtension } from '../../GenericStore/StoreExtension';
import { PopUpState } from '../state/PopUpState';

export class PopUpSelector extends StoreExtension<PopUpState> {
  @computed
  public get imgUrl(): string {
    return this.state.imgUrl;
  }

  @computed
  public get showPopUp(): boolean {
    return this.state.showPopUp;
  }

  @computed
  public get popUpMessage(): string {
    return this.state.popUpMessage;
  }

  public constructor(state: PopUpState) {
    super(state);
    makeObservable(this);
  }
}
