import { useState, createContext, useContext } from 'react';

// Define theme objects
const lightTheme = {
  colors: {
    primary: '#1976d2',
    background: '#f5f5f5',
    text: '#222',
    navText: '#fff',
    buttonBg: '#fff',
    buttonText: '#1976d2',
    buttonBorder: '#1976d2'
  }
};

const darkTheme = {
  colors: {
    primary: '#22223b',
    background: '#121212',
    text: '#f5f5f5',
    navText: '#fff',
    buttonBg: '#22223b',
    buttonText: '#f5f5f5',
    buttonBorder: '#f5f5f5'
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");
  const theme = themeName === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setThemeName(prev => prev === "light" ? "dark" : "light");
  };

  // Apply background color to body
  document.body.style.background = theme.colors.background;
  document.body.style.color = theme.colors.text;

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);