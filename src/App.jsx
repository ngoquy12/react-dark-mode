import React, { createContext, useState } from "react";
import "./index.css";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

export const ThemeContext = createContext(null);
export default function App() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme") === "dark") {
      return "dark";
    } else {
      return "light";
    }
  });

  const handleChangeTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        <div
          className={`${
            theme === "light" ? "light-mode" : "dark-mode"
          } h-screen flex flex-col`}
        >
          <Header />
          <Main />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
