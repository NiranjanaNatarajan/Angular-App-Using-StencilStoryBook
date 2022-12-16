import { Component, h, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core/internal';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() value: any = { username: '', psw: '' };
  @Event() submitLogin: EventEmitter<any>;

  handleSubmit(e) {
    this.submitLogin.emit(this.value);
    console.log(this.value, e)
  }
  handleChange(event) {
    const prop = event.prop === 'email' ? 'username' : 'psw';
    this.value[prop] = event.target.value;
    if (event.prop === 'email') {
      if (event.target.validity.typeMismatch) {
        console.log('this element is not valid')
      }
    } else {
      if (event.target.validity.patternMismatch) {
        console.log('this element is not valid')
      }
    }
  }

  // handleChangePsw(event) {
  //   this.value.psw = event.target.value;
  //   console.log(event);
  //   if (event.target.validity.patternMismatch) {
  //     console.log('this element is not valid')
  //   }
  // }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>

        <div class="imgcontainer">
          <h2>Login Form</h2>
        </div>

        <div class="container">

          <stencil-label label="Username"></stencil-label>

          {/* <input type="email" placeholder="Enter Username" minLength={1}
            value={this.value.username} onInput={(e) => this.handleChange(e)} required /> */}

          <stencil-input type="email" placeholder="Enter Username" value={this.value.username} minlength={1}
            onHandleChange={(e) => this.handleChange(e)}></stencil-input>

          <stencil-label label="Password"></stencil-label>

          {/* <input type="password" placeholder="Enter Password" minLength={8} pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}"
            value={this.value.psw} onInput={(e) => this.handleChangePsw(e)} required /> */}

          {/* <span>{this.value.psw}</span> */}
          <stencil-hint
            msg="The password must contain at least 1 number, special character and 1 uppercase and lowercase letter, and at least 8 or more characters"></stencil-hint>
          <stencil-button></stencil-button>

        </div>

      </form>
    );
  }
}
