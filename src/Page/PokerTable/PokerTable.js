import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./PokerTable.css";
import userImg from "../../images/user-img.png";
import rivalImg from "../../images/rival-img.jpg";
import cardBack from "../../images/card-back.png";

const PokerTable = () => {

    const [deckId, setDeckId] = useState();
    const [playersCards, setPlayersCards] = useState();
    const [rivales, setRivales] = useState();
    const [betValue, setBetValue] = useState(0)
    const [currentBet, setCurrentBet] = useState(5);
    const [dillerCards, setDillerCards] = useState([]);
    const [playerMove, setPlayerMove] = useState(true);
    const [endGame, setEndGame] = useState(false)
    const [correction, setCorrection] = useState(false)

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
        fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=8`)
            .then(res => res.json())
            .then(data => {
                const cards = data.cards;
                setPlayersCards(
                   {name: "user", userCards: [cards.pop(), cards.pop()], value: 0, allIn: false, winner: false}
                )
                setRivales([
                    {name: "rival1", rivalCards: [cards.pop(), cards.pop()], value: 0, allIn: false, winner: false},
                    {name: "rival2", rivalCards: [cards.pop(), cards.pop()], value: 0, allIn: false, winner: false},
                    {name: "rival3", rivalCards: [cards.pop(), cards.pop()], value: 0, allIn: false, winner: false}
                ])
                setLicitate({user: 0, rival1: 0, rival2: 0, rival3: 0})
            })
    }

    useEffect(() => {
        const licitateArray = []
        let bigestLicitate = licitate.user;
        for(let key in licitate) {
            if(licitate[key] === bigestLicitate) 
                licitateArray.push(1);
        }
        if(licitateArray.length === 4 && bigestLicitate >= currentBet) {    
            dillerMove()
        } else {
            setCorrection(true)
        }
    }, [change])

    useEffect(() => {
        if(!playerMove) {
            if(!correction) {
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

    const startLicitation = (func) => {
        func("user", betValue)
    }

    const call = (licitator) => {
        if(licitate[licitator] !== currentBet)  {
            setLicitate(prevState => ({...prevState, [licitator]: currentBet}))
            setPlayerMove(false)
        }
    }

    const bet = (licitator, value) => {
            if(parseInt(value) + licitate[licitator] > currentBet) {
                const newValue = licitate[licitator] + parseInt(value);
                setLicitate(prevState => ({...prevState, [licitator]:  newValue}));
                setCurrentBet(newValue)
                setPlayerMove(false)
            }
    }

    const rivalBet = (licitator, value) => {
        const newValue = licitate[licitator] + parseInt(value);
        setLicitate(prevState => ({...prevState, [licitator]:  newValue > currentBet ? newValue : currentBet}));
    }

    //dodanie karty przez dilera [3 lub 1]
    const dillerMove = () => {
        if(dillerCards.length === 0) {
            fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`)
                .then(res => res.json())
                .then(data => {
                    const cards = data.cards;
                    setDillerCards(cards)
                })
        } else if(dillerCards.length < 5) {
            fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
                .then(res => res.json())
                .then(data => {
                    const card = data.cards[0];
                    setDillerCards(prevState => [...prevState, card])
                })
        }     
    }

    //sprawdzenie czy gra się nie zakończyła [czy diller wyłożył 5 kart]
    useEffect(() => {
         if(dillerCards.length === 5) {
            setEndGame(true);   
            let result = !userFold ? checkHand(playersCards.userCards) : {value: -1};
            let handValue = convertValue(playersCards.userCards).reduce((acumulato, current) => acumulato + current.value, 0)
          
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
         
            if(JSON.stringify(checkHand(playersCards.userCards)) === JSON.stringify(result) && !userFold) {
                setPlayersCards(prevState => ({...prevState, winner: true}))
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
    }, [dillerCards])

    const newGame = () => {
     
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            setDeckId(data.deck_id)
            startGame(data.deck_id);
            setBetValue(0)
            setCurrentBet(5)
            setDillerCards([])
            setEndGame(false)
            setUserFold(false)
        })
    
    }

    const check = () => {
        if(licitate.user === currentBet) {  
            setPlayerMove(false);   
        }
    }

    const fold = () => {
        setUserFold(true)
        const missesCards = 5 - dillerCards.length;
        
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${missesCards}`)
        .then(res => res.json())
        .then(data => {
            const cards = data.cards
            setDillerCards(prevState => [...prevState.concat(cards)])   
            const mockLicitate = getRandomNumber(currentBet, currentBet + 50)
            setLicitate(prevState => ({...prevState, rival1: mockLicitate, rival2: mockLicitate, rival3: mockLicitate}))
        }) 
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
        const allCards = convertValue(hand.concat(dillerCards)).sort((a, b) => a.value - b.value)

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
                    return {value: 14, suit: elem.suit};
                } else if(elem.value === "KING") {
                    return {value: 13, suit: elem.suit};
                } else if(elem.value === "QUEEN") {
                    return {value: 12, suit: elem.suit};
                } else {
                    return {value: 11, suit: elem.suit};
                }
            }
            return {value: parseInt(elem.value), suit: elem.suit};
        })
    }

    return (
        <section className="table">
            <div className="arrow-back" onClick={() => navigate("/")}><i className="fas fa-arrow-left"></i></div>
            <div className="poker__table">
                <h1 className="poker__table--title">Poker</h1>
                <span className="summary">Current Bet: {currentBet}</span>

                <div className="diller-container">
                    {dillerCards && 
                        dillerCards.map(card => <img key={card.code} src={card.image} className="diller-img"/>)
                    }
                </div>

                <div className={`player-container ${userFold && "fold"}`}>
                    <div className="player-container--header">
                        <div className="img-box">
                            <img src={userImg}/>
                        </div>
                        <div className="player-info">
                            <h2>User</h2>    
                            {endGame && <span>{!userFold ? checkHand(playersCards.userCards).name : "Fold"}</span>}
                        </div>
                    </div>
                    <div className="player-box">
                        {playersCards &&
                        <><img className="card1-img" src={playersCards.userCards[0].image}/>
                          <img className="card2-img" src={playersCards.userCards[1].image}/></>
                        }
                    </div>
                    {playersCards && <span className="bet-value">bet: {licitate.user}$</span>}
                    {playersCards && playersCards.winner && <div className="poker-winner"></div>}
                </div>
                <div className="rival-container rival-container-1">
                    <div className="player-container--header">
                        <div className="img-box">
                            <img src={rivalImg}/>
                        </div>
                        <div className="player-info">
                            <h2>Rival</h2>    
                            {endGame && <span>{checkHand(rivales[0].rivalCards).name}</span>}
                        </div>    
                    </div>
                    <div className="player-box">
                        {playersCards && 
                        <><img className="card1-img" src={endGame ? rivales[0].rivalCards[0].image : cardBack}/>
                          <img className="card2-img" src={endGame ? rivales[0].rivalCards[1].image : cardBack}/></>
                        }    
                    </div>    
                    {rivales && <span className="bet-value">bet: {licitate.rival1}$</span>}
                    {rivales && rivales[0].winner && <div className="poker-winner"></div>}
                </div>
                <div className="rival-container rival-container-2">
                    <div className="player-container--header">
                        <div className="img-box">
                            <img src={rivalImg}/>
                        </div>
                        <div className="player-info">
                            <h2>Rival</h2>    
                            {endGame && <span>{checkHand(rivales[1].rivalCards).name}</span>}
                        </div>    
                    </div>
                    <div className="player-box">
                        {playersCards && 
                        <><img className="card1-img" src={endGame ? rivales[1].rivalCards[0].image : cardBack}/>
                          <img className="card2-img" src={endGame ? rivales[1].rivalCards[1].image : cardBack}/></>
                        }     
                    </div> 
                    {rivales && <span className="bet-value">bet: {licitate.rival2}$</span>}
                    {rivales && rivales[1].winner && <div className="poker-winner"></div>}
                </div>
                <div className="rival-container rival-container-3">
                    <div className="player-container--header">
                        <div className="img-box">
                            <img src={rivalImg}/>
                        </div>
                        <div className="player-info">
                            <h2>Rival</h2>    
                            {endGame && <span>{checkHand(rivales[2].rivalCards).name}</span>}
                        </div>    
                    </div>
                    <div className="player-box">
                        {playersCards && 
                        <><img className="card1-img" src={endGame ? rivales[2].rivalCards[0].image : cardBack}/>
                          <img className="card2-img" src={endGame ? rivales[2].rivalCards[1].image : cardBack}/></>
                        } 
                    </div>     
                    {rivales && <span className="bet-value">bet: {licitate.rival3}$</span>}
                    {rivales && rivales[2].winner && <div className="poker-winner"></div>}
                </div>

                <div className="poker--option"> 
                    {!endGame ?
                    <>
                    <button onClick={fold}>Fold</button>  
                    <button className={licitate.user !== currentBet ? "btn-disable" : ""} onClick={check}>Check</button>
                    <button className={licitate.user === currentBet ? "btn-disable" : ""} onClick={() => startLicitation(call)}>Call</button>
                    <button onClick={() => startLicitation((a) => bet(a, betValue))}>Bet</button>
                    <input type="number"
                           name="betValue"
                           onChange={(e) => handleInput(e)}
                           value={betValue}/> 
                    </> :
                    <button className="primary--btn new-game--btn" onClick={newGame}>New Game</button>
                    }
                </div>
            </div>
        </section>
    )
}

export default PokerTable;