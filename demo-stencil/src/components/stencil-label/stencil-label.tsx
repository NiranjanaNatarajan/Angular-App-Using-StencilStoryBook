import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-label',
  styleUrl: 'stencil-label.css',
  shadow: true,
})
export class StencilLabel {
  @Prop() label: any;

  render() {
    return (
      <label><b>{this.label}</b></label>
    );
  }

}
