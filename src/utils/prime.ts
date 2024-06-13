import { IPrime } from "../interfaces";

class Prime implements IPrime {
    isPrime(num: number): boolean {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    getNthPrime(n: number): number {
        let count = 0;
        let num = 1;
        while (count < n) {
            num++;
            if (this.isPrime(num)) {
                count++;
            }
        }
        return num;
    }
}

export default Prime;
