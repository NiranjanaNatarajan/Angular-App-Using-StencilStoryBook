import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) { }

  add(a: number, b: number) {
    let result = a + b;
    this.logger.log('add method is called');
    return result;
  }
  subtract(a: number, b: number) {
    let result = a - b;
    this.logger.log('subtract method is called');
    return result;
  }
}
