import './Popup.css';
import { observer } from 'mobx-react';
import { PopupStore } from './PopupStore';

interface PopupProps {
  store: PopupStore;
}

export const Popup = observer(({ store }: PopupProps) => {
  return (
    <div className="Popup" role="popup">
      <span className="popup-text">{store.popUpMessage}</span>
      <img src={store.imgUrl} className="img" />
      <button onClick={store.closePopup}>Close</button>
    </div>
  );
});
