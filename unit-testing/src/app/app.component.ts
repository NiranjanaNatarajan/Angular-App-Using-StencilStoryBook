import { Component } from '@angular/core';
import { CalculatorService } from './services/calculater/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-testing';
  isOn = false;
  numberOne: number = 0;
  numberTwo: number = 0;
  resultMessage: string = '';
  result: number | undefined;

  constructor(private calculator: CalculatorService) { }

  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }

  add() {
    this.resultMessage = 'The result of adding two number is ';
    this.result = this.calculator.add(this.numberOne, this.numberTwo);
  }
  subtract() {
    this.resultMessage = 'The result of subtracting two number is ';
    this.result = this.calculator.subtract(this.numberOne, this.numberTwo);
  }
  clear() {
    this.resultMessage = '';
    this.result = undefined;
    this.numberOne = 0;
    this.numberTwo = 0;
  }

}
