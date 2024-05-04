import { useState, useEffect } from "react";

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