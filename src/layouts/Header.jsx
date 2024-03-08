import React, { useContext, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../App";

export default function Header() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <div>
      <header className="">
        <div className="h-16 w-full shadow-md flex items-center justify-end px-4">
          <DarkModeToggle
            onChange={handleChangeTheme}
            checked={theme === "dark"}
            size={50}
          />
        </div>
      </header>
    </div>
  );
}
