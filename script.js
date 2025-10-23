js
function addTask() {
  let input = document.getElementById('taskInput');
  let task = input.value.trim();

  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  let ul = document.getElementById('taskList');
  let li = document.createElement('li');
  li.textContent = task;

  li.onclick = function() {
    ul.removeChild(li);
  };

  ul.appendChild(li);
  input.value = '';
}


