import { useEffect, useState } from 'react';
import FormComponent from './components/FormComponent';
import CalculationComponent from './components/CalculationComponent';
import ResultComponent from './components/ResultComponent';
import DarkModeToggle from './components/DarkModeToggle';
import AboutSection from './components/AboutSection';
import './App.css';
import seriesImage from './assets/img/seriefpt.png';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [n, setN] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [calculating, setCalculating] = useState<boolean>(false);

  const handleCalculate = (input: number) => {
    setN(input);
    setCalculating(true);
  };

  const handleResult = (output: number) => {
    setResult(output);
    setCalculating(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-400 to-purple-500 text-black'} p-4`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <h1 className="text-4xl font-bold mb-8">Series Calculator</h1>
      <img src={seriesImage} alt="Series Formula" className="mb-7 max-w-full h-12 rounded-lg shadow-lg" />
      <FormComponent onCalculate={handleCalculate} isCalculating={calculating} />
      {n !== null && <CalculationComponent n={n} onResult={handleResult} />}
      {calculating && <Loader />}
      {!calculating && <ResultComponent result={result} />}
      <AboutSection />
    </div>
  );
};

export default App;
