import { newSpecPage } from '@stencil/core/testing';
import { DropdownSelect } from '../dropdown-select';

describe('dropdown-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownSelect],
      html: `<dropdown-select></dropdown-select>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-select>
    `);
  });
});
