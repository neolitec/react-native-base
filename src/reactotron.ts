/* eslint-disable */
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

const reactotronOptions = {name: 'react-native-base'};

(reactotronOptions as any).storybook = true;

Reactotron.configure(reactotronOptions).useReactNative!()
  .setAsyncStorageHandler!(AsyncStorage);

console.tron = Reactotron;

if (__DEV__) {
  Reactotron.connect()!.clear!();
}

export default Reactotron;
