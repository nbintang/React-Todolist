import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function useDarkMode() {
  const [themeMode, setThemeMode] = useState(() => {
    const initialtheme = localStorage.getItem('theme');
    return initialtheme ? initialtheme : "light"
  });

  const getThemeFromLocalStorage = () => {
    const saveTheme = localStorage.getItem('theme');
    if (saveTheme) setThemeMode(saveTheme);
  };

  const toggleTheme = () => {
    setThemeMode(prevTheme => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      if(newTheme === "dark") toast('Darkness, my old friend!',
    {
      icon: '🦇',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );

  if(newTheme === 'light')  toast('Light, my healer...',
  {
    icon: '🕊️',
    style: {
      borderRadius: '10px',
      background: '#ffff',
      color: '#777',
    },
  }
);
      localStorage.setItem('theme', newTheme);
      return newTheme
    });
  };

  useEffect(() => {
    window.document.querySelector("html").classList.remove('dark', 'light');
    window.document.querySelector("html").classList.add(themeMode);
    getThemeFromLocalStorage();
  }, [themeMode]);
  
  return { themeMode, toggleTheme };
};