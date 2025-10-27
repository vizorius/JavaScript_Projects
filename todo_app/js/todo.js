/* This function gets the tasks from local storage */
function get_todos() {
  /* Create an empty array for tasks */
  var todos = [];

  /* Pull the tasks that were saved in the browser's memory */
  var todos_str = localStorage.getItem('todo');

  /* If there are tasks saved, parse them back into an array */
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }

  return todos;
}

/* This function adds a new task */
function add() {
  /* Get the inputted task */
  var task = document.getElementById('task').value;

  /* Get existing tasks */
  var todos = get_todos();

  /* Add the new task to the array */
  todos.push(task);

  /* Save the updated list back to local storage */
  localStorage.setItem('todo', JSON.stringify(todos));

  /* Clear the input field */
  document.getElementById('task').value = '';

  /* Update the displayed list */
  show();

  return false;
}

/* This function displays the tasks on the screen */
function show() {
  /* Get the tasks */
  var todos = get_todos();

  /* Build the HTML list */
  var html = '<ul>';
  for (var i = 0; i < todos.length; i++) {
    html +=
      '<li>' +
      todos[i] +
      ' <button class="remove" id="' +
      i +
      '">x</button></li>';
  }
  html += '</ul>';

  /* Display the list in the browser */
  document.getElementById('todos').innerHTML = html;

  /* Add event listeners to remove buttons */
  var buttons = document.getElementsByClassName('remove');
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener('click', remove);
  }
}

/* This function removes a task */
function remove() {
  var id = this.getAttribute('id');
  var todos = get_todos();

  todos.splice(id, 1); // remove the item
  localStorage.setItem('todo', JSON.stringify(todos));

  show(); // refresh the list
}

/* When the page loads, set up the button and display saved tasks */
document.getElementById('add').addEventListener('click', add);
show();
