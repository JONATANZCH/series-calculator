export interface IFibonacci {
    calculate(n: number): number;
}

export interface ITriangular {
    calculate(n: number): number;
}

export interface IPrime {
    isPrime(num: number): boolean;
    getNthPrime(n: number): number;
}

export interface ISeriesCalculator {
    calculateSeries(n: number): number;
}
