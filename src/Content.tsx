import React from 'react';
import './Content.css';
import { Forms } from './Forms';
import { Table } from './Table';
import { UserData } from './IUserData';
import { observer } from 'mobx-react';
import { TableStore } from './TableStore';
import { Popup } from './Popup';
import { useStore } from './store/viewContext';

const userStore = new TableStore();

export const Content = observer(() => {
  const store = useStore();
  const popUpSelector = store.viewSelectors.popUpSelector;
  const popUpMutator = store.actions.popUpMutator;

  const handleFormSubmit = (userData: UserData) => {
    userStore.addUser(userData);
    popUpMutator.createPopup(userData.cardCVV);
  };

  return (
    <div className="Content">
      <h1>Subscribe</h1>
      {popUpSelector.showPopUp && <Popup />}
      <Forms handleFormSubmit={handleFormSubmit} />
      <h1>Users that have earned the free subscription</h1>
      <Table store={userStore} />
    </div>
  );
});
