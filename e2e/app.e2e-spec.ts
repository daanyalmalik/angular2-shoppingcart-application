import { Ass5Page } from './app.po';

describe('ass5 App', () => {
  let page: Ass5Page;

  beforeEach(() => {
    page = new Ass5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
