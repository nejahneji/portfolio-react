import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0)

  const showMenu = () =>{
    setScreenWidth(window.innerWidth)
    if(window.innerWidth > 600 ){
      setOpen(true)
    } 
    // else {
    //   setOpen(false)
    // }
  }

  useEffect(() => {
    showMenu();
    window.addEventListener("resize",showMenu);
    return () => window.removeEventListener("resize",showMenu)
  }, [showMenu])

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img src="/Full-Stack-JavaScript.jpg" alt="fullStack" />
          </Link>
        </div>
        <div className="list-wrapper">
          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={() => setOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/work" onClick={() => setOpen(false)}>
                Works
              </Link>
            </li>
          </ul>
          <div>
            {open ? (
              <i
                className="fas fa-times fa-2x"
                onClick={() => setOpen(false)}
              />
            ) : (
              <i className="fas fa-bars fa-2x" onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
