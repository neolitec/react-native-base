import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import IdleTimerManager from 'react-native-idle-timer';
import AppNavigator from './shared/AppNavigator';
import RootStore from './shared/store/root-store';
import { rootStoreContext } from './shared/store';
import Reactotron from './reactotron';
import StorybookUIRoot from './storybook';
import { getLogger } from './shared/lib/reactotron/logger';

const RootStoreProvider = rootStoreContext.Provider;

const logger = getLogger('App');

function App() {
  const rootStore = RootStore.create();

  useEffect(() => {
    // The splash screen continues to be displayed until this method is called.
    SplashScreen.hide();
    logger.log('Ready');
  }, []);

  useEffect(() => {
    if (__DEV__) IdleTimerManager.setIdleTimerDisabled(true);

    return () => {
      if (__DEV__) IdleTimerManager.setIdleTimerDisabled(false);
    };
  });

  return (
    <RootStoreProvider value={rootStore}>
      <AppNavigator />
    </RootStoreProvider>
  );
}

export default (__DEV__
  ? Reactotron.storybookSwitcher(StorybookUIRoot)(App)
  : App);
