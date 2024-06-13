import { IFibonacci } from "../interfaces";

class Fibonacci implements IFibonacci {
    private memo: { [key: number]: number } = {};

    calculate(n: number): number {
        if (n <= 1) return n;

        let a = 0, b = 1, c;
        for (let i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

export default Fibonacci;
