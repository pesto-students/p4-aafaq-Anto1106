const calc = require('./calculator.js');

describe('Test cases for calculator functions', () => {
  test('Test for sum of two numbers', () => {
    expect(calc.sum(10, 26)).toBe(36);
  });
  test('Test for subtraction of two numbers', () => {
    expect(calc.diff(15, 5)).toBe(10);
  });
  test('Test for multiplication of two numbers', () => {
    expect(calc.product(2, 9)).toBe(18);
  });
});
