import { NgBook2Page } from './app.po';

describe('ng-book2 App', function() {
  let page: NgBook2Page;

  beforeEach(() => {
    page = new NgBook2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
