import { newSpecPage } from '@stencil/core/testing';
import { StencilSearch } from '../stencil-search';

describe('stencil-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilSearch],
      html: `<stencil-search></stencil-search>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-search>
    `);
  });
});
