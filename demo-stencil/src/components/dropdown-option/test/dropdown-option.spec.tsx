import { newSpecPage } from '@stencil/core/testing';
import { DropdownOption } from '../dropdown-option';

describe('dropdown-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownOption],
      html: `<dropdown-option></dropdown-option>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-option>
    `);
  });
});
