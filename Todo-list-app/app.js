




// Interactivity for the todo app


const input = document.querySelector('#task-input');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('#add-btn');
const clearBtn = document.querySelector('#clear-btn');

let tasks = [];

// Function to load tasks
function loadTasks() {
    const data = localStorage.getItem('tasks');

    if (data) {
        tasks = JSON.parse(data);
    }
}

   //SAVE TASKS
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

   //Create task element
function createTaskElement(task) {
    const li = document.createElement('li');

    li.dataset.id = task.id;

    if (task.completed) {
        li.classList.add('checked');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task.text;

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'close';
    deleteBtn.innerHTML = '&times;';

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    return li;
}

  // RENDER UI
function render() {

    listContainer.innerHTML = '';

    tasks.forEach(task => {
        const li = createTaskElement(task);
        listContainer.appendChild(li);
    });

    if (clearBtn) {
        clearBtn.disabled = tasks.length === 0;
    }
}

  // ADD TASK
function addTask() {

    const text = input.value.trim();

    if (text === '') {
        alert('Please enter a task');
        return;
    }

    const newTask = {
        id: Date.now().toString(),
        text: text,
        completed: false
    };

    // New tasks appear at the top
    tasks.unshift(newTask);

    saveTasks();
    render();

    input.value = '';
}

   //TOGGLE TASK
function toggleTask(id) {

    const task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = !task.completed;

        saveTasks();
        render();
    }
}

  // DELETE TASK

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    render();
}


   //CLEAR ALL TASKS

function clearAllTasks() {

    if (tasks.length === 0) {
        alert('No tasks to clear');
        return;
    }

    const confirmed = confirm(
        'Are you sure you want to delete all tasks?'
    );

    if (!confirmed) return;

    tasks = [];

    saveTasks();
    render();
}
//Adding event listeners

// Add button
addBtn.addEventListener('click', addTask);

// Clear all button
if (clearBtn) {
    clearBtn.addEventListener('click', clearAllTasks);
}

// Press Enter to add task
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Task interactions
listContainer.addEventListener('click', function (e) {

    const li = e.target.closest('li');

    if (!li) return;

    const id = li.dataset.id;

    // Delete task
    if (e.target.classList.contains('close')) {
        deleteTask(id);
        return;
    }

    // Toggle task
    if (
        e.target.matches('input[type="checkbox"]') ||
        e.target.classList.contains('task-text')
    ) {
        toggleTask(id);
    }

});

//Initialize the app

loadTasks();
render();














