import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Page/Navbar/Navbar";
import Hero from "./Page/Hero/Hero";
import About from "./Page/About/About";
import GameMenu from "./Page/GameMenu/GameMenu"
import Testimonials from "./Page/Testimonials/Testimonials";
import Poker from "./Page/Poker/Poker";
import BlackJack from "./Page/BlackJack/BlackJack";
import Roulette from "./Page/Roulette/Roulette";
import War from "./Page/War/War";
import Footer from "./Page/Footer/Footer";
import BlackJackTable from "./Page/BlackJackTable/BlackJackTable";
import PokerTable from "./Page/PokerTable/PokerTable";
import PokerFiveCardsTable from "./Page/PokerFiveCardsTable/PokerFiveCardsTable";
import WarTable from "./Page/WarTable/WarTable";
import Poker5Cards from "./Page/Poker5Cards/Poker5Cards";

function App() {
  

  return (
    <div className="app">
      <Routes>
        <Route exact path={"/"} element={
          <>
          <Navbar />
          <Hero />
          <About />
          <GameMenu />
          <Testimonials />
          <div className="game-frame--section">
            <Poker />
            <BlackJack />
            <War />
            <Poker5Cards />
            <Roulette />
          </div>
          <Footer />
          </>
        } />
        <Route path={"/blackJack"} element={<BlackJackTable />} />
        <Route path="/poker" element={<PokerTable />}/>
        <Route path="/pokerFiveCards" element={<PokerFiveCardsTable />}/>
        <Route path="/war" element={<WarTable />}/>
      </Routes>
      {/* 
        sekcja 2 - wybór gier z menu
        sekcja 3 - testimonials albo coś w tym rodzaju
        sekcja 4-10 gry - {poker, black-jack, ruletka, wojna, 1000, 9}
        sekcja 11 - footer
      */}
    </div>
  );
}

export default App;
