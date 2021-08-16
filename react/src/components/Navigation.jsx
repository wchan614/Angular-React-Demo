import React from "react";
import companyLogo from './assets/images/icon.png';
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar fixed-top navbar-expand navbar-dark ">
        <div className="container">

          <Link className="navbar-brand" to="/">
            <img className="logo" src={companyLogo} alt="logo"></img>
              Cloud Storage
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item  ${ props.location.pathname === "/" ? "active" : ""}`}>
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className={`nav-item  ${props.location.pathname === "/products" ? "active" : ""}`}>
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""}`}>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </nav>
    </div>
  );
}

export default withRouter(Navigation);