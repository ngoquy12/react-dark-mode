import React, { useState } from "react";
import "./index.css";
import DarkModeToggle from "react-dark-mode-toggle";

export default function App() {
  const [isDarkTheme, setDarkTheme] = useState(() => {
    let statusDarkTheme = JSON.parse(localStorage.getItem("theme")) || false;
    return statusDarkTheme;
  });

  const handleChange = () => {
    setDarkTheme(!isDarkTheme);
    localStorage.setItem("theme", !isDarkTheme);
  };
  return (
    <div
      className={`${
        isDarkTheme ? "dark-mode" : "light-mode"
      } h-screen flex flex-col`}
    >
      <header className="">
        <div className="h-16 w-full bg-slate-50 flex items-center justify-end px-4">
          <DarkModeToggle
            onChange={handleChange}
            checked={isDarkTheme}
            size={50}
          />
        </div>
      </header>
      <div className="flex-1">
        <h1 className="text-3xl font-bold ">ReactJS - JSON Server</h1>
        <p className="text-gray-700">
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            ReactJS
          </a>{" "}
          -{" "}
          <a
            href="https://json-server.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            JSON Server
          </a>
        </p>
      </div>
    </div>
  );
}
