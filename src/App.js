import React from "react";
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
import Thousand from "./Page/Thousand/Thousand";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <GameMenu />
      <Testimonials />
      <Poker />
      <BlackJack />
      <Roulette />
      <War />
      <Thousand />
      {/* <GameMenu />
      <Testimonials />
      <Poker />
      <BlackJack />
      <Ruletka />
      <War />
      <ThousentGame />
      <NineGame />
      <Footer /> */}
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
