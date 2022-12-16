import { Component, Prop, h } from '@stencil/core';
import { EventEmitter, Event } from '@stencil/core/internal';

@Component({
  tag: 'stencil-input',
  styleUrl: 'stencil-input.css',
  shadow: true,
})
export class StencilInput {
  @Prop() type: string;
  @Prop() placeholder: string;
  @Prop() minlength: number;
  @Prop() value: any;
  @Event() handleChange: EventEmitter<any>;

  clickChange(event) {
    this.handleChange.emit({value: event.target.value, prop: this.type});
  }

  render() {
    return (
      <input type={this.type} placeholder={this.placeholder} minLength={this.minlength}
        value={this.value} onInput={(e) => this.clickChange(e)} required />
    );
  }

}
