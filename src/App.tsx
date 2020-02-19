import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './shared/AppNavigator';
import RootStore from './shared/store/root-store';
import { rootStoreContext } from './shared/store';
import Reactotron from './reactotron';
import StorybookUIRoot from './storybook';

const RootStoreProvider = rootStoreContext.Provider;

function App() {
  const rootStore = RootStore.create();

  useEffect(() => {
    // The splash screen continues to be displayed until this method is called.
    SplashScreen.hide();
  }, []);

  return (
    <RootStoreProvider value={rootStore}>
      <AppNavigator />
    </RootStoreProvider>
  );
}

export default (__DEV__
  ? Reactotron.storybookSwitcher(StorybookUIRoot)(App)
  : App);
