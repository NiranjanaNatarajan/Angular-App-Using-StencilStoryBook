import { newE2EPage } from '@stencil/core/testing';

describe('stencil-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-search></stencil-search>');

    const element = await page.find('stencil-search');
    expect(element).toHaveClass('hydrated');
  });
});
