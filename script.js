document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('todo-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
});

document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
});
