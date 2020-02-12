import React, { useEffect } from 'react';
import IdleTimerManager from 'react-native-idle-timer';
import AppNavigator from './src/shared/AppNavigator';
import RootStore from './src/shared/store/root-store';
import { rootStoreContext } from './src/shared/store';

const RootStoreProvider = rootStoreContext.Provider;

function App() {
  const rootStore = RootStore.create();

  useEffect(() => {
    if (__DEV__) IdleTimerManager.setIdleTimerDisabled(true);
    return () => {
      if (__DEV__) IdleTimerManager.setIdleTimerDisabled(false);
    };
  }, []);

  return (
    <RootStoreProvider value={rootStore}>
      <AppNavigator />
    </RootStoreProvider>
  );
}

export default App;
