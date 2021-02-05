import './Table.css';
import React from 'react';
import { UserData, UserList } from './IUserData';

function UserRow(props: UserData) {
  return (
    <tr>
      <td>{props.fullName}</td>
      <td>{props.cardCVV}</td>
      <td>{props.cardNumber}</td>
      <td>{props.expDate}</td>
    </tr>
  );
}

class Table extends React.Component<UserList, any> {
  constructor(props: UserList) {
    super(props);
  }

  render() {
    const userRows = this.props.userList.map((userData) => UserRow(userData));
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
