import { newE2EPage } from '@stencil/core/testing';

describe('stencil-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-checkbox></stencil-checkbox>');

    const element = await page.find('stencil-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
