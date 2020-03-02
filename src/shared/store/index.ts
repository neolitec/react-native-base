import { configure } from 'mobx';
import { createContext, useContext } from 'react';
import RootStore from './root-store';

// Force developer to wrap mutations into Mobx actions.
configure({ enforceActions: 'always' });

export const rootStoreContext = createContext<RootStore | null>(null);

export function useRootStore(): RootStore {
  return useContext(rootStoreContext) as RootStore;
}
