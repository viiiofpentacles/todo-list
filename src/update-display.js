import { TodoItemCreator } from './todo-items.js';

const NewFile = (name) => {
    const fileDiv = document.createElement('div');
    fileDiv.id = name;  
    fileDiv.textContent = name;
    fileDiv.addEventListener('click', () => {
        const fileName = document.getElementById('fileName');
        fileName.value = name;
    });
    document.getElementById('files-container').appendChild(fileDiv);
}


export { NewFile };