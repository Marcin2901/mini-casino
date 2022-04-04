import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import "./BlackJackTable.css";
import { UserCoinsContext } from "../../Context/UserCoinsContextProvider";

const BlackJackTable = () => {

    const navigate = useNavigate();
    const [resetGame, setResetGame] = useState(false);
    const [deck, setDeck] = useState();
    const [dilletBox, setDillerBox] = useState({
        value: 0,
        img: ""
    })
   
    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
            .then(res => res.json())
            .then(data => {
                setDeck({remaining: data.remaining, deck_id: data.deck_id})
                dillerDraw(data.deck_id);
            })
    }, [resetGame])

    const dillerDraw = (deckId) => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res => res.json())
        .then(data => { 
            const card = data.cards[0];
            const cardValue = calculateValue(card, dilletBox)
            setDillerBox(prevState => ({
                value: prevState.value + cardValue,
                img: card.image
            }))
            
        })
    }

    const [endGame, setEndGame] = useState(false)
    const [boxQuantity, setBoxQuantity] = useState(5)
    const [currentBox, setCurrentBox] = useState(0);
    const getBoxSet = () => {
        const boxArray = [];
        for(let i=0; i<boxQuantity; i++) {
            boxArray.push({value: 0, img: "", pass: false, win: false, draw: false});
        }
        return boxArray;
    }
    const [cardsInBox, setCardsInBox] = useState(getBoxSet())
    const [coinsQuantity, setCoinsQuantity] = useState(0)
    const {userCoins, setUserCoins} = useContext(UserCoinsContext)
    useEffect(() => {
        if(endGame) {
            let coins = 0;
            cardsInBox.forEach(box => {
                if(box.win) coins += 20;
                else if(!box.draw) coins -=10 
            })
            setCoinsQuantity(coins)
            setUserCoins(prevState => prevState + coins)
        }
    }, [endGame])

    const draw = (value) => {
        value < 21 && 
        fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
            .then(res => res.json())
            .then(data => { 
                console.log(data.cards)
                const card = data.cards[0];
                const cardValue = calculateValue(card, cardsInBox[currentBox])
                setCardsInBox(prevState => ( 
                    [ ...prevState.slice(0, currentBox),  
                      { value: prevState[currentBox].value + cardValue,
                        img: card.image,
                        pass: prevState[currentBox].value + cardValue >=21 ? true : prevState[currentBox].pass,
                        win: prevState[currentBox].win,
                        draw: prevState[currentBox].draw},
                      ...prevState.slice(currentBox+1, boxQuantity)
                    ]
                ))
            })
        }
    
        useEffect(()=> {
            if(currentBox < boxQuantity && cardsInBox[currentBox].pass)
                 setCurrentBox(prevState => prevState + 1);

            const checkGameResults = () => {
                cardsInBox.forEach(box => {
                    if(box.value > 21) {
                        box.win = false;
                    }
                    else if(dilletBox.value > 21) {
                        box.win = true;
                    } else if (box.value > dilletBox.value) {
                        box.win = true;
                    } else if(box.value === dilletBox.value){
                        box.draw = true;
                    }
                })
                setEndGame(true);
            }
        
            if(cardsInBox.filter(box => box.pass === true).length === boxQuantity && !endGame) {
                   
                setTimeout(() => {
                    if(dilletBox.value < 17) {
                        dillerDraw(deck.deck_id)
                    } else {
                        checkGameResults()
                    }
                }, 1000)        
            }
        }, [cardsInBox, dilletBox])

    const calculateValue = (card, player) => {
        if(!parseInt(card.value)) {
            if(card.value === "ACE") {
                if(player.value + 11 > 21) {
                    return 1
                } 
                return 11
            }
            return 10
        }
        return parseInt(card.value)
    }

    const pass = () => {
        setCardsInBox(prevState => ( 
            [ ...prevState.slice(0, currentBox),  
              { ...prevState[currentBox],
                pass: true},
              ...prevState.slice(currentBox+1, boxQuantity)
            ]
        ))
        setCurrentBox(prevState => prevState + 1);
    }
    
    const handleSummaryColor = (boxNr) => {
        if(cardsInBox[boxNr].value > 21 && cardsInBox[boxNr].pass) {
            return {color: "rgb(151, 22, 22)",  textShadow: "0px 0px 10px #fff"} 
        } else if (cardsInBox[boxNr].value < 21 && cardsInBox[boxNr].pass) {
            return {color:  "rgb(27, 233, 45)",  textShadow: "0px 0px 10px #000"} 
        } else if(cardsInBox[boxNr].value === 21) {
            return {color: "#e9c966",  textShadow: "0px 0px 15px #e9c966"} 
        }
         else {
            return {color: "#fff"};
        }
    }

    const handleBoxState = (boxNr) => {
        if(endGame && cardsInBox[boxNr].win) {
            return "box-winner";
        }else if(endGame && cardsInBox[boxNr].draw) {
            return "box-draw"
        } else if(endGame && ! cardsInBox[boxNr].win) {
            return "box-loser";
        }
        return "";
    }

    const newGame = () => {
        setDillerBox({ value: 0, img: "" })
        setEndGame(false);
        setBoxQuantity(5);
        setCurrentBox(0)
        setCardsInBox(getBoxSet());
        if(deck.remaining < 50)
        setResetGame(prevState => !prevState)
        else 
        dillerDraw(deck.deck_id)
    }

    return (
        <section className="table">
            <div className="arrow-back" onClick={() => navigate("/")}><i className="fas fa-arrow-left"></i></div>
            <div className="table__user-coins">{userCoins}$</div>
            <section className="black-jack__table">
                <h3 className="balck-jack__table--title">BLACKJACK</h3>
                <div className="deller-box">
                      {dilletBox.img && <img src={dilletBox.img} alt={"example"}/> }
                      <h6 style={{color: "#000"}}>Suma: {dilletBox.value}</h6>  
                </div>
                <div className="player-box__container">

                    <div className="player-box__content box-1">
                        <div className={!cardsInBox[0].pass ? "player-box"  : "player-box disabled"}>
                            {cardsInBox[0].img && <img src={cardsInBox[0].img} alt={"example"}/> }
                            <h6 style={handleSummaryColor(0)}>Suma: {cardsInBox[0].value}</h6>   
                        </div>
                        <div className={handleBoxState(0)}></div>
                    </div>

                    <div className="player-box__content box-2">
                        <div className={!cardsInBox[1].pass ? "player-box"  : "player-box disabled"}>
                            {cardsInBox[1].img && <img src={cardsInBox[1].img} alt={"example"}/> }
                            <h6 style={handleSummaryColor(1)}>Suma: {cardsInBox[1].value}</h6>   
                        </div>
                        <div className={handleBoxState(1)}></div>
                    </div>

                    <div className="player-box__content box-3">
                        <div className={!cardsInBox[2].pass ? "player-box"  : "player-box disabled"}>
                            {cardsInBox[2].img && <img src={cardsInBox[2].img} alt={"example"}/> }
                            <h6 style={handleSummaryColor(2)}>Suma: {cardsInBox[2].value}</h6>   
                        </div>
                        <div className={handleBoxState(2)}></div>
                    </div>

                    <div className="player-box__content box-4">
                        <div className={!cardsInBox[3].pass ? "player-box"  : "player-box disabled"}>
                            {cardsInBox[3].img && <img src={cardsInBox[3].img} alt={"example"}/> }
                            <h6 style={handleSummaryColor(3)}>Suma: {cardsInBox[3].value}</h6>   
                        </div>
                        <div className={handleBoxState(3)}></div>
                    </div>

                    <div className="player-box__content box-5">
                        <div className={!cardsInBox[4].pass ? "player-box"  : "player-box disabled"}>
                            {cardsInBox[4].img && <img src={cardsInBox[4].img} alt={"example"}/> }
                            <h6 style={handleSummaryColor(4)}>Suma: {cardsInBox[4].value}</h6>   
                        </div>
                        <div className={handleBoxState(4)}></div>
                    </div>
                </div>
                <div className="buttons-wrapper">
                    {!endGame ? 
                    <><button className={`primary--btn draw--btn ${!cardsInBox[currentBox] && "btn-disabled"}`} onClick={() => draw(cardsInBox[currentBox].value)}>Draw</button>
                    <button className={`primary--btn pass--btn ${!cardsInBox[currentBox] || cardsInBox[currentBox].value === 0 ? "btn-disabled" : ""}`}
                            onClick={cardsInBox[currentBox] && cardsInBox[currentBox].value !== 0 && pass}> Pass
                    </button></> 
                    :
                    <button className="primary--btn new-game--btn" onClick={newGame}>New Game</button>
                    }
                </div> 
            </section>
            {endGame && 
            <div className="end-game__modal">
                <h2 className="end-game__modl--text">{endGame && coinsQuantity >= 0 ? `You win ${coinsQuantity}$` : `You lose ${coinsQuantity}$`}</h2>
            </div>}
        </section>
        
    )
}

export default BlackJackTable;