import { NewFile } from './update-display.js';
import { deleteTodo } from './todo-items.js';
import {displayFileItems } from './update-display.js'

const NewFileButtonCreator = () => {
    const newFileButton = document.createElement('button');
    newFileButton.textContent = 'New';
    newFileButton.addEventListener('click', () => {
      const newFileName = prompt('Please name your new file.', 'New File');
      NewFile(newFileName);
    });
    document.getElementById('files-container').appendChild(newFileButton);
}

const formToggle = () => {
    const form = document.getElementById('new-todo-form');
    if (form.hidden === true) {
        form.hidden = false;
    } else {
        form.hidden = true;
    }
}

const NewToDoItemButtonCreator = () => {
    const newTodoItemButton = document.createElement('button');
    newTodoItemButton.textContent = 'Add';
    newTodoItemButton.addEventListener('click', formToggle);
    return newTodoItemButton;
}

const DeleteTodoButton = (todoItem, fileName) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        deleteTodo(todoItem);
        displayFileItems(fileName);
        const todoItemContainer = document.getElementById('todo-item');
        if (todoItemContainer.length) {
            todoItemContainer.removeChild(todoItemContainer.firstChild);
        }
    })
    return deleteButton;
}

export { NewFileButtonCreator, NewToDoItemButtonCreator, DeleteTodoButton };