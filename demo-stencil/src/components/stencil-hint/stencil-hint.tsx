import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-hint',
  styleUrl: 'stencil-hint.css',
  shadow: true,
})
export class StencilHint {
  @Prop() msg: any;
  @Prop() psw: boolean;

  render() {
    return (
      <hint>{this.msg}</hint>
    );
  }

}
