import { fileArray } from './todo-items.js';

const NewFile = (name) => {
    const fileDiv = document.createElement('div');
    fileDiv.id = name;  
    fileDiv.textContent = name;
    fileDiv.addEventListener('click', () => {
        const fileName = document.getElementById('fileName');
        fileName.value = name;
    });
    fileDiv.addEventListener('click', () => {
        displayFileItems(name);
    });
 
    document.getElementById('files-container').appendChild(fileDiv);
    
}

const displayNewItem = () => {
  const newItemDiv = document.createElement('div');
  newItemDiv.textContent = fileArray[fileArray.length-1].title;
  const dueDateDiv = document.createElement('p');
  dueDateDiv.textContent = `Due: ${fileArray[fileArray.length - 1].due}`;
  newItemDiv.appendChild(dueDateDiv);
  document.getElementById('todo-items-container').appendChild(newItemDiv);
}

const displayFileItems = (currentFileName) => {
    const todoItemsContainer = document.getElementById('todo-items-container');
    while (todoItemsContainer.firstChild) {
        todoItemsContainer.removeChild(todoItemsContainer.firstChild);
    }
    for (let i = 0; i < fileArray.length; i++) {
        if (fileArray[i].fileName === currentFileName) {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = fileArray[i].title;
            const dueDateDiv = document.createElement('p');
            dueDateDiv.textContent = `Due: ${fileArray[i].due}`;
            itemDiv.appendChild(dueDateDiv);
            document.getElementById('todo-items-container').appendChild(itemDiv);
            } 
        }
}


export { NewFile, displayNewItem };