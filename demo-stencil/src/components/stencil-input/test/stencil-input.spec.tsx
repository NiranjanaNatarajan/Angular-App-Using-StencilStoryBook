import { newSpecPage } from '@stencil/core/testing';
import { StencilInput } from '../stencil-input';

describe('stencil-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilInput],
      html: `<stencil-input></stencil-input>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-input>
    `);
  });
});
