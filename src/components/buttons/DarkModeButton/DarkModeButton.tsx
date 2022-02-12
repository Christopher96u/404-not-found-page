import { useEffect, useState } from 'react';
import DarkIcon from './DarkIcon';
import LightIcon from './LightIcon';
enum themes {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

const DarkModeButton = () => {
  const isDarkModeFromBrowser: boolean = localStorage.getItem('theme') === themes.DARK ? true : false;
  const [isDarkMode, setTheme] = useState(isDarkModeFromBrowser);
  const changeTheme = () => {
    setTheme(!isDarkMode);
  };
  useEffect(() => {
    if (!isDarkMode) {
      localStorage.setItem('theme', themes.LIGHT);
      document.documentElement.classList.remove('dark');
    } else if (isDarkMode) {
      localStorage.setItem('theme', themes.DARK);
      document.documentElement.classList.add('dark');
    }
  }, [isDarkMode]);
  return (
    <div className="pr-4 md:pr-8 self-end">
      <button onClick={changeTheme}>{isDarkMode ? <LightIcon className="h-5 w-5 text-blue-500" /> : <DarkIcon className="h-5 w-5 text-blue-500" />}</button>
    </div>
  );
};
export default DarkModeButton;
