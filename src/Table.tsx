import './Table.css';
import React from 'react';
import { UserData } from './IUserData';
import { observer } from 'mobx-react';
import { action } from 'mobx';

@observer
class Table extends React.Component<any> {
  @action
  handleUserDelete = (e: React.MouseEvent<HTMLElement>) => {
    const cardToRemove = e.currentTarget.id;
    this.props.store.removeUser(cardToRemove);
  };

  UserRow = (userData: UserData) => {
    return (
      <tr>
        <td>{userData.fullName}</td>
        <td>{userData.cardCVV}</td>
        <td>{userData.cardNumber}</td>
        <td>{userData.expDate}</td>
        <td>
          <button
            id={String(userData.cardNumber)}
            onClick={this.handleUserDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  render() {
    const userRows = this.props.store.userList.map((userData: UserData) =>
      this.UserRow(userData)
    );

    return (
      <div className="Table">
        <table className="credit-card-table">
          <tr>
            <th>Full name</th>
            <th>Card CVV</th>
            <th>Card Number</th>
            <th>Expiration Date</th>
            <th>Actions</th>
          </tr>
          {userRows}
        </table>
      </div>
    );
  }
}

export default Table;
