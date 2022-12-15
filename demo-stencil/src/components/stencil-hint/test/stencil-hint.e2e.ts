import { newE2EPage } from '@stencil/core/testing';

describe('stencil-hint', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-hint></stencil-hint>');

    const element = await page.find('stencil-hint');
    expect(element).toHaveClass('hydrated');
  });
});
