import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-select></dropdown-select>');

    const element = await page.find('dropdown-select');
    expect(element).toHaveClass('hydrated');
  });
});
