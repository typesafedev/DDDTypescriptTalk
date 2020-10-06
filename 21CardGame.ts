// CardGame is bounded context
export module CardGame {
  // | means a choice. Sum type
  type Suit = Club | Diamond | Spade | Heart;

  type Rank = Two | Three | Four | Five | Six | Seven | Eight | Nine | Ten | Jack | Queen | King;

  // means a pair, choose one from each type
  type Card = [Suit, Rank];

  type Hand = Card[];
  type Deck = Card[];

  type Player = [Name, Hand];
  type Game = [Deck, Player];

  // Notice, even the behaviours can be modelled!
  type Deal = (deck: Deck) => [Deck, Card];
  type PickupCard = (pickup: [Hand, Card]) => Hand;

  type Club = "Club"; // Note: this is a string literal (contains 1 string "Club") not just any string (can contain any combination of characters)
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