// DarkMode.tsx
import  { useState } from 'react';
import { MoonIcon, SunIcon } from '../../assets';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <div className={`flex items-center justify-between text-white rounded-full px-1 py-1`}>
      <div className={`flex items-center rounded-full border-[3px] dark:border-blue-300 border-blue-950`}>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <MoonIcon className="rounded-full text-4xl text-blue-300 p-2" />
          ) : (
            <SunIcon className="rounded-full text-4xl text-blue-950 p-2" />
          )}
        </button>
      </div>
    </div>
  );
}

export default DarkMode;
