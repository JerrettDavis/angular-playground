import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('mat-sidenav-content > mat-toolbar > span')).getText() as Promise<string>;
  }
}
