import Prime from "../../src/utils/prime";

describe('Prime', () => {
  const prime = new Prime();

  test('isPrime(num) correctly identifies prime numbers', () => {
    expect(prime.isPrime(1)).toBe(false);
    expect(prime.isPrime(2)).toBe(true);
    expect(prime.isPrime(3)).toBe(true);
    expect(prime.isPrime(4)).toBe(false);
    expect(prime.isPrime(5)).toBe(true);
  });

  test('getNthPrime(n) returns the n-th prime number', () => {
    expect(prime.getNthPrime(1)).toBe(2);
    expect(prime.getNthPrime(2)).toBe(3);
    expect(prime.getNthPrime(3)).toBe(5);
    expect(prime.getNthPrime(4)).toBe(7);
    expect(prime.getNthPrime(5)).toBe(11);
    expect(prime.getNthPrime(6)).toBe(13);
    expect(prime.getNthPrime(7)).toBe(17);
    expect(prime.getNthPrime(8)).toBe(19);
    expect(prime.getNthPrime(9)).toBe(23);
    expect(prime.getNthPrime(10)).toBe(29);
  });
});
