const chai = require('../src/Turn');
const expect = chai.expect;

const Turn = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should have a guess', function() {
    const turn = new Turn();
    expect (turn.guess).to.deep.equal('');
  });
});