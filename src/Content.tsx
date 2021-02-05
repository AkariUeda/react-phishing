import React from 'react';
import './Content.css';
import Forms from './Forms';
import Table from './Table';
import { UserData, UserList } from './IUserData';

class Content extends React.Component<any, UserList> {
  constructor(props: any) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = { userList: [] };
  }

  handleFormSubmit(userData: UserData) {
    this.state.userList.push(userData);
    this.setState((state) => ({
      userList: state.userList
    }));
    return 0;
  }

  render() {
    return (
      <div className="Content">
        <h1>Subscribe</h1>
        <Forms handleFormSubmit={this.handleFormSubmit} />
        <h1>Users that have earned the free subscription</h1>
        <Table userList={this.state.userList} />
      </div>
    );
  }
}

export default Content;
