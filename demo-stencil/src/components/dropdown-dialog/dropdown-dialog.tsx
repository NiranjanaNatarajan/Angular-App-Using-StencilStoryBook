import { Component, Element, Event,
   Host, Listen,  Prop,  Watch,  h,
} from "@stencil/core";
import { ComponentInterface, EventEmitter } from "@stencil/core/internal";

@Component({
  tag: 'dropdown-dialog',
  styleUrl: 'dropdown-dialog.css',
  shadow: true,
})
export class DropdownDialog implements ComponentInterface{
  @Element() el: HTMLElement;

  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  @Watch("open")
  openChangedHandler(open: boolean) {
    this.openChanged.emit({ open });
  }

  @Event() openChanged: EventEmitter;

  @Listen("keydown", { target: "window" })
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.open = false;
    }
  }

  @Listen("click", { target: "window" })
  handleWindowClick(event: MouseEvent) {
    if (!event.composedPath().includes(this.el.shadowRoot)) {
      this.open = false;
    }
  }
  render() {
    return (
      <Host>
        <dropdown-button
          onClick={() => {
            this.open = !this.open;
          }}
        >
          <slot name="activator">Activate</slot>
        </dropdown-button>

        <dialog open={this.open}>
          <slot></slot>
        </dialog>
      </Host>
    );
  }

}
