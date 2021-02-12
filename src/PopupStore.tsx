import { makeObservable, observable, action } from 'mobx';
import { getPokemonInfo } from './dataServices/pokemonDataservice';

export class PopupStore {
  showPopUp: boolean;
  popUpMessage: string;
  imgUrl: string;

  constructor() {
    makeObservable(this, {
      showPopUp: observable,
      openPopup: action,
      closePopup: action,
      createPopup: action
    });

    this.showPopUp = false;
    this.popUpMessage = '';
    this.imgUrl = '';
  }

  createPopup = (userCvv: number) => {
    const pokemonInfo = getPokemonInfo(userCvv);
    pokemonInfo
      .then((info) => {
        this.popUpMessage = `Wow! Did you know your CVV is ${info.name}'s ID?`;
        this.imgUrl = info.sprites.front_default;
        this.showPopUp = true;
      })
      .catch(() => {
        this.showPopUp = false;
      });
  };

  openPopup = () => {
    this.showPopUp = true;
  };

  closePopup = () => {
    this.showPopUp = false;
  };
}
