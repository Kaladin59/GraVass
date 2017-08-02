import { GracielaVassarottoPage } from './app.po';

describe('graciela-vassarotto App', () => {
  let page: GracielaVassarottoPage;

  beforeEach(() => {
    page = new GracielaVassarottoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
