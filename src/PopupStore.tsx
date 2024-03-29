import { makeObservable, observable, action } from 'mobx';
import { getPokemonInfo } from './dataServices/pokemonDataservice';

export class PopupStore {
  showPopUp: boolean;
  popUpMessage: string;
  imgUrl: string;

  constructor() {
    makeObservable(this, {
      showPopUp: observable,
      popUpMessage: observable,
      imgUrl: observable,
      openPopup: action,
      closePopup: action,
      createPopup: action
    });

    this.showPopUp = false;
    this.popUpMessage = '';
    this.imgUrl = '';
  }

  createPopup = async (userCvv: number) => {
    let pokemonInfo;
    try {
      pokemonInfo = await getPokemonInfo(userCvv);
    } catch (e) {
      this.closePopup();
    }
    if (pokemonInfo) {
      this.popUpMessage = `Wow! Did you know your CVV is ${pokemonInfo.name}'s ID?`;
      this.imgUrl = pokemonInfo.sprites.front_default;
      this.openPopup();
    }
  };

  openPopup = () => {
    this.showPopUp = true;
  };

  closePopup = () => {
    this.showPopUp = false;
  };
}
