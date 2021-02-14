import React from 'react';
import './Content.css';
import { Forms } from './Forms';
import { Table } from './Table';
import { UserData } from './IUserData';
import { observer } from 'mobx-react';
import { UserStore } from './UserStore';
import { FormStore } from './FormStore';

const userStore = new UserStore();
const formStore = new FormStore();

export const Content = observer(() => {
  const handleFormSubmit = (userData: UserData) => {
    userStore.addUser(userData);
  };

  return (
    <div className="Content">
      <h1>Subscribe</h1>
      <Forms formStore={formStore} handleFormSubmit={handleFormSubmit} />
      <h1>Users that have earned the free subscription</h1>
      <Table store={userStore} />
    </div>
  );
});
