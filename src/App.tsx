import React from 'react';
import AppNavigator from './shared/AppNavigator';
import RootStore from './shared/store/root-store';
import { rootStoreContext } from './shared/store';
import Reactotron from './reactotron';
import StorybookUIRoot from './storybook';

const RootStoreProvider = rootStoreContext.Provider;

function App() {
  const rootStore = RootStore.create();

  return (
    <RootStoreProvider value={rootStore}>
      <AppNavigator />
    </RootStoreProvider>
  );
}

export default (__DEV__
  ? Reactotron.storybookSwitcher(StorybookUIRoot)(App)
  : App);
