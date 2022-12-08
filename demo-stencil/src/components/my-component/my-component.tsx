import { Component, h, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core/internal';
// import { EventEmitter } from 'puppeteer';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() value: any = { username: '', psw: '' };
  @Event() submitLogin: EventEmitter<any>;
  // @Listen('click', { capture: true })
  // handleClick() {
  //   // this.isOpen = !this.isOpen;
  //   // this.currentTime = Date.now();
  // }

  handleSubmit(e) {
    // e.preventDefault();
    this.submitLogin.emit(this.value);
    console.log(this.value, e)
  }
  handleChange(event) {
    this.value.username = event.target.value;
    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    }
  }
  handleChangePsw(event) {
    this.value.psw = event.target.value;
    console.log(event);
    if (event.target.validity.patternMismatch) {
      console.log('this element is not valid')
    }
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div class="imgcontainer">
          <h2>Login Form</h2>
        </div>
        <div class="container">
          <label><b>Username</b></label>
          <input type="email" placeholder="Enter Username" minLength={1}
            value={this.value.username} onInput={(e) => this.handleChange(e)} required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" minLength={8} pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}"
            value={this.value.psw} onInput={(e) => this.handleChangePsw(e)} required />
          <span>{this.value.psw}</span>
          <hint>{!this.value.psw ? 'The password must contain at least 1 number, special character and 1 uppercase and lowercase letter, and at least 8 or more characters' : ''}</hint>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}
