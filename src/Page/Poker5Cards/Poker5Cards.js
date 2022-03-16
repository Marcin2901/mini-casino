import React from "react";
import GameFrameComponent from "../../Components/GameFrameComponent/GameFrameComponent";
import poker5CardsImg from "../../images/poker-5-card-bg.jpg"

const Poker5Cards = () => {

    const description = `Five-card draw (also known as a Cantrell draw) is a poker variant that is considered the
                         simplest variant of poker, and is the basis for video poker. As a result, it is often the
                         first variant learned by new players. It is commonly played in home games but rarely played
                         in casino and tournament play.`;

    return (
        <section id="poker5Cards" className="game__container container">
            <GameFrameComponent title="Poker 5 Cards" img={poker5CardsImg} description={description} link={"/pokerFiveCards"} />
        </section>
    )
}

export default Poker5Cards;