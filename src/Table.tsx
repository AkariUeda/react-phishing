import './Table.css';
import React from 'react';
import { UserData } from './IUserData';
import { observer } from 'mobx-react';

@observer
class Table extends React.Component<any> {
  UserRow = (userData: UserData) => {
    return (
      <tr>
        <td>{userData.fullName}</td>
        <td>{userData.cardCVV}</td>
        <td>{userData.cardNumber}</td>
        <td>{userData.expDate}</td>
      </tr>
    );
  };

  render() {
    const userRows = this.props.userList.map((userData: UserData) =>
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
          </tr>
          {userRows}
        </table>
      </div>
    );
  }
}

export default Table;
