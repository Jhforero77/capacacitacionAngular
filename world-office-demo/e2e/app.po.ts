import { browser, by, element } from 'protractor';

export class WorldOfficeDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wo-app-root h1')).getText();
  }
}
