import { createContext } from "react";

const enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme: (theme: Theme) => void; 
}

export const ThemeContext = createContext({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'