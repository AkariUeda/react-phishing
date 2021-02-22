import './Table.css';
import React from 'react';
import { UserData } from './IUserData';
import { observer } from 'mobx-react';
import { TableStore } from './TableStore';

interface TableProps {
  store: TableStore;
}

export const Table = observer(({ store }: TableProps) => {
  const handleUserDelete = (e: React.MouseEvent<HTMLElement>) => {
    const cardToRemove = e.currentTarget.id;
    store.removeUser(cardToRemove);
  };

  const UserRow = (userData: UserData) => {
    return (
      <tr>
        <td>{userData.fullName}</td>
        <td>{userData.cardCVV}</td>
        <td>{userData.cardNumber}</td>
        <td>{userData.expDate}</td>
        <td>
          <button id={userData.id} onClick={handleUserDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const userRows = store.userList.map((userData: UserData) =>
    UserRow(userData)
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
});
