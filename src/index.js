import _ from 'lodash';
import './style.css';

const toDoTasks = [{
  description: "First task",
  completed: true,
  index: 1
},
{
  description: "Second task",
  completed: true,
  index: 2
},
{
  description: "Third task",
  completed: true,
  index: 3
},]

const taskList = document.getElementById('taskList');
const createList = () => {
  for (let i = 0; i < toDoTasks.length; i += 1) {

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task d-flex';
    taskList.appendChild(taskContainer);

    const checkBoxContainer = document.createElement('div');
    checkBoxContainer.className = 'checkbox-container';
    taskContainer.appendChild(checkBoxContainer);

    const checkBox = document.createElement('input');
    checkBox.className ='form-check-input';
    checkBox.setAttribute('type', 'checkbox');
    checkBoxContainer.appendChild(checkBox);

    const taskInput = document.createElement('input');
    taskInput.disabled = true;
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('value', `${toDoTasks[i].description}`);
    taskContainer.appendChild(taskInput);

    const optionAndTrash = document.createElement('div');
    optionAndTrash.className ='optionAndTrash';
    optionAndTrash.innerHTML = `
        <i class="fa-solid fa-ellipsis-vertical"></i>
        <i class="fa-solid fa-trash-can"></i>
    `;
    taskContainer.appendChild(optionAndTrash);
  }
};

createList();