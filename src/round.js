const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turn = 0;
    this.incorrectGuesses = [];
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
    let percent = this.calculatePercentCorrect();
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor((this.turn - this.incorrectGuesses.length) / this.turn * 100);
  }
  endRound(percentage) {
    return `** Round over! ** You answered ${percentage}% of the questions correctly!`
  }
}

module.exports = Round;