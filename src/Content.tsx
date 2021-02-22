import React from 'react';
import './Content.css';
import { Forms } from './Forms';
import { Table } from './Table';
import { UserData } from './IUserData';
import { observer } from 'mobx-react';
import { TableStore } from './TableStore';
import { PopupStore } from './PopupStore';
import { Popup } from './Popup';

const userStore = new TableStore();
const popupStore = new PopupStore();

export const Content = observer(() => {
  const handleFormSubmit = (userData: UserData) => {
    userStore.addUser(userData);
    popupStore.createPopup(userData.cardCVV);
  };

  return (
    <div className="Content">
      <h1>Subscribe</h1>
      {popupStore.showPopUp && <Popup store={popupStore} />}
      <Forms handleFormSubmit={handleFormSubmit} />
      <h1>Users that have earned the free subscription</h1>
      <Table store={userStore} />
    </div>
  );
});
