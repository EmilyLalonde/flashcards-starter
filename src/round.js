class Round {
  constructor(cards, deck) {
    this.cards = cards;
    this.deck = deck;
  }
  returnCurrentCard() {
    return this.deck;
  }
  takeTurn() {
  }
}

module.exports = Round;