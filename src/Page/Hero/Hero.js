import React from "react";
import "./Hero.css";
import heroCards from "../../images/hero-cards.png"

const Hero = () => {
    return (
        <section className="casino--hero">
            <div className="hero__content">
                <h1 className="casino--hero__title">Mini Casino</h1>
                <h2 className="casino--hero__text">Play, Earn and have fun with all our games</h2>
                <button className="primary--btn">Play Games</button>
            </div>
            <img className="hero-img"  src={heroCards}/>
            <div className="transparent-box"></div>
        </section>
    )
}

export default Hero