import { SplitPage } from './app.po';

describe('split App', () => {
  let page: SplitPage;

  beforeEach(() => {
    page = new SplitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
