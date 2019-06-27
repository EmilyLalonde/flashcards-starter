const Turn = require('../src/Turn');

class Round {
  constructor(deck, game) {
    this.deck = deck;
    this.currentCard;
    this.turn = 0;
    this.incorrectGuesses = [];
    this.game = game;
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turn];
    return this.currentCard;
  }
  takeTurn(guess) {
    var turn = new Turn(guess, this.returnCurrentCard());
    this.turn++; 
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor((this.turn - this.incorrectGuesses.length) / this.turn * 100);
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;