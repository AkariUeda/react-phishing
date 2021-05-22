import { makeObservable, observable } from 'mobx';

export class PopUpState {
  @observable public showPopUp: boolean = false;
  @observable public popUpMessage: string = '';
  @observable public imgUrl: string = '';

  public constructor() {
    makeObservable(this);
  }
}
