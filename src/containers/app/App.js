import "./App.css";
import React, { useState } from "react";
import { NewsContextProvider } from "../../contexts/news.context";
import Header from "../../components/Header";
import Home from "../../containers/home";
function App() {
  // for dark mode
  const [isDarkTheme, setIsSetDarkTheme] = useState(false);
  const [themeText, setThemeText] = useState("Go Dark");

  return (
    <>
      <div
        style={
          isDarkTheme
            ? { backgroundColor: "#012", color: "#fff" }
            : { backgroundColor: "white", color: "#000" }
        }
        className={isDarkTheme ? "dark-theme" : "light-theme"}
      >
        <div className="App">
          <Header />
          {/* for Dark Mode */}
          <div className="">
            <button
              className="theme-btn btn btn-primary dark-btn"
              style={isDarkTheme ? { background: "white", color: "black" } : { background: "black", color: "white" }}
              onClick={() => {
                isDarkTheme ? setThemeText("Go Dark") : setThemeText("Go Light");
                setIsSetDarkTheme(!isDarkTheme);
              }}
            >
              {/* for Dark Mode */}
              {themeText}
            </button>
            <p style={isDarkTheme ? { color: "white" } : { color: "black" }}>
            </p>
          </div>
          <NewsContextProvider>
            <Home />
          </NewsContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
