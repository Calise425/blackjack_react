import { useAtom } from "jotai";
import { playerHandAtom, dealerHandAtom } from "../atoms";

const deck: Array<[string, number]> = [
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

export const dealCard = (hand: string[]) => {
  const random: number = Math.floor(Math.random() * deck.length);
  hand.push(deck[random][0]);
};

export const dealHand = () => {
  const [playerHandState, setPlayerHand] = useAtom(playerHandAtom);
  const [dealerHandState, setDealerHand] = useAtom(dealerHandAtom);

  dealCard(playerHandState);
  dealCard(playerHandState);
  dealCard(dealerHandState);
  dealCard(dealerHandState);
};