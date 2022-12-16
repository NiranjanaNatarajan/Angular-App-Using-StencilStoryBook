import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-checkbox',
  styleUrl: 'stencil-checkbox.css',
  shadow: true,
})
export class StencilCheckbox {
  @Prop() label: string;
  render() {
    return (
      <Host>
        <slot><input type="checkbox" />{this.label}</slot>
      </Host>
    );
  }

}
