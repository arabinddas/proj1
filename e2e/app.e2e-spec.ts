import { AngularFormTestPage } from './app.po';

describe('angular-form-test App', () => {
  let page: AngularFormTestPage;

  beforeEach(() => {
    page = new AngularFormTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
