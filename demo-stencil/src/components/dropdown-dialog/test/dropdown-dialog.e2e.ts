import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-dialog></dropdown-dialog>');

    const element = await page.find('dropdown-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
