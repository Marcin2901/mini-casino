import React from "react";
import "./GameMenu.css";

const GameMenu = () => {
    return (
        <section className="game--menu">
            <h2 className="game--menu__title">Games Menu</h2>
             <div className="game-box">
                 {/* <img src={pokerMenuImg}/> */}
                 <h4 className="game-name">Poker</h4>
                 <button className="primary--btn menu--btn ">Go</button>
             </div>
             <div className="game-box">
                 {/* <img src={blackJackMenuImg} /> */}
                 <h4 className="game-name">Black Jack</h4>
                 <button className="primary--btn menu--btn">Go</button>
             </div>
             <div className="game-box">
                 {/* <img src={RouletteMenuImg} /> */}
                 <h4 className="game-name">Roulette</h4>
                 <button className="primary--btn menu--btn">Go</button>
             </div>
             <div className="game-box">
                 {/* <img src={WarMenuImg} /> */}
                 <h4 className="game-name">War</h4>
                 <button className="primary--btn menu--btn">Go</button>
             </div>
             <div className="game-box">
                 {/* <img src={ThousandMenuImg} /> */}
                 <h4 className="game-name">Thousand</h4>
                 <button className="primary--btn menu--btn">Go</button>
             </div>
        </section>
    )
}

export default GameMenu;