import React from "react";
import GameFrameComponent from "../../Components/GameFrameComponent/GameFrameComponent";
import blackJackImg from "../../images/black-jack.jpg";

const BlackJack = () => {

    const description = `blackjack, or twenty-one, Card game whose object is to be dealt cards having
                         a higher count than those of the dealer, up to but not exceeding 21. The dealer
                         may use six decks of 52.
                         Aces count as 1 or 11, and face cards as 10.`

    return (
        <section id="blackJack" className="game__container container">
            <GameFrameComponent  title={"Black Jack"} img={blackJackImg} description={description} link={"/blackJack"} />
        </section>
    )
}

export default BlackJack