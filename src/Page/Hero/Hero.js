import React from "react";
import "./Hero.css";
import heroCards from "../../images/hero-cards.png";
import {Link} from "react-scroll"

const Hero = () => {
    return (
        <section className="casino--hero">
            <div className="hero__content">
                <h1 className="casino--hero__title">Mini Casino</h1>
                <h2 className="casino--hero__text">Play, Earn and have fun with all our games</h2>
                <Link className="primary--btn hero--btn" to="gameMenu" duration={1000} smooth={true} offset={100}>Play Games</Link>
            </div>
            <img className="hero-img"  src={heroCards} alt={"example"}/>
            <div className="transparent-box"></div>
        </section>
    )
}

export default Hero