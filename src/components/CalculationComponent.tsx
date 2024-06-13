import { useEffect } from 'react';
import SeriesCalculator from '../utils/seriesCalculator';
import { CalculationComponentProps } from '../interfaces';

const CalculationComponent: React.FC<CalculationComponentProps> = ({ n, onResult }) => {
  useEffect(() => {
    const calculator = new SeriesCalculator();
    setTimeout(() => {
      const result = calculator.calculateSeries(n);
      onResult(result);
    }, 500);
  }, [n, onResult]);

  return null;
};

export default CalculationComponent;
