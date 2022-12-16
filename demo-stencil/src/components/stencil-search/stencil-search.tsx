import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-search',
  styleUrl: 'stencil-search.css',
  shadow: true,
})
export class StencilSearch {
  @Prop() label: string;
  render() {
    return (
      <Host>
        <slot><input type="search" placeholder={this.label}/></slot>
      </Host>
    );
  }

}
