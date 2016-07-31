UI = new GuessUI();

var answer = Math.floor(Math.random() * 200) + 1;
var game = new Game(answer);

var guesses = 0;
UI.addComputerMessage('Guess a number from 1 to 200');
UI.addInputListener(function(input) {
  var guess = parseInt(input);

  if (isNaN(guess)) {
    return UI.addComputerMessage('Please guess a number :/');
  }

  guesses++;
  var response = game.guess(guess);
  UI.addComputerMessage(response.message);

  if (response.success) {
    UI.addComputerMessage("It took you " + guesses + " guesses.");
  }
});
