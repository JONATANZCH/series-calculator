import { ITriangular } from "../interfaces";

class Triangular implements ITriangular {
    calculate(n: number): number {
        const result = (n * (n + 1)) / 2;
        return result;
    }
}

export default Triangular;
