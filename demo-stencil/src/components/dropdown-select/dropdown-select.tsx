import { Component, Host, h, State, Element, } from '@stencil/core';
import { ComponentInterface } from '@stencil/core/internal';

@Component({
  tag: 'dropdown-select',
  styleUrl: 'dropdown-select.css',
  shadow: true,
})
export class DropdownSelect implements ComponentInterface{
  @Element() el: HTMLElement;

  @State() items: HTMLDropdownSelectElement[] = [];
  @State() open = false;

  componentWillLoad() {
    this.el.shadowRoot.addEventListener("slotchange", () => {
      this.items = Array.from(this.el.querySelectorAll("dropdown-option"));
      this.items.forEach((item, i) => {
        item.slot = `item-${i}`;
      });
    });
  }

  private handleToggle(event: CustomEvent) {
    this.open = event.detail.open;
  }

  render() {
    return (
      <Host>
        <slot></slot>

        <dropdown-dialog onOpenChanged={(event) => this.handleToggle(event)}>
          <slot slot="activator" name="label">
            Select Drop - Down Options
            <svg
              viewBox="0 0 100 66"
              aria-label={this.open ? "Expanded" : "Collapsed"}
            >
              <polygon
                points={
                  this.open ? "0 66.6, 100 66.6, 50 0" : "0 0, 100 0, 50 66.6"
                }
              />
            </svg>
          </slot>

          <menu>
            {this.items.map((_, i) => (
              <li>
                <slot name={`item-${i}`}></slot>
              </li>
            ))}
          </menu>
        </dropdown-dialog>
      </Host>
    );
  }

}
