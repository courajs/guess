describe('Games', function() {
  var game;
  beforeEach(function() {
    game = new Game(100);
  });
  it('reports a successful guess', function() {
    console.log(game.guess(100));
    expect(game.guess(100)).to.deep.equal({
      success: true,
      message: "Nice! It was 100!"
    });
  });

  it('reports a guess too high', function() {
    expect(game.guess(101)).to.deep.equal({
      success: false,
      message: "Too high"
    });
  });

  it('reports a guess too low', function() {
    expect(game.guess(99)).to.deep.equal({
      success: false,
      message: "Too low"
    });
  });
});
