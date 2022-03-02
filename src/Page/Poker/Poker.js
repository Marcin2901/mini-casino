import React from "react";
import "./Poker.css";
import pokerImg from "../../images/poker2.png"
import GameFrameComponent from "../../Components/GameFrameComponent/GameFrameComponent";

const Poker = () => {

    const description = `Poker is a card game that involves betting with chips and keeping a
                        straight face. You can also play poker online and make any kind of face
                        you want. Additionally, a poker is a tool you keep by a fireplace.`

    return (
        <section className="game__container container">
            <GameFrameComponent title={"Poker"} img={pokerImg} description={description} link={"/"}/>
        </section>
    )
}

export default Poker;