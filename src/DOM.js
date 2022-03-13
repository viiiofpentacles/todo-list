
const NewFile = (name) => {
    const fileDiv = document.createElement('div');
    fileDiv.id = name;  
    fileDiv.textContent = name;
    const fileName = document.getElementById('fileName');
    fileDiv.addEventListener('click', () => {
        fileName.setAttribute = ('value', name);
    });
    document.getElementById('files-container').appendChild(fileDiv);
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
    newTodoItemButton.addEventListener('click', () => {
        const form = document.getElementById('new-todo-form');
        form.hidden = false;
    });
    return newTodoItemButton;
}

export { NewFile, NewFileButtonCreator, NewToDoItemButtonCreator };