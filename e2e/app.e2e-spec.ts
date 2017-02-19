import { LivroAngular2Page } from './app.po';

describe('livro-angular2 App', function() {
  let page: LivroAngular2Page;

  beforeEach(() => {
    page = new LivroAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
