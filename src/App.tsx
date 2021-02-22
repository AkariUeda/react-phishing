import React from 'react';
import './App.css';
import { Header } from './Header';
import { Content } from './Content';
import { observer } from 'mobx-react';

export const App = observer(() => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
});
