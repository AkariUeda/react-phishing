import { makeObservable, observable, action } from 'mobx';
import { UserData } from './IUserData';

export class TableStore {
  userList: UserData[];

  constructor() {
    makeObservable(this, {
      userList: observable,
      addUser: action,
      removeUser: action
    });

    this.userList = [];
  }

  addUser(user: UserData) {
    this.userList.push(user);
  }

  removeUser(idToRemove: string) {
    this.userList = this.userList.filter((user: UserData) => {
      return user.id != idToRemove;
    });
  }
}
