import React from 'react';
import './App.css';
import { Header } from './Header';
import { Content } from './Content';
import { observer } from 'mobx-react';
import { StoreProvider } from './store/viewContext';

export const App = observer(() => {
  return (
    <div className="App">
      <StoreProvider>
        <Header />
        <Content />
      </StoreProvider>
    </div>
  );
});
