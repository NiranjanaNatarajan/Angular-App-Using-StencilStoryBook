import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'dropdown-button',
  styleUrl: 'dropdown-button.css',
  shadow: true,
})
export class DropdownButton {
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) type: string = "submit";
  @Prop() weight: string = "normal";

  render() {
    const classMap = {
      "weight-slim": this.weight === "slim",
      "weight-normal": this.weight === "normal",
      "weight-strong": this.weight === "strong",
    };
    return (
      <Host>
      <button
        class={classMap}
        type={this.type}
        disabled={this.disabled}
        part="button"
      >
        <slot></slot>
      </button>
    </Host>
    );
  }

}
