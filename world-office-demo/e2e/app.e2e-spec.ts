import { WorldOfficeDemoPage } from './app.po';

describe('world-office-demo App', () => {
  let page: WorldOfficeDemoPage;

  beforeEach(() => {
    page = new WorldOfficeDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to wo-app!');
  });
});
