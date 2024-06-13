const AboutSection: React.FC = () => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">About the Series</h2>
      <p className="mb-2">
        This calculator computes the series using the formula:
      </p>
      <p className="italic">
        serie(n) = primo(n + 1) - 2 * triangular(n) + fibonacci(n + 1)
      </p>
      <h3 className="text-xl font-bold mt-4">Series Definitions</h3>
      <ul className="list-disc list-inside">
        <li>
          <strong>Prime:</strong> The nth prime number.
        </li>
        <li>
          <strong>Triangular:</strong> The nth triangular number.
        </li>
        <li>
          <strong>Fibonacci:</strong> The nth Fibonacci number.
        </li>
      </ul>
    </div>
  );
};

export default AboutSection;
