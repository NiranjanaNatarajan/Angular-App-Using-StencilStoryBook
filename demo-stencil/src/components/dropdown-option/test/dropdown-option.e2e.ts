import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-option></dropdown-option>');

    const element = await page.find('dropdown-option');
    expect(element).toHaveClass('hydrated');
  });
});
