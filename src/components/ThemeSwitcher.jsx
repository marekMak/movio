import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    // Check for existing theme in localStorage or use system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Remove the previous theme className and add the new one
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    
    // Store the selected theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
    <div className="flex items-center justify-center">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <input type="checkbox" id="toggle" className="sr-only peer" onClick={()=>toggleTheme()}/>
            <div className="block relative bg-slate-400 w-16 h-9 p-1 rounded-full before:absolute before:bg-white before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-baseBlue"></div>
        </label>
        <span className="text-xs mx-2 md:mx-3 text-font">{theme}</span>
        </div>
    </>
  );
};

export default ThemeSwitcher;
