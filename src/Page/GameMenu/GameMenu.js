import React, {useEffect, useState} from "react";
import "./GameMenu.css";
import {Link} from "react-scroll"

const GameMenu = () => {

    return (
        
        <section id="gameMenu" className="game--menu">
            <h2 className="game--menu__title">Games Menu</h2>
             <div className="game-box">
                 <h4 className="game-name">Poker</h4>
                 <Link className="primary--btn menu--btn " to="poker" smooth={true} duration={1000} offset={-100}>Go</Link>
             </div>
             <div className="game-box">
                 <h4 className="game-name">Black Jack</h4>
                 <Link className="primary--btn menu--btn " to="blackJack" smooth={true} duration={1000} offset={-100}>Go</Link>
             </div>
             
             <div className="game-box">
                 <h4 className="game-name">War</h4>
                 <Link className="primary--btn menu--btn " to="war" smooth={true} duration={1000} offset={-100}>Go</Link>
             </div>
             <div className="game-box">
                 <h4 className="game-name">Poker 5 Cards</h4>
                 <Link className="primary--btn menu--btn " to="poker5Cards" smooth={true} duration={1000} offset={-100}>Go</Link>
             </div>
             <div className="game-box">
                 <h4 className="game-name">Roulette</h4>
                 <button className="primary--btn menu--btn">Go</button>
             </div>
        </section>
    )
}

export default GameMenu;