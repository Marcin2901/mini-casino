import React from "react";
import GameFrameComponent from "../../Components/GameFrameComponent/GameFrameComponent";
import thousandImg from "../../images/thousand2.png";

const Thousand = () => {

    const description = `Thousand Schnapsen, 1000 or Tysiacha is a trick-taking game of the Ace-Ten
                         family for three players, the aim of which is to score over 1000 points to win the game.`;

    return (
        <section className="game__container container">
            <GameFrameComponent title="Thousand - 1000" img={thousandImg} description={description} link={"/"} />
        </section>
    )
}

export default Thousand;