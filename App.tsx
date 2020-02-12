import React from 'react';
import AppNavigator from './src/shared/AppNavigator';
import RootStore from './src/shared/store/root-store';
import {rootStoreContext} from './src/shared/store';

const RootStoreProvider = rootStoreContext.Provider;

function App() {
  const rootStore = RootStore.create();

  return (
    <RootStoreProvider value={rootStore}>
      <AppNavigator />
    </RootStoreProvider>
  );
}

export default App;
