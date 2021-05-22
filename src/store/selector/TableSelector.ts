import { computed, makeObservable } from 'mobx';
import { StoreExtension } from '../../GenericStore/StoreExtension';
import { TableState } from '../state/TableState';

export class TableSelector extends StoreExtension<TableState> {
  @computed
  public get users() {
    return this.state.registeredUsers;
  }

  public constructor(state: TableState) {
    super(state);
    makeObservable(this);
  }
}
