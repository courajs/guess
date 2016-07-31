var output_frame = document.querySelector('.output-frame')
var input_form = document.querySelector('.input-form')
var input_field = document.querySelector('.guess-input')

input_form.addEventListener('submit', function(event) {
  event.preventDefault();

  var input = get_input();
  var new_message = create_message(input);
  add_message_to_page(new_message);
});

function get_input(){
  var the_guess = input_field.value;
  input_field.value = "";
  return the_guess;
}

function create_message(text) {
  var new_message = document.createElement('div');
  new_message.className = "message player"
  new_message.innerHTML = text;
  
  return new_message;
}

function add_message_to_page(message) {
  output_frame.appendChild(message);
}
