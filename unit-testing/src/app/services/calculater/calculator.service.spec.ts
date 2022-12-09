import { LoggerService } from "../logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {

  it('should add two numbers', () => {
    const addCalculator = new CalculatorService(new LoggerService());
    let result = addCalculator.add(2, 2);
    expect(result).toBe(4);
  });

  it('should subtract two numbers', () => {
    const addCalculator = new CalculatorService(new LoggerService());
    let result = addCalculator.subtract(2, 2);
    expect(result).toBe(0);
  });

});