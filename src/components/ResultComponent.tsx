import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ResultComponentProps } from "../interfaces";

const ResultComponent: React.FC<ResultComponentProps> = ({ result }) => {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result !== null) {
      const tl = gsap.timeline();
      tl.fromTo(resultRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(resultRef.current, { y: -50 }, { y: 0, duration: 1 }, "<");
    }
  }, [result]);

  return (
    <div ref={resultRef} className="mt-8 p-4 bg-white text-black rounded-lg shadow-lg max-w-md w-full">
      {result === -1 ? (
        <p className="text-lg font-bold text-center">Sorry, but I can't handle numbers that big! 😵‍💫</p>
      ) : result !== null ? (
        <p className="text-lg font-bold">The result is: <span className='text-green-600'>{result}</span>🫣</p>
      ) : (
        <p className="text-lg text-center italic">Please enter a number to calculate the series.😊</p>
      )}
    </div>
  );
};

export default ResultComponent;
