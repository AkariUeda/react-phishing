import { observable } from 'mobx';
import { UserData } from '../../IUserData';

export class FormState {
  @observable public formUserData: UserData = {
    id: '',
    fullName: '',
    cardCVV: 0,
    cardNumber: 0,
    expDate: '06/20'
  };
  @observable public firstButtonClick: boolean = false;
}
