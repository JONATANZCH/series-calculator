import { ISeriesCalculator } from "../interfaces";
import Fibonacci from "./fibonacci";
import Triangular from "./triangular";
import Prime from "./prime";

class SeriesCalculator implements ISeriesCalculator {
  private fibonacci: Fibonacci;
  private triangular: Triangular;
  private prime: Prime;

  constructor() {
    this.fibonacci = new Fibonacci();
    this.triangular = new Triangular();
    this.prime = new Prime();
  }

  calculateSeries(n: number): number {
    const primeTerm = this.prime.getNthPrime(n + 1);
    const triangularTerm = this.triangular.calculate(n);
    const fibonacciTerm = this.fibonacci.calculate(n + 1);

    const result = primeTerm - 2 * triangularTerm + fibonacciTerm;

    return result;
  }
}

export default SeriesCalculator;
