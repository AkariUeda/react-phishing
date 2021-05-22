import { makeObservable, observable } from 'mobx';
import { UserData } from '../../IUserData';

export class TableState {
  @observable public registeredUsers: UserData[] = [];

  public constructor() {
    makeObservable(this);
  }
}
