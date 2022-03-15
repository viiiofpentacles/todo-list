import { NewFile } from './update-display.js'

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

export { NewFileButtonCreator, NewToDoItemButtonCreator };