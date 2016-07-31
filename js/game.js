function Game(answer) {
  this.answer = answer;
}

Game.prototype.guess = function guess(the_guess) {
  if (the_guess === this.answer) {
    return {
      success: true,
      message: "Nice! It was " + the_guess + "!"
    };
  } else if (the_guess > this.answer) {
    return {
      success: false,
      message: "Too high"
    };
  } else if (the_guess < this.answer) {
    return {
      success: false,
      message: "Too low"
    };
  }
}
