import * as RNLocalize from 'react-native-localize';
import { observable, action } from 'mobx';
import { Language } from '../lib/i18n/localization';

export default class I18nStore {
  @observable
  public language = RNLocalize.findBestAvailableLanguage([
    'en',
    'fr',
  ]) as Language;

  @observable
  public ready = false;

  @action
  setLanguage(language: Language) {
    this.language = language;
  }

  @action
  setReady(ready = true) {
    this.ready = ready;
  }
}
