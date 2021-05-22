import { action, makeObservable } from 'mobx';
import { getPokemonInfo } from '../../dataServices/pokemonDataservice';
import { StoreExtension } from '../../GenericStore/StoreExtension';
import { PopUpState } from '../state/PopUpState';

export class PopUpMutator extends StoreExtension<PopUpState> {
  @action
  createPopup = async (userCvv: number) => {
    let pokemonInfo;
    try {
      pokemonInfo = await getPokemonInfo(userCvv);
    } catch (e) {
      this.closePopup();
    }
    if (pokemonInfo) {
      this.state.popUpMessage = `Wow! Did you know your CVV is ${pokemonInfo.name}'s ID?`;
      this.state.imgUrl = pokemonInfo.sprites.front_default;
      this.openPopup();
    }
  };

  @action
  openPopup = () => {
    this.state.showPopUp = true;
  };

  @action
  closePopup = () => {
    this.state.showPopUp = false;
  };
  public constructor(state: PopUpState) {
    super(state);
    makeObservable(this);
  }
}
