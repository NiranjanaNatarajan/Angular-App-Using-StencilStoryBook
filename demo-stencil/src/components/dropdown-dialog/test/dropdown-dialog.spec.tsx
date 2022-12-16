import { newSpecPage } from '@stencil/core/testing';
import { DropdownDialog } from '../dropdown-dialog';

describe('dropdown-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownDialog],
      html: `<dropdown-dialog></dropdown-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-dialog>
    `);
  });
});
