import { newSpecPage } from '@stencil/core/testing';
import { StencilLabel } from '../stencil-label';

describe('stencil-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilLabel],
      html: `<stencil-label></stencil-label>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-label>
    `);
  });
});
