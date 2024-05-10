import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useAtom } from "jotai";
import { playerHandAtom, dealerHandAtom } from "./atoms";
import board from "./img/table_with_chips.png";

const BlackJack = () => {
  const [dealerHand, setDealerHand] = useAtom(dealerHandAtom);
  const [playerHand, setPlayerHand] = useAtom(playerHandAtom);

  const deck = [
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
    ["10", 10],
    ["jack", 10],
    ["queen", 10],
    ["king", 10],
    ["ace", 11],
  ];

  const dealCard = (hand) => {
    const random = Math.floor(Math.random() * deck.length);
    hand.push(deck[random][0]);
  };

  const dealHand = () => {
    const tempPlayHand = [];
    const tempDealHand = [];
    dealCard(tempPlayHand);
    dealCard(tempPlayHand);
    dealCard(tempDealHand);
    dealCard(tempDealHand);
    setPlayerHand(tempPlayHand);
    setDealerHand(tempDealHand);
    console.log(tempDealHand, tempPlayHand);
  };

  useEffect(() => {
    dealHand();
  }, []);

  return (
    <div id="game-container">
      <img id="game-board" alt="Green Blackjack poker table" src={board} />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<BlackJack tab="home" />);
