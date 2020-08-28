export class ProfileModel {
  constructor(public firstName: string, public lastName: string) {
  }
  lastUpdated() {
    return new Date();
  }
}
