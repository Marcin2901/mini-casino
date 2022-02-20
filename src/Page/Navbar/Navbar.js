import React from "react";
import "./Navbar.css"


const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav--left">
                <h4>Mini Casino</h4>
                <i class="fas fa-life-ring"></i>
            </div>
            <ul className="nav--right">
                <li>Home</li>
                <li>About</li>
                <li>Games</li>
                <li><i class="far fa-user"></i> <span>1000$</span></li>
            </ul>
        </nav>
    )
}

export default Navbar;