import './Popup.css';
import { observer } from 'mobx-react';
import { useStore } from './store/viewContext';

export const Popup = observer(() => {
  const store = useStore();
  const popUpSelector = store.viewSelectors.popUpSelector;
  const popUpMutator = store.actions.popUpMutator;
  let t: 'a' | 'b' | 'c' = 'a';
  if (t) {
    console.log('A');
  } else {
    console.log('FALSE A');
  }
  t = 'b';
  if (t) {
    console.log('b');
  } else {
    console.log('FbLSE b');
  }
  return (
    <div className="Popup" role="popup">
      <span className="popup-text">{popUpSelector.popUpMessage}</span>
      <img src={popUpSelector.imgUrl} className="img" />
      <button onClick={popUpMutator.closePopup}>Close</button>
    </div>
  );
});
