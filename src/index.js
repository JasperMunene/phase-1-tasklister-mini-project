// User able to type a task into the input field
// User able to click some form of submit button(Prevent the default reaload)
// User expect to see the task string they provided appear in the DOM after the submit button has beed activated
// User should be able to delete their tasks(Remove a task from the list)
// A priority value from the dropdown should be able to determine the colorof the text in the list(e.g. red for high priority, yellow for medium, green for low)
// DSorting functionality that displays the tasks in ascending or descending order based on priority
// Ability to edit tasks

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const ul = document.getElementById("tasks");

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const priorityInput  = document.getElementById("priority-selector");
    const task = taskInput.value;
    const priority = priorityInput.value;

    if (task === '' || priority === '') {
      alert('Please add a task and priority before submitting');
      return;
    }

    const li = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = task;
    li.appendChild(taskText);

    if (priority === 'high') {
      li.classList.add('high');
    } else if (priority === 'medium') {
      li.classList.add('medium');
    } else {
      li.classList.add('low');
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    li.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    li.appendChild(editButton);

    ul.appendChild(li);

    taskInput.value = '';
    priorityInput.value = ''

    deleteButton.addEventListener('click', () => {
      ul.removeChild(li);
    });

    editButton.addEventListener('click', () => {
      const editedTask = prompt('Please make your changes', taskText.textContent);
      if (editedTask) {
        taskText.textContent = editedTask;
      }
    });
  });
});
