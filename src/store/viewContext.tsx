import React from 'react';
import { useLocalStore } from 'mobx-react';
import { LandingPageViewStore, createStore } from './LandingPageViewStore';

type ContextProps = {
  children: React.ReactNode;
};

const viewContext = React.createContext<LandingPageViewStore | undefined>(
  undefined
);

viewContext.displayName = 'viewContext';

export const StoreProvider = ({ children }: ContextProps) => {
  const viewStore = useLocalStore(createStore);
  return (
    <viewContext.Provider value={viewStore}>{children}</viewContext.Provider>
  );
};

export const useStore = () => {
  const store: LandingPageViewStore | undefined = React.useContext<
    LandingPageViewStore | undefined
  >(viewContext);
  if (!store) {
    throw new Error(
      'useExperimentDetailsViewStore must be used within a ExperimentDetailsViewStoreProvider.'
    );
  }
  return store;
};
