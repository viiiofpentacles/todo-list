import { FileCreator } from './file.js';
import { TodoItemCreator, AddToFileObject } from './todo-items.js'

const NewFile = (name) => {
    FileCreator(name);
    const fileDiv = document.createElement('div');
    fileDiv.id = name;  
    fileDiv.textContent = name;
    document.getElementById('files-container').appendChild(fileDiv);
    fileDiv.appendChild(NewToDoItemButtonCreator());
}

const NewFileButtonCreator = () => {
    const newFileButton = document.createElement('button');
    newFileButton.textContent = 'New';
    newFileButton.addEventListener('click', () => {
      const newFileName = prompt('Please name your new file.', 'New File');
      NewFile(newFileName);
    });
    document.getElementById('files-container').appendChild(newFileButton);
}

const NewToDoItemButtonCreator = () => {
    const newTodoItemButton = document.createElement('button');
    newTodoItemButton.textContent = 'Add';
    newTodoItemButton.addEventListener('click', NewItemForm);
    return newTodoItemButton;
}

const NewItemForm = () => {
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Title');
    form.appendChild(titleInput);

    document.getElementById('todo-list').appendChild(form);
}

export { NewFile, NewFileButtonCreator };