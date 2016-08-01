function GuessUI() {
  this.output_frame = document.querySelector('.output-frame')
  this.input_form = document.querySelector('.input-form')
  this.input_field = document.querySelector('.guess-input')
  this.listeners = [];

  this.input_form.addEventListener('submit', function(e) {
    e.preventDefault();

    var input = this.input_field.value;
    this.addPlayerMessage(input);
    this.input_field.value = "";

    this.listeners.forEach(function(l) {
      l(input);
    });
  }.bind(this));
}

GuessUI.prototype.addInputListener = function(listener) {
  this.listeners.push(listener);
};

GuessUI.prototype.addPlayerMessage = function addPlayerMessage(text) {
  var message = create_message(text);
  message.classList.add('player');
  this.output_frame.appendChild(message);
  message.scrollIntoView();
};

GuessUI.prototype.addComputerMessage = function addPlayerMessage(text) {
  var message = create_message(text);
  message.classList.add('computer');
  this.output_frame.appendChild(message);
  message.scrollIntoView();
};

function create_message(text) {
  var new_message = document.createElement('div');
  new_message.classList.add("message");
  new_message.innerHTML = text;
  
  return new_message;
}
