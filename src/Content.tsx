import React from 'react';
import './Content.css';
import Forms from './Forms';
import Table from './Table';
import { UserData } from './IUserData';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { UserStore } from './UserStore';

@observer
class Content extends React.Component<any, UserData> {
  userStore = new UserStore();

  @action
  handleFormSubmit = (userData: UserData) => {
    this.userStore.addUser(userData);
  };

  render() {
    return (
      <div className="Content">
        <h1>Subscribe</h1>
        <Forms
          store={this.userStore}
          handleFormSubmit={this.handleFormSubmit}
        />
        <h1>Users that have earned the free subscription</h1>
        <Table store={this.userStore} />
      </div>
    );
  }
}

export default Content;
