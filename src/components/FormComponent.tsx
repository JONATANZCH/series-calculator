import { useState } from 'react';
import { FormComponentProps } from '../interfaces';

const FormComponent: React.FC<FormComponentProps> = ({ onCalculate, isCalculating }) => {
  const [input, setInput] = useState<string>('0');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numInput = parseInt(input);
    if (isNaN(numInput) || numInput < 0) {
      setError("Please enter a valid positive number.😠");
    } else if (input.length > 7) {
      setError("Can't process numbers that big.😵‍💫");
      onCalculate(-1);
    } else {
      setError(null);
      onCalculate(numInput);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Enter n:
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
          className="mt-1 p-2 w-full border rounded"
        />
      </label>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 italic"
        disabled={isCalculating}
      >
        {isCalculating ? 'Calculating...' : 'Calculate'}
      </button>
    </form>
  );
};

export default FormComponent;
