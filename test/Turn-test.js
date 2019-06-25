const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should be able to accept a guess and a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.guess).to.equal('function');
    expect(turn.card).to.equal(card);
  });

  it('should be able to return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('function');
  });

  it('should be able to return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
  });

  it('should', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turnOne = new Turn('function', card);
    const turnTwo = new Turn('object', card);
    turnOne.evaluateGuess();
    turnTwo.evaluateGuess();
    expect(turnOne.evaluateGuess()).to.equal(false);
    expect(turnTwo.evaluateGuess()).to.equal(true);
  });

  it('should give the user feeback about the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turnOne = new Turn('function', card);
    const turnTwo = new Turn('object', card);
    turnOne.giveFeedback();
    turnTwo.giveFeedback();
    expect(turnOne.giveFeedback()).to.equal('You have epically failed!');
    expect(turnTwo.giveFeedback()).to.equal('You did it!');
  });
});