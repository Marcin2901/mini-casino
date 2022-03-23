import React, {useState} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import casinoLogo from "../../images/casino-logo.png"


const Navbar = () => {

    const [hamburger, setHamburger] = useState(false)

    return (
        <nav className="nav">
            <div className="nav--left">
                <h4>Mini Casino</h4>
                {/* <i class="fas fa-life-ring"></i> */}
                {/* <i class="fas fa-spade"></i> */}
                <img className="logo" src={casinoLogo} />
            </div>
            <div className={`nav--hamburger ${hamburger && "nav--hamburger-active"}`} onClick={() => setHamburger(prevState => !prevState)}>
                <div className={`nav--hamburger-line ${hamburger && "nav--hamburger-line--x"}`}></div>
            </div>
            <ul className={`nav--right ${hamburger && "nav--right-hamburger"}`}>
                <Link to={"/"} className="active">Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/games"}>Games</Link>
                <Link to={"/user"}><i class="far fa-user"></i> <span>1000$</span></Link>
            </ul>
        </nav>
    )
}

export default Navbar;