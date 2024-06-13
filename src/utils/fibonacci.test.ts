import Fibonacci from "../../src/utils/fibonacci";

describe('Fibonacci', () => {
  const fibonacci = new Fibonacci();

  test('fibonacci(n) returns the n-th Fibonacci number', () => {
    expect(fibonacci.calculate(0)).toBe(0);
    expect(fibonacci.calculate(1)).toBe(1);
    expect(fibonacci.calculate(2)).toBe(1);
    expect(fibonacci.calculate(3)).toBe(2);
    expect(fibonacci.calculate(4)).toBe(3);
    expect(fibonacci.calculate(5)).toBe(5);
    expect(fibonacci.calculate(6)).toBe(8);
    expect(fibonacci.calculate(7)).toBe(13);
    expect(fibonacci.calculate(8)).toBe(21);
    expect(fibonacci.calculate(9)).toBe(34);
    expect(fibonacci.calculate(10)).toBe(55);
  });
});
