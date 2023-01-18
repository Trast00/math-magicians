/* params: {total, next, operation}, buttonName */
const calculate = require('./calculate');

describe('test displayed on type on buttons', () => {
  let calculeObj = { total: null, next: null, operation: null };

  test('Multiple type on 0 do nothing', () => {
    calculeObj = calculate(calculeObj, '0');
    calculeObj = calculate(calculeObj, '0');
    calculeObj = calculate(calculeObj, '0');
    expect(calculeObj.next).toBe('0');
  });

  test('Typing multiple number', () => {
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '0');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '3');
    expect(calculeObj.next).toBe('2023');
  });

  test('Clear the typed number', () => {
    calculeObj = calculate(calculeObj, 'AC');
    expect(calculeObj.total).toBe(null);
    expect(calculeObj.next).toBe(null);
    expect(calculeObj.operation).toBe(null);
  });

  test('On click on a operation clear the typed number', () => {
    calculeObj = calculate(calculeObj, '8');
    expect(calculeObj.next).toBe('8');
    calculeObj = calculate(calculeObj, '+');
    expect(calculeObj.next).toBe(null);
    calculeObj = calculate(calculeObj, '8');
    calculeObj = calculate(calculeObj, '-');
    expect(calculeObj.next).toBe(null);
    calculeObj = calculate(calculeObj, '8');
    calculeObj = calculate(calculeObj, 'x');
    expect(calculeObj.next).toBe(null);
    calculeObj = calculate(calculeObj, '8');
    calculeObj = calculate(calculeObj, '%');
    expect(calculeObj.next).toBe(null);
    calculeObj = calculate(calculeObj, '8');
    calculeObj = calculate(calculeObj, '&divide;');
    expect(calculeObj.next).toBe(null);
  });

  test('Test change sign operation', () => {
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '+/-');
    expect(calculeObj.next).toBe('-2');
    calculeObj = calculate(calculeObj, '+/-');
    expect(calculeObj.next).toBe('2');
    calculeObj = calculate(calculeObj, '+/-');
    expect(calculeObj.next).toBe('-2');
  });

  test('Test dot operation', () => {
    calculeObj = calculate(calculeObj, 'AC');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '.');
    calculeObj = calculate(calculeObj, '5');
    expect(calculeObj.next).toBe('2.5');
  });

  test('Test equal operation', () => {
    calculeObj = calculate(calculeObj, 'AC');
    calculeObj = calculate(calculeObj, '=');
    expect(calculeObj.next).toBe(null || undefined);
  });
});

describe('test operation results', () => {
  let calculeObj = { total: null, next: null, operation: null };

  test('Test addittions', () => {
    calculeObj = calculate(calculeObj, '50');
    calculeObj = calculate(calculeObj, '+');
    calculeObj = calculate(calculeObj, '10');
    expect(calculeObj.next).toBe('10');
    calculeObj = calculate(calculeObj, '=');
    const result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((50 + 10));
  });

  test('Test successive addittions', () => {
    calculeObj = calculate(calculeObj, 'AC');
    calculeObj = calculate(calculeObj, '50');
    calculeObj = calculate(calculeObj, '+');
    calculeObj = calculate(calculeObj, '10');
    expect(calculeObj.next).toBe('10');
    calculeObj = calculate(calculeObj, '=');
    let result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((50 + 10));
    calculeObj = calculate(calculeObj, '+');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '=');
    result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((50 + 10) + 10);
  });

  test('Test successive substraction with sign change', () => {
    calculeObj = calculate(calculeObj, '50');
    calculeObj = calculate(calculeObj, '-');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '=');
    let result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((50 - 10));
    calculeObj = calculate(calculeObj, '-');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '+/-');
    calculeObj = calculate(calculeObj, '=');
    result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((50 - 10) - (-10));
  });

  test('Test successive multiplications', () => {
    calculeObj = calculate(calculeObj, '50');
    calculeObj = calculate(calculeObj, 'x');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '=');
    let result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((50 * 10));
    calculeObj = calculate(calculeObj, 'x');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '=');
    result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((50 * 10) * 10);
  });

  test('Test successive division with sign change', () => {
    calculeObj = calculate(calculeObj, '50');
    calculeObj = calculate(calculeObj, '÷');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '=');
    let result = parseFloat(calculeObj.total, 10);
    expect(result).toEqual((50 / 10));
    calculeObj = calculate(calculeObj, '÷');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '+/-');
    calculeObj = calculate(calculeObj, '=');
    result = parseFloat(calculeObj.total, 10);
    expect(result).toEqual(-(50 / 10) / 10);
  });

  test('Test successive modulo with sign change', () => {
    calculeObj = calculate(calculeObj, '50');
    calculeObj = calculate(calculeObj, '%');
    calculeObj = calculate(calculeObj, '15');
    calculeObj = calculate(calculeObj, '=');
    let result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((50 % 15));
    calculeObj = calculate(calculeObj, '%');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '+/-');
    calculeObj = calculate(calculeObj, '=');
    result = parseFloat(calculeObj.total, 10);
    expect(result).toEqual((50 % 15) % (-2));
  });

  test('Test successive operation with dot', () => {
    calculeObj = calculate(calculeObj, '5');
    calculeObj = calculate(calculeObj, '.');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '+');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '.');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '=');
    let result = parseFloat(calculeObj.total, 10);
    expect(result).toEqual((5.2 + 2.2));
    calculeObj = calculate(calculeObj, 'x');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '.');
    calculeObj = calculate(calculeObj, '7');
    calculeObj = calculate(calculeObj, '+/-');
    calculeObj = calculate(calculeObj, '=');
    result = parseFloat(calculeObj.total, 10);
    const expectedResult = parseFloat(((5.2 + 2.2) * (-2.7)).toFixed(2));
    expect(result).toEqual(expectedResult);
  });
});
