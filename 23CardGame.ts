// Code is Design
// Design is Code
// Persistance ignorance -> Domain driven not database driven

// This is executable code!
// No need for UML diagrams

// Even a non-programmer can understand this and spot the bug
// Dev question: Is this a reasonable amount of code to write?
export module CardGame {
  type Suit = Club | Diamond | Spade | Heart;

  type Rank = Two | Three | Four | Five | Six | Seven | Eight | Nine | Ten | Jack | Queen | King;

  type Card = [Suit, Rank];

  type Hand = Card[];
  type Deck = Card[];

  type Player = [Name, Hand];
  type Game = [Deck, Player];

  type Deal = (deck: Deck) => [Deck, Card];
  type PickupCard = (pickup: [Hand, Card]) => Hand;

  type Club = "Club";
  type Diamond = "Diamond";
  type Spade = "Spade";
  type Heart = "Heart";
  type Two = "Two";
  type Three = "Three";
  type Four = "Four";
  type Five = "Five";
  type Six = "Six";
  type Seven = "Seven";
  type Eight = "Eight";
  type Nine = "Nine";
  type Ten = "Ten";
  type Jack = "Jack";
  type Queen = "Queen";
  type King = "King";
  type Name = string;
}