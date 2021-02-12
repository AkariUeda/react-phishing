import React from 'react';
import './App.css';
import { Header } from './Header';
import { Content } from './Content';
import { observer } from 'mobx-react';
import { PopupStore } from './PopupStore';

export const App = observer(() => {
  const popupStore = new PopupStore();

  return (
    <div className="App">
      <Header />
      <Content popupStore={popupStore} />
    </div>
  );
});
