import { newE2EPage } from '@stencil/core/testing';

describe('stencil-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-dropdown></stencil-dropdown>');

    const element = await page.find('stencil-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
