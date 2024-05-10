import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useAtom } from "jotai";
import { playerHandAtom, dealerHandAtom } from "./atoms";
import { dealCard, dealHand } from "./helpers/dealer";
import board from "./img/table_with_chips.png";
import hitMePic from "./img/button_hit-me.png";
import holdPic from "./img/button_hold.png";
import playAgain from "./img/button_play-again.png";

const BlackJack = () => {
  const [dealerHand, setDealerHand] = useAtom(dealerHandAtom);
  const [playerHand, setPlayerHand] = useAtom(playerHandAtom);

  return (
    <div id="game-container">
      <img id="game-board" alt="Green Blackjack poker table" src={board} />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<BlackJack tab="home" />);
