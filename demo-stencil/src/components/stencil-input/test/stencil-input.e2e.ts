import { newE2EPage } from '@stencil/core/testing';

describe('stencil-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-input></stencil-input>');

    const element = await page.find('stencil-input');
    expect(element).toHaveClass('hydrated');
  });
});
