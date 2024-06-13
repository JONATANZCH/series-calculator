interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <label
      htmlFor="darkModeToggle"
      className="relative inline-block h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent] mb-8"
    >
      <input
        type="checkbox"
        id="darkModeToggle"
        className="peer sr-only"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300 peer-checked:bg-gray-600"></span>
      <span className="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:bg-gray-700">
        <span className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-gray-200 transition scale-0 peer-checked:scale-100">
          {" "}
        </span>
      </span>
    </label>
  );
};

export default DarkModeToggle;
