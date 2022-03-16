import React, { useEffect, useState } from "react";
import "./WarTable.css";
import cardBack from "../../images/card-back.png";

const WarTable = () => {

    const [deck, setDeck] = useState();
    const [user, setUser] = useState({card: {}, points: 0, winRound: false, winGame: false});
    const [rival, setRival] = useState({card: {}, points: 0, winRound: false, winGame: false});
    const [warState, setWarState] = useState({isWar: false, rivalWarCard: {}, userWarCard: {}})

    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            setDeck({deckId: data.deck_id, remaining: data.remaining})
        })
    }, [])

    const startRound = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck.deckId}/draw/?count=2`)
            .then(res => res.json())
            .then(data => {
                const userCard = data.cards.pop();
                const rivalCard = data.cards.pop()
                setUser(prevState => ({...prevState, card: userCard}));
                setRival(prevState => ({...prevState, card: rivalCard}));
                setDeck(prevState => ({...prevState, remaining: prevState.remaining -2 }))
                checkWinner(userCard, rivalCard)
            })
    }



    const checkWinner = (userCard, rivalCard) => {
    
        if(convertValue(userCard) > convertValue(rivalCard)) {

            setUser(prevState => ({...prevState, winRound: true, points: prevState.points + 1}));
            setRival(prevState => ({...prevState, winRound: false}));
            console.log("wygrałeś")
        } else if(convertValue(userCard) === convertValue(rivalCard)) {
            war()
        } else {
            console.log("przegrałeś")
            setUser(prevState => ({...prevState, winRound: false}));
            setRival(prevState => ({...prevState, winRound: true, points: prevState.points + 1}));
        }
    }

    const war = () => {
        setWarState({isWar: true, rivalWarCard: rival.card, userWarCard: user.card})
        startRound()
    }

    useEffect(() => {
        if(deck && deck.remaining === 0) {

        }
    }, [deck])

    const convertValue = (card) => {  
            if(!parseInt(card.value)) {
                if(card.value === "ACE") {
                    return 14;
                } else if(card.value === "KING") {
                    return 13;
                } else if(card.value === "QUEEN") {
                    return 12;
                } else {
                    return 11;
                }
            }
            return parseInt(card.value);
    }


    return (
    <section className="table">
        <div className="war-table">
            <div className="war-table--card__container">
                { rival && <img className="war-card--img" src={rival.card.image}/>}
            </div>
            <div className="war-table--info">
                <h1 className="war-table--title">War</h1>
                <span className="war-table--bet-info">Each round costs 1$</span>
            </div>
            <div className="war-table--card__container">
                { (user && !warState.isWar ) ? <img className="war-card--img" src={user.card.image}/> :
                    <>
                        <img className="war-card--img" src={warState.userWarCard}/>
                        <img className="war-card--img" src={cardBack}/>
                    </>
                }
            </div>
            <button className="primary--btn next-round--btn" onClick={startRound}>{(deck && deck.remaining !== 52) ? "Next Round" : "Start War"}</button>
        </div>
    </section>
    )
}

export default WarTable;