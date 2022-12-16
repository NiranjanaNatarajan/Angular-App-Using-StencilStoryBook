import { newSpecPage } from '@stencil/core/testing';
import { StencilCheckbox } from '../stencil-checkbox';

describe('stencil-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilCheckbox],
      html: `<stencil-checkbox></stencil-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-checkbox>
    `);
  });
});
