import { Store } from '../GenericStore/Store';
import { LandingPageViewActions } from './LandingPageViewActions';
import { LandingPageViewSelectors } from './LandingPageViewSelectors';
import { LandingPageViewState } from './LandingPageViewState';

export type LandingPageViewStore = Store<
  LandingPageViewState,
  LandingPageViewActions,
  LandingPageViewSelectors
>;

export const createStore = () => {
  const viewState = new LandingPageViewState();
  return new Store(
    viewState,
    new LandingPageViewActions(viewState),
    new LandingPageViewSelectors(viewState)
  );
};
