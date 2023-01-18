import operate from './operate';

describe('Test oprations', () => {
  test('Test addition', () => {
    const result = operate(10, 5, '+');
    expect(result).toEqual('15');
  });

  test('Test Substraction', () => {
    const result = operate(10, 5, '-');
    expect(result).toEqual('5');
  });

  test('Test Multiplication', () => {
    const result = operate(10, 5, 'x');
    expect(result).toEqual('50');
  });

  test('Test Divide', () => {
    const result = operate(10, 5, '÷');
    expect(result).toEqual('2');
  });

  test('Test Modulo', () => {
    const result = operate(10, 5, '%');
    expect(result).toEqual('0');
  });

  test('Test Divide', () => {
    const result = operate(1.5, 5.2, '+');
    expect(result).toEqual('6.7');
  });
});
