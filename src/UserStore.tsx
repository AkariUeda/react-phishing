import { makeObservable, observable, action } from 'mobx';
import { UserData } from './IUserData';

export class UserStore {
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
    // Intermediate states will not become visible to observers.
    this.userList.push(user);
  }

  removeUser(cardToRemove: number) {
    this.userList = this.userList.filter((user: UserData) => {
      return user.cardNumber != cardToRemove;
    });
  }
}
