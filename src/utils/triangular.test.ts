import Triangular from "../../src/utils/triangular";

describe('Triangular', () => {
  const triangular = new Triangular();

  test('triangular(n) returns the n-th triangular number', () => {
    expect(triangular.calculate(1)).toBe(1);
    expect(triangular.calculate(2)).toBe(3);
    expect(triangular.calculate(3)).toBe(6);
    expect(triangular.calculate(4)).toBe(10);
    expect(triangular.calculate(5)).toBe(15);
    expect(triangular.calculate(6)).toBe(21);
    expect(triangular.calculate(7)).toBe(28);
    expect(triangular.calculate(8)).toBe(36);
    expect(triangular.calculate(9)).toBe(45);
    expect(triangular.calculate(10)).toBe(55);
  });
});
