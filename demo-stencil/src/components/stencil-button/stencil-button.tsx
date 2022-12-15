import { Component, h } from '@stencil/core';

@Component({
  tag: 'stencil-button',
  styleUrl: 'stencil-button.css',
  shadow: true,
})
export class StencilButton {

  render() {
    return (
<button type="submit">Login</button>
    );
  }

}
