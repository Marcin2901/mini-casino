import React, {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./PokerFiveCardsTable.css";
import userImg from "../../images/user-img.png";
import rivalImg from "../../images/rival-img.jpg";
import cardBack from "../../images/card-back.png";
import { UserCoinsContext } from "../../Context/UserCoinsContextProvider";

const PokerFiveCardsTable = () => {

    const [deckId, setDeckId] = useState();
    const [user, setUser] = useState();
    const [rivales, setRivales] = useState();
    const [betValue, setBetValue] = useState(0)
    const [currentBet, setCurrentBet] = useState(5);
    const [playerMove, setPlayerMove] = useState(true);
    const [endGame, setEndGame] = useState(false)
    const [correction, setCorrection] = useState(false)
    const {userCoins, setUserCoins} = useContext(UserCoinsContext);

    const [round, setRound] = useState(0)
    const [callGame, setCallGame] = useState(false)
    const [cardsToChange, setCardToChange] = useState([])
    const [changed, setChanged] = useState(false)
    const [licitate, setLicitate] = useState({});
    const [change, setChange] = useState(false)
    const [userFold, setUserFold] = useState(false)
    const navigate = useNavigate();
    
    
    //pobranie tali kart i rozdanie każdemu po 2 karty
    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then(res => res.json())
            .then(data => {
                setDeckId(data.deck_id)
                startGame(data.deck_id);
            })
    }, [])

    const startGame = (id) => {
        fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=20`)
            .then(res => res.json())
            .then(data => {
                const cards = data.cards;
                setUser(
                   {name: "user", userCards: getCards(cards, 5), value: 0, allIn: false, winner: false}
                )
                setRivales([
                    {name: "rival1", rivalCards: getCards(cards, 5), value: 0, allIn: false, winner: false},
                    {name: "rival2", rivalCards: getCards(cards, 5), value: 0, allIn: false, winner: false},
                    {name: "rival3", rivalCards: getCards(cards, 5), value: 0, allIn: false, winner: false}
                ])
                setLicitate({user: 0, rival1: 0, rival2: 0, rival3: 0})
            })
    }

    const getCards = (cards, quantity) => {
        const cardsArray = []
        for(let i=0; i<quantity; i++) {
            cardsArray.push(cards.pop())
        }
        return convertValue(cardsArray).sort((a, b) => a.value - b.value);
    }

    useEffect(() => {
        if(round === 3) {
            setEndGame(true)
            let result = !userFold ? checkHand(user.userCards) : {value: -1};
            let handValue = convertValue(user.userCards).reduce((acumulato, current) => acumulato + current.value, 0)
          
            rivales.forEach(rival => {
                let rivalResult = checkHand(rival.rivalCards);
                if(result.value < rivalResult.value) {
                    result = rivalResult;
                    handValue = convertValue(rival.rivalCards).reduce((acumulato, current) => acumulato + current.value, 0)
                }else if(result.value === 0 && rivalResult.value === 0) {
                    let currentPlayerCardsValue = convertValue(rival.rivalCards).reduce((acumulato, current) => acumulato + current.value, 0)
                    if(handValue < currentPlayerCardsValue) {
                        result = rivalResult
                        handValue = currentPlayerCardsValue
                    }
                }
                 else if(result.value === rivalResult.value) {
                    let firstPlayerCardsValue = result.cards.reduce((acumulator, current) => acumulator + current.value, 0);
                    let secondPlayerCardsValue = rivalResult.cards.reduce((acumulator, current) => acumulator + current.value, 0);
                    if(firstPlayerCardsValue < secondPlayerCardsValue) {
                        result = rivalResult 
                    }
                    else if(firstPlayerCardsValue === secondPlayerCardsValue) {
                        let currentPlayerCardsValue = convertValue(rival.rivalCards).reduce((acumulato, current) => acumulato + current.value, 0)
                        if(handValue < currentPlayerCardsValue) {
                            result = rivalResult
                            handValue = currentPlayerCardsValue
                        }
                    }
                }              
            })
         
            if(JSON.stringify(checkHand(user.userCards)) === JSON.stringify(result) && !userFold) {
                setUser(prevState => ({...prevState, winner: true}))
            } else {
                const winnerRival = rivales.find(rival => JSON.stringify(checkHand(rival.rivalCards)) === JSON.stringify(result))
                setRivales(prevState => {
                    const nextState = [];
                    for(let obj of prevState) {
                        if(obj === winnerRival)
                        nextState.push({...obj, winner: true})
                        else
                        nextState.push(obj)
                    }
                    return nextState
                })
            }
        }
    }, [round])

    useEffect(() => {
        const licitateArray = []
        let bigestLicitate = licitate.user;
        for(let key in licitate) {
            if(licitate[key] === bigestLicitate) 
                licitateArray.push(1);
        }
        if(licitateArray.length !== 4) {    
            setCorrection(true)
        } else {
            setRound(prevState => prevState + 1)
        }
    }, [change])

    useEffect(() => {
        if(!playerMove) {
            if(licitate.rival1 === 0) {
                rivales.forEach(rival => call(rival.name));
            }
            else if(!correction) {
            rivales.forEach(rival => {
                const hand = checkHand(rival.rivalCards);
                switch (hand.name) {
                    case "nothing" : {
                        call(rival.name);
                        break;
                    }
                    case "pair" : {
                        rivalBet(rival.name, rivalsBet(rival, 5, 10))
                        break;
                    }
                    case "double pair" : {
                        rivalBet(rival.name, rivalsBet(rival, 15, 26))
                        break;
                    }
                    default : {
                        rivalBet(rival.name, rivalsBet(rival, 25, 40))
                    }
                }
            })
            } else {
                rivales.forEach(rival => call(rival.name));
                setCorrection(false);
            } 
            setPlayerMove(true);

        } else {
            let bigestLicitate = licitate.user;
            for(let key in licitate) {
                if(licitate[key] > bigestLicitate) 
                     bigestLicitate = licitate[key];
            }
            if(bigestLicitate >= currentBet) {
                setCurrentBet(bigestLicitate);
                setChange(prevState => !prevState)
            }
        }
    }, [playerMove])

    useEffect(() => {
        if(endGame && user.winner) {
            setUserCoins(prevState => prevState + licitate.user + licitate.rival1 + licitate.rival2 + licitate.rival3)
        }
    }, [endGame])

    const startLicitation = (func) => {
        func("user", betValue)
    }

    const call = (licitator) => {
        if(licitate[licitator] !== currentBet)  {
            setLicitate(prevState => ({...prevState, [licitator]: currentBet}))
            setPlayerMove(false)
            if(!callGame) setCallGame(true);
            JSON.stringify(licitate[licitator]) === JSON.stringify(licitate.user) && setUserCoins(prevState => prevState - currentBet)
        }
    }

    const bet = (licitator, value) => {
            if(parseInt(value) + licitate[licitator] > currentBet) {
                const newValue = licitate[licitator] + parseInt(value);
                setLicitate(prevState => ({...prevState, [licitator]:  newValue}));
                setCurrentBet(newValue)
                setPlayerMove(false)
                setUserCoins(prevState => prevState - value)
            }
    }

    const rivalBet = (licitator, value) => {
        const newValue = licitate[licitator] + parseInt(value);
        setLicitate(prevState => ({...prevState, [licitator]:  newValue > currentBet ? newValue : currentBet}));
    }

    const newGame = () => { 
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            setDeckId(data.deck_id)
            startGame(data.deck_id);
            setBetValue(0)
            setCurrentBet(5)
      
            setEndGame(false)
            setUserFold(false)
            setChanged(false)
            setCallGame(false);
            setCardToChange([])
            setRound(0)
        })
    
    }

    const fold = () => {
        rivalChange();
        setTimeout(() => {
            setUserFold(true)
            setEndGame(true)
            const mockLicitate = getRandomNumber(currentBet, currentBet + 50)
            setLicitate(prevState => ({...prevState, rival1: mockLicitate, rival2: mockLicitate, rival3: mockLicitate}))
            setRound(3);
        }, 500)
        
        
    }

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const handleInput = (event) => {
        setBetValue(event.target.value)
    }    

    // //oblicza ile rywal ma założyć
    const rivalsBet = (rival, min, max) => {
        const bet = Math.floor(Math.random() * (max - min)) + min
        setRivales(prevState => {
            const nextState = [];
            for(let obj of prevState) {
                if(obj === rival)
                nextState.push({...obj, value: obj.value + bet >= currentBet ? obj.value + bet : currentBet})
                else
                nextState.push(obj)
            }
            return nextState
        })
        return rival.value + bet
    }

    const checkHand = (hand) => {
        const allCards = convertValue(hand).sort((a, b) => a.value - b.value)

        if(isPoker(allCards)) return isPoker(allCards);
        else if(isSmallPoker(allCards)) return isSmallPoker(allCards);
        else if(isCareta(allCards)) return isCareta(allCards);
        else if(isFull(allCards)) return isFull(allCards);
        else if(isColor(allCards)) return isColor(allCards);
        else if(isStrit(allCards)) return isStrit(allCards);
        else if(isThree(allCards)) return isThree(allCards);
        else if(isDoublePair(allCards)) return isDoublePair(allCards);
        else if(isPair(allCards)) return isPair(allCards);
        else return {name: "nothing", value: 0, card: hand}
    }

    const isPair = (cardsArray) => {
        let result = false;
        cardsArray.forEach((card, index) => {
            if(index+1<cardsArray.length && card.value === cardsArray[index+1].value) {
                result = {name: "pair" , cards: [card, cardsArray[index+1]], value: 1};
            }
        })
        return result
    }

    const isDoublePair = (cardsArray) => {
        let result = false;
        cardsArray.forEach((card, index) => {
            if(index+1<cardsArray.length && card.value === cardsArray[index+1].value) {
                const pair = isPair(cardsArray.filter(c => c !== card && c !== cardsArray[index+1]))
                if(pair)
                result =  {name: "double pair", cards: [card, cardsArray[index+1], pair.cards[0], pair.cards[1]], value: 2}
            }
        })
        return result
    }

    const isThree = (cardsArray) => {
        let result = false;
        cardsArray.forEach((card, index) => {
            if(index+2>=cardsArray.length) return false;
            if(card.value === cardsArray[index+1].value && card.value === cardsArray[index+2].value) {
                result = {name: "three", cards: [card, card, card], value: 3};
            }
        })
        return result;
    }

    const isFull = (cardsArray) => {
        let result = false
        cardsArray.forEach((card, index) => {
            if(index+2>=cardsArray.length) return false;
            if(card.value === cardsArray[index+1].value && card.value === cardsArray[index+2].value) {
                result = {name: "full", cards: [card, isPair(cardsArray.filter(c => c !== card && c !== cardsArray[index+1] && c !== cardsArray[index+2]))],
                isPair: isPair(cardsArray.filter(c => c !== card && c !== cardsArray[index+1] && c !== cardsArray[index+2])), value: 4};
            }
        })
        return result.isPair ? result : false;
    }

    const isStrit = (cardsArray) => {
        let quantity = 0;
        let result = false;
        cardsArray.forEach((card, index) => {
            if(index+1 < cardsArray.length && card.value === cardsArray[index + 1].value -1) {
                let bestCard = cardsArray[index + 1];
                quantity ++;
                if(quantity === 4) result = {name: "strit", cards: [bestCard, bestCard], value: 5};    
            }else  if(index+1 < cardsArray.length && card.value === cardsArray[index + 1].value)  {
                
            } else {
                quantity = 0;
            }
        })
        return result
    }

    const isColor = (cardsArray) => {
        const colors = {
            HEARTS: [],
            DIAMONDS: [],
            SPADES: [],
            CLUBS: [],
        };
        cardsArray.forEach((card) => {
            colors[card.suit].push(card)
        })
        for(const key in colors) {
            if(colors[key].length > 4) 
            return {name: "color", char: key, cards: colors[key] , value: 6};
        }
        return false
    }

    const isCareta = (cardsArray) => {
        let result = false;
        cardsArray.forEach((card, index) => {
            if(index+3>=cardsArray.length) return false;
            if(card.value === cardsArray[index+1].value && card.value === cardsArray[index+2].value && card.value === cardsArray[index+3].value) {
                result = {name: "careta", cards: [card.value === cardsArray[index+1].value && card.value === cardsArray[index+2].value && card.value === cardsArray[index+3].value], vlaue: 7};
            }
        })
        return result;
    }

    const isSmallPoker = (cardsArray) => {
        if(isStrit(cardsArray) && isColor(cardsArray)) return {name: "small poker", color: isColor(cardsArray), cards: isStrit(cardsArray).cards, value: 8};
        return false;
    }

    const isPoker = (cardsArray) => {
        if(isSmallPoker(cardsArray) && cardsArray[0].value === 10) return {name: "poker", color: isColor(cardsArray), cards: isStrit(cardsArray).cards, value: 9};
        return false;
    }

    const convertValue = (array) => {
       
        return array.map(elem => {
            if(!parseInt(elem.value)) {
                if(elem.value === "ACE") {
                    return {value: 14, suit: elem.suit, image: elem.image};
                } else if(elem.value === "KING") {
                    return {value: 13, suit: elem.suit, image: elem.image};
                } else if(elem.value === "QUEEN") {
                    return {value: 12, suit: elem.suit, image: elem.image};
                } else {
                    return {value: 11, suit: elem.suit, image: elem.image};
                }
            }
            return {value: parseInt(elem.value), suit: elem.suit, image: elem.image};
        })
    }

    const addCardToChange = (card) => {
        cardsToChange.find(c =>  c === card) ?
            setCardToChange(prevState => prevState.filter(c => c !== card)):
            setCardToChange(prevState => [...prevState, card]) ;
    }

    const changeCards = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardsToChange.length}`)
            .then(res => res.json())
            .then(data => {
                const cards = data.cards;
                setUser(prevState => ({...prevState,
                                      userCards: prevState.userCards.filter(card => !cardsToChange.find(c => c === card))
                                                                    .concat(getCards(cards, cardsToChange.length))}))
                setCardToChange([])
                setChanged(true);
                rivalChange()
            })
    }

    const rivalChangeCards = (rival, quantity, bedCard) => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${quantity}`)
            .then(res => res.json())
            .then(data => {
                const cards = data.cards;
                setRivales(prevState => (prevState.map(r => r !== rival ? r : 
                                        {...rival, rivalCards: convertValue(rival.rivalCards).filter(card => !bedCard.find(c => JSON.stringify(c) === JSON.stringify(card)))
                                                                               .concat(getCards(cards, quantity))})))
            })
    }

    const rivalChange = () => {
        rivales.forEach(rival => {
            const rivalHand = checkHand(rival.rivalCards);
            switch (rivalHand.name) {
                                case "nothing" : {
                                    rivalChangeCards(rival, 5, convertValue(rival.rivalCards))
                                    break;
                                }
                                case "pair" : {
                                    //wymien 3 pozostale
                                    rivalChangeCards(rival, 3, convertValue(rival.rivalCards).filter(card => !rivalHand.cards.find(c => JSON.stringify(c) === JSON.stringify(card))))
                                    break;
                                }
                                case "double pair" : {
                                    //wymien jedna
                                    rivalChangeCards(rival, 1, rival.rivalCards.filter(card => !rivalHand.cards.find(c => JSON.stringify(c) === JSON.stringify(card))))
                                    break;
                                }
                                case "three" : {
                                    //wymien jedna lub dwie
                                    rivalChangeCards(rival, 2, rival.rivalCards.filter(card => !rivalHand.cards.find(c => JSON.stringify(c) === JSON.stringify(card))))
                                    break;
                                }
                                default : {
                                    //nic nie wymieniaj
                                }
                            }


        })
    }

    return (
        <section className="table">
            <div className="arrow-back" onClick={() => navigate("/")}><i className="fas fa-arrow-left"></i></div>
            <div className="table__user-coins">{userCoins}$</div>
            <div className="poker__table poker-5-cards">

                <h1 className="poker__table--title">Poker 5 Cards</h1>
                <div className="summary">
                    <span >{currentBet === 5 ? "Minimum call to play:" : "Current Bet: "} {currentBet}$</span>
                    <span >Total: {licitate.user + licitate.rival1 + licitate.rival2 + licitate.rival3}$</span>
                </div>

                <div className={`player-container ${userFold && "fold"}`}>
                    <div className="player-container--header">
                        <div className="img-box">
                            <img src={userImg} alt={"example"}/>
                        </div>
                        <div className="player-info">
                            <h2>User</h2>    
                            {endGame && <span>{!userFold ? checkHand(user.userCards).name : "Fold"}</span>}
                            {round === 0 && <span className="round-info">You have to call to see your cards</span>}
                            {round === 1 && <span className="round-info">You start the first betting round</span>}
                            {(round === 2 && !changed) && <span className="round-info">Click the card that you want to change</span>}
                            {round === 2 && changed && <span className="round-info">You start the second betting round</span>}
                        </div>
                    </div>
                    <div className="player-box">
                        {user &&
                        user.userCards.map((card, i) => <img key={i} className={`card-img user-card ${cardsToChange.find(c => c===card) && "card-active"}`}
                                                        src={callGame ? card.image : cardBack} 
                                                        onClick={() => round === 2 ? addCardToChange(card) : undefined}
                                                        alt={"example"}
                                                    />)
                        }
                    </div>
                    {user && <span className="bet-value">bet: {licitate.user}$</span>}
                    {user && user.winner && <div className="poker-winner"></div>}
                </div>
                <div className="rival-container rival-container-1">
                    <div className="player-container--header">
                        <div className="img-box">
                            <img src={rivalImg} alt={"example"}/>
                        </div>
                        <div className="player-info">
                            <h2>Rival</h2>    
                            {endGame && <span>{checkHand(rivales[0].rivalCards).name}</span>}
                        </div>    
                    </div>
                    <div className="player-box">
                        {rivales && 
                        rivales[0].rivalCards.map((card, i) => <img key={i} className={`card-img rival-card-${i}-img`} src={endGame ? card.image : cardBack} alt={"example"}/>)
                        }    
                    </div>    
                    {rivales && <span className="bet-value">bet: {licitate.rival1}$</span>}
                    {rivales && rivales[0].winner && <div className="poker-winner poker-winner-right"></div>}
                </div>
                <div className="rival-container rival-container-2">
                    <div className="player-container--header">
                        <div className="img-box">
                            <img src={rivalImg} alt={"example"}/>
                        </div>
                        <div className="player-info">
                            <h2>Rival</h2>    
                            {endGame && <span>{checkHand(rivales[1].rivalCards).name}</span>}
                        </div>    
                    </div>
                    <div className="player-box">
                        {rivales && 
                        rivales[1].rivalCards.map((card, i) => <img key={i} className={`card-img rival-card-${i}-img`} src={endGame ? card.image : cardBack} alt={"example"}/>)
                        }     
                    </div> 
                    {rivales && <span className="bet-value">bet: {licitate.rival2}$</span>}
                    {rivales && rivales[1].winner && <div className="poker-winner poker-winner-right"></div>}
                </div>
                <div className="rival-container rival-container-3">
                    <div className="player-container--header">
                        <div className="img-box">
                            <img src={rivalImg} alt={"example"}/>
                        </div>
                        <div className="player-info">
                            <h2>Rival</h2>    
                            {endGame && <span>{checkHand(rivales[2].rivalCards).name}</span>}
                        </div>    
                    </div>
                    <div className="player-box">
                        {rivales && 
                        rivales[2].rivalCards.map((card, i) => <img key={i} className={`card-img rival-card-${i}-img`} src={endGame ? card.image : cardBack} alt={"example"}/>)
                        } 
                    </div>     
                    {rivales && <span className="bet-value">bet: {licitate.rival3}$</span>}
                    {rivales && rivales[2].winner && <div className="poker-winner"></div>}
                </div>

                <div className="poker--option"> 
                    {!endGame ?
                    <>
                    <button onClick={fold}>Fold</button>  
                    <button className={(round === 2 && !changed ) ? "" : "btn-disable"}  onClick={round === 2 ? changeCards : undefined}>Change</button>
                    <button className={licitate.user === currentBet ? "btn-disable" : "" } onClick={() => startLicitation(call)}>Call</button>
                    <button className={(!callGame || (round === 2 && !changed )) ? "btn-disable" : undefined} onClick={() => startLicitation((a) => bet(a, betValue))}>Bet</button>
                    <input type="number"
                           name="betValue"
                           onChange={(e) => handleInput(e)}
                           value={betValue}/> 
                    </> :
                    <button className="primary--btn new-game--btn" onClick={newGame}>New Game</button>
                    }
                </div>
            </div>
            {endGame && user.winner &&
            <div className="end-game__modal">
                <h2 className="end-game__modl--text">{`You win ${licitate.user + licitate.rival1 + licitate.rival2 + licitate.rival3}$`}</h2>
            </div>}
        </section>
    )
}

export default  PokerFiveCardsTable;