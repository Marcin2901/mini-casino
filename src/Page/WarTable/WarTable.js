import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WarTable.css";
import cardBack from "../../images/card-back.png";
import { UserCoinsContext } from "../../Context/UserCoinsContextProvider";

const WarTable = () => {

    const [deck, setDeck] = useState();
    const [user, setUser] = useState({card: {}, points: 0, winRound: false, winGame: false});
    const [rival, setRival] = useState({card: {}, points: 0, winRound: false, winGame: false});
    const [warState, setWarState] = useState({isWar: false, rivalWarCard: {}, userWarCard: {}})
    const [endGame, setEndGame] = useState(false)
    const navigate = useNavigate()
    const {userCoins, setUserCoins} = useContext(UserCoinsContext);

    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            setDeck({deckId: data.deck_id, remaining: data.remaining})
        })
    }, [])

    useEffect(() => {
        if(endGame && user.winGame) {
            setUserCoins(prevState => prevState + 10)
        }
    }, [endGame])

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



    const checkWinner = (userCard, rivalCard, warPoints) => {
        if(convertValue(userCard) > convertValue(rivalCard)) {
            setUser(prevState => ({...prevState, winRound: true, points: prevState.points + 1}));
            setRival(prevState => ({...prevState, winRound: false}));
            warPoints ? setUserCoins(prevState => prevState + 5) : setUserCoins(prevState => prevState + 1)
        } else if(convertValue(userCard) === convertValue(rivalCard)) {
            setWarState({isWar: true, rivalWarCard: rival.card, userWarCard: user.card})
            
        } else {
            setUser(prevState => ({...prevState, winRound: false}));
            setRival(prevState => ({...prevState, winRound: true, points: prevState.points + 1}));
            setUserCoins(prevState => prevState - 1)
        }
    }

    const war = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck.deckId}/draw/?count=4`)
        .then(res => res.json())
        .then(data => {
            const userCard = [data.cards.pop(), data.cards.pop()];
            const rivalCard = [data.cards.pop(), data.cards.pop()]
            setUser(prevState => ({...prevState, card: [prevState.card, userCard[0], userCard[1]]}));
            setRival(prevState => ({...prevState, card: [prevState.card, rivalCard[0], rivalCard[1]]}));
            setDeck(prevState => ({...prevState, remaining: prevState.remaining -4 }))
            checkWinner(userCard[1], rivalCard[1], true)
            setWarState({isWar: false, rivalWarCard: {}, userWarCard: {}})
        })
        
    }

    useEffect(() => {
        if(deck && deck.remaining === 0) {
            if(user.points > rival.points) {
                setUser(prevState => ({...prevState, winGame: true}))
            } else {
                setRival(prevState => ({...prevState, winGame: true}))
            }
            setEndGame(true);
        }
    }, [deck])

    const newGame = () => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            setDeck({deckId: data.deck_id, remaining: data.remaining})
            setUser({card: {}, points: 0, winRound: false, winGame: false})
            setRival({card: {}, points: 0, winRound: false, winGame: false})
            setWarState({isWar: false, rivalWarCard: {}, userWarCard: {}})
            setEndGame(false)
            
        })
    }

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
        <div className="arrow-back" onClick={() => navigate("/")}><i className="fas fa-arrow-left"></i></div>
        <div className="table__user-coins">{userCoins}$</div>
        <div className="war-table">
            <div className={rival && (rival.winRound && !warState.isWar) ? "war-table--card__container round-winner" : "war-table--card__container"}>
                { (rival && rival.card.length !== 3 ) ? <img className="war-card--img" src={rival.card.image} alt={"example"}/> : 
                    <>
                         <img className="war-card--img" src={rival.card[0].image} alt={"example"}/>
                         <img className="war--horizontal-card" src={cardBack} alt={"example"}/>
                         <img className="war-card--img" src={rival.card[2].image} alt={"example"}/>
                    </>}
            </div>
            <div className="war-table--info">
                
                <h1 className="war-table--title">War Game</h1>
                {!endGame ? 
                    <>
                    <h4>{deck && deck.remaining === 52 ? "The battle just began" : warState.isWar ? "WAR!" :
                        user.winRound ? "You WIN" : "Rival WIN"}</h4>
                    <span className="war-table--bet-info">Each round costs 1$</span>
                    </> :
                    <h4>{user.winGame ? "You win the WAR +10$" : rival.winGame ? "Rival wins the WAR" : "the WAR ended in a draw"}</h4>
                }
            </div>
            <div className={user && (user.winRound && !warState.isWar) ? "war-table--card__container round-winner" : "war-table--card__container" }>
                { (user && user.card.length !== 3 ) ? <img className="war-card--img" src={user.card.image} alt={"example"}/> : 
                    <>
                         <img className="war-card--img" src={user.card[0].image} alt={"example"}/>
                         <img className="war--horizontal-card" src={cardBack} alt={"example"}/>
                         <img className="war-card--img" src={user.card[2].image} alt={"example"}/>
                    </>}
            </div>
            { !endGame ?
            <button className="primary--btn next-round--btn" onClick={!warState.isWar ? startRound : war}>
                {(deck && deck.remaining !== 52 && !warState.isWar) ? "Next Round" : warState.isWar ? "Start War" : "Start Battle"}
            </button> :
            <button className="primary--btn new-game--btn" onClick={newGame}>New Game</button>

            }
        </div>
    </section>
    )
}

export default WarTable;