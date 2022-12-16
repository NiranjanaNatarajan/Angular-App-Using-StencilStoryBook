import { newSpecPage } from '@stencil/core/testing';
import { StencilDropdown } from '../stencil-dropdown';

describe('stencil-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilDropdown],
      html: `<stencil-dropdown></stencil-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-dropdown>
    `);
  });
});
