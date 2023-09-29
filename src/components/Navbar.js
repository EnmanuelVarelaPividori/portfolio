import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-light bg-dark">
            <div className="navbar-logo">
            <a href="#home"><h1 className="navbar-title bolder roboto noselect white">Portfolio.</h1></a>
            </div> 
            <div className="desktop">
                <ul className="mono hoverblue">
                    <li><a href="#home"><h5 className="bolder white">Home</h5></a></li>
                    <li><a href="#projects"><h5 className="bolder white">Projects</h5></a></li>
                    <li><a href="#contact"><h5 className="bolder white">Contact</h5></a></li>
                </ul>
            </div>
           
        
        </nav>
    )
}

export default Navbar