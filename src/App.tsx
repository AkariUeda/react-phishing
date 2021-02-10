import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import { observer } from 'mobx-react';

@observer
class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
