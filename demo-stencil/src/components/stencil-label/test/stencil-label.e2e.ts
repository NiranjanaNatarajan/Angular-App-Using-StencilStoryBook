import { newE2EPage } from '@stencil/core/testing';

describe('stencil-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-label></stencil-label>');

    const element = await page.find('stencil-label');
    expect(element).toHaveClass('hydrated');
  });
});
