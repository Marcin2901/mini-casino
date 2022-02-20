import React from "react";
import './App.css';
import Navbar from "./Page/Navbar/Navbar";
import Hero from "./Page/Hero/Hero";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
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
