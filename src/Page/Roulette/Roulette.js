import React from "react"
import rouletteImg from "../../images/roulette.jpg";
import GameFrameComponent from "../../Components/GameFrameComponent/GameFrameComponent";

const Roulette = () => {

    const description = `roulette, gambling game in which players
                         bet on which red or black numbered compartment of a revolving wheel a small
                         ball will come to rest within. Bets are placed
                         on a table marked to correspond with the compartments of the wheel.`

    return (
        <section className="game__container container">
             <GameFrameComponent title={"Roulette"} img={rouletteImg} description={description} link={"/"}/>
        </section>
    )
}

export default Roulette;