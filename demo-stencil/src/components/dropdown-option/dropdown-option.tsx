import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dropdown-option',
  styleUrl: 'dropdown-option.css',
  shadow: true,
})
export class DropdownOption {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
