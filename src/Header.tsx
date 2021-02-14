import logo from './logo.png';
import './Header.css';
import { observer } from 'mobx-react';

export const Header = observer(() => {
  return (
    <div className="Header">
      <img className="logo" src={logo} />
      <h1>Get a Netflix subscription for free!</h1>
      <p>
        Fill this form and get a Netflix subscription for an entire year!!!!
      </p>
    </div>
  );
});
