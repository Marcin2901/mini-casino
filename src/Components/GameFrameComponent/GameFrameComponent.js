import React from "react";
import "./GameFrameComponent.css";
import {Link} from "react-router-dom";

const GameFrameComponent = (props) => {

    const {title, img, description, link} = props;

    return (
        <div className="game--frame">
            <img className="game--frame__img" src={img}/>
            <div className="game--frame__content">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>Rouls</h4>
                <Link to={link}>
                     <p className="link-text">Click here to see all {title} rouls</p>
                </Link>
                <Link to={link} className="play--btn">
                    <button className={`${title === "Roulette" && "not-available--btn"} primary--btn primary--btn-m`}>
                        {title === "Roulette" ? "Not available yet" : "Play"}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default GameFrameComponent;