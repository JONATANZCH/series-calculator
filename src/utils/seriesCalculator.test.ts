import SeriesCalculator from "./seriesCalculator";

describe('SeriesCalculator', () => {
    const calculator = new SeriesCalculator();

    test('calculateSeries should return correct values', () => {
        expect(calculator.calculateSeries(0)).toBe(3);
        expect(calculator.calculateSeries(1)).toBe(2);
        expect(calculator.calculateSeries(2)).toBe(1);
        expect(calculator.calculateSeries(3)).toBe(-2);
        expect(calculator.calculateSeries(4)).toBe(-4);
        expect(calculator.calculateSeries(5)).toBe(-9);
        expect(calculator.calculateSeries(6)).toBe(-12);
        expect(calculator.calculateSeries(7)).toBe(-16);
        expect(calculator.calculateSeries(8)).toBe(-15);
        expect(calculator.calculateSeries(9)).toBe(-6);
    });
});
