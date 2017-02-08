import { MsRecipeBookPage } from './app.po';

describe('ms-recipe-book App', function() {
  let page: MsRecipeBookPage;

  beforeEach(() => {
    page = new MsRecipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
