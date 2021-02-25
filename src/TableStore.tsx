import { makeObservable, observable, action, computed } from 'mobx';
import { UserData } from './IUserData';

export class TableStore {
  registeredUsers: UserData[];

  constructor() {
    makeObservable(this, {
      registeredUsers: observable,
      addUser: action,
      removeUser: action,
      users: computed
    });

    this.registeredUsers = [];
  }

  addUser(user: UserData) {
    this.registeredUsers.push(user);
  }

  removeUser(idToRemove: string) {
    this.registeredUsers = this.registeredUsers.filter((user: UserData) => {
      return user.id != idToRemove;
    });
  }

  get users() {
    return this.registeredUsers;
  }
}
