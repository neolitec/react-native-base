import { observable, action, computed } from 'mobx';

export default class RootStore {
  @observable
  public firstname = '';

  @observable
  public lastname = '';

  @observable
  public birthYear: number | null = null;

  @action
  public setFirstname(firstname: string) {
    this.firstname = firstname;
  }

  @action
  public setLastname(lastname: string) {
    this.lastname = lastname;
  }

  @action
  public setBirthYear(birthYear: number) {
    this.birthYear = birthYear;
  }

  @computed
  get age(): string {
    if (this.birthYear === null) return '';
    return String(new Date().getFullYear() - this.birthYear);
  }

  @computed
  get isValid(): boolean {
    return Boolean(this.firstname && this.lastname && this.birthYear);
  }

  static create() {
    return new RootStore();
  }
}
