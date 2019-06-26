class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turn = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }
  takeTurn() {
    this.turn++;
  }
  calculatePercentCorrect() {
  }
  endRound() {
  }
}

module.exports = Round;