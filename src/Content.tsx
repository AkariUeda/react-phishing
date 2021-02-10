import React from 'react';
import './Content.css';
import Forms from './Forms';
import Table from './Table';
import { UserData } from './IUserData';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
class Content extends React.Component<any, UserData> {
  public userList: UserData[] = observable([]);

  @action
  handleFormSubmit = (userData: UserData) => {
    this.userList.push(userData);
  };

  render() {
    return (
      <div className="Content">
        <h1>Subscribe</h1>
        <Forms handleFormSubmit={this.handleFormSubmit} />
        <h1>Users that have earned the free subscription</h1>
        <Table userList={this.userList} />
      </div>
    );
  }
}

export default Content;
