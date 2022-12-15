import { newSpecPage } from '@stencil/core/testing';
import { StencilHint } from '../stencil-hint';

describe('stencil-hint', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilHint],
      html: `<stencil-hint></stencil-hint>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-hint>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-hint>
    `);
  });
});
