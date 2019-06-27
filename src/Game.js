const Round = require('../src/Round');
const Deck = require('../src/Deck');

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    this.currentRound++;
    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
  console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
   util.main(round);
  }
}

module.exports = Game;