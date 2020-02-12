import {observable, action} from 'mobx';

export default class RootStore {
  @observable
  public name = '';

  @action
  public setName(name: string) {
    this.name = name;
  }

  static create() {
    return new RootStore();
  }
}
