import React, {useContext, useEffect, useState} from "react";
import "./Navbar.css";
import {Link, useLocation} from "react-router-dom";
import casinoLogo from "../../images/casino-logo.png";
import { UserCoinsContext } from "../../Context/UserCoinsContextProvider";



const Navbar = () => {

    const [hamburger, setHamburger] = useState(false)
    const {userCoins} = useContext(UserCoinsContext);
    const navigate = useLocation();
    useEffect(() => {

        console.log(navigate.pathname)
    })

    return (
        <nav className="nav">
            <div className="nav--left">
                <h4>Mini Casino</h4>
                <img className="logo" src={casinoLogo} />
            </div>
            <div className={`nav--hamburger ${hamburger && "nav--hamburger-active"}`} onClick={() => setHamburger(prevState => !prevState)}>
                <div className={`nav--hamburger-line ${hamburger && "nav--hamburger-line--x"}`}></div>
            </div>
            <ul className={`nav--right ${hamburger && "nav--right-hamburger"}`}>
                <Link to={"/"} className={` ${navigate.pathname === "/" ? "active" : ""}`}>Home</Link>
                <Link to={"/about"} className={` ${navigate.pathname === "/about" ? "active" : ""}`}>About</Link>
                <Link to={"/games"} className={` ${navigate.pathname === "/games" ? "active" : ""}`}>Games</Link>
                <Link to={"/user"} className={` ${navigate.pathname === "/user" ? "active" : ""}`}><i class="far fa-user"></i> <span>{userCoins}$</span></Link>
            </ul>
        </nav>
    )
}

export default Navbar;