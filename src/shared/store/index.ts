import { configure } from 'mobx';
import { createContext, useContext } from 'react';
import RootStore from './root-store';

// Force developer to wrap mutations into Mobx actions.
configure({ enforceActions: 'always' });

export const rootStoreContext = createContext<RootStore>(null as any);

export function useRootStore() {
  return useContext(rootStoreContext);
}
