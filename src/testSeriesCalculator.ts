import SeriesCalculator from "./utils/seriesCalculator";
import Prime from "./utils/prime";
import Triangular from "./utils/triangular";
import Fibonacci from "./utils/fibonacci";

const seriesCalculator = new SeriesCalculator();
const prime = new Prime();
const triangular = new Triangular();
const fibonacci = new Fibonacci();

const n = 47;

console.log(`Testing with n = ${n}`);
const primeTerm = prime.getNthPrime(n + 1);
console.log(`Prime(${n + 1}): ${primeTerm}`);

const triangularTerm = triangular.calculate(n);
console.log(`Triangular(${n}): ${triangularTerm}`);

const fibonacciTerm = fibonacci.calculate(n + 1);
console.log(`Fibonacci(${n + 1}): ${fibonacciTerm}`);

const seriesResult = seriesCalculator.calculateSeries(n);
console.log(`Series(${n}): ${seriesResult}`);
