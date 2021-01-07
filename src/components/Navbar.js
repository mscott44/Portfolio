import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  {
    /* function that reverses state*/
  }
  const handleClick = () => setClick(!click);
  {
    /*function that says if clicked on close mobile menu*/
  }
  const closeMobileMenu = () => setClick(false);

  /*const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  */

  {
    /*whenever we resize the screen we want showButton to work*/
  }
  /*window.addEventListener("resize", showButton);*/
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-title" onClick={closeMobileMenu}>
            The Hub
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/*This says is clicked on change state to X if not bars*/}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/*if the window size is mobile click on the hambuger for active, if not proceed with regular nav menu*/}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
