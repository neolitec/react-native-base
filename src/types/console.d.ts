import { Reactotron } from 'reactotron-core-client';
import { ReactotronReactNative } from 'reactotron-react-native';

declare global {
  interface Console {
    tron: Reactotron<ReactotronReactNative> & ReactotronReactNative;
  }
}
