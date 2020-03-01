import DetailStore from './detail-store';
import I18nStore from './i18n-store';

export default class RootStore {
  public detailStore = new DetailStore();

  public i18nStore = new I18nStore();

  static create() {
    return new RootStore();
  }
}
