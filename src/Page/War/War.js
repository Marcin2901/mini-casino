import React from "react";
import GameFrameComponent from "../../Components/GameFrameComponent/GameFrameComponent";
import warImg from "../../images/war.png";

const War = () => {

    const description = `War, or Battle, is a played with two players and a standard 52
                         playing card deck. In War, cards are ranked Aces high and 2s low.
                         The objective of the game is to win all of the cards in the deck.`;

    return (
        <section className="game__container container">
            <GameFrameComponent title={"War"} img={warImg} description={description} link={"/war"} />
        </section>
    )
}

export default War;