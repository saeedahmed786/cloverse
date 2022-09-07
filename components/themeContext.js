import { createContext } from "react";

export const themes = {
  dark: {
    color: "white",
    background: "#202225"
  },
  light: {
    color: "black",
    background: "white"
  }
};

export const ThemeContext = createContext(
  themes.dark,
);