import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display "weak" if value is less than 10', () => {
    const pipe = new StrengthPipe();
    const result = pipe.transform(5);
    expect(result).toEqual('5 (weak)');
  });

  it('should display "strong" if value is less between 10 to 20', () => {
    const pipe = new StrengthPipe();
    const result = pipe.transform(12);
    expect(result).toEqual('12 (strong)');
  });

  it('should display "strongest" if value is greater than or equal to 20', () => {
    const pipe = new StrengthPipe();
    const result = pipe.transform(25);
    expect(result).toEqual('25 (strongest)');
  });

});
