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
    const turn = new Turn('guess', card);
    expect(turn.guess).to.equal('guess');
    expect(turn.card).to.equal(card);
  });

  it('should be able to return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card);
    var returnedGuess = turn.returnGuess();
    expect(returnedGuess).to.equal('guess');
  });

  it('should be able to return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card);
    var returnedCard = turn.returnCard();
    expect(returnedCard).to.equal(card);
  });

  it('should evaluate if the users guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turnOne = new Turn('guess', card);
    const turnTwo = new Turn('object', card);
    var turn1 = turnOne.evaluateGuess();
    var turn2 = turnTwo.evaluateGuess();
    expect(turn1).to.equal(false);
    expect(turn2).to.equal(true);
  });

  it('should give the user feeback about the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turnOne = new Turn('guess', card);
    const turnTwo = new Turn('object', card);
    var turn1 = turnOne.giveFeedback();
    var turn2 = turnTwo.giveFeedback();
    expect(turn1).to.equal('You have epically failed!');
    expect(turn2).to.equal('You did it!');
  });
});