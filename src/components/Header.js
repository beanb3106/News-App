import React from "react";
import "./style.css";
import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./script.js";
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <header className="header-default">
      <nav className="navbar navbar-expand-lg">
        <div className="container-xl">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" width={"120px"} />
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown active">
                <a className="nav-link " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Trending News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Business News
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link " href="/">
                  Tech News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="header-right">
            <p id="demo"></p>
            <p id="demo2"></p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
