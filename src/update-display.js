import { fileArray } from './todo-items.js';
import { DeleteTodoButton } from './DOMbuttons.js'

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
  if (fileArray[fileArray.length-1].priority === 'high') {
      newItemDiv.style.fontWeight = 'bold';
      newItemDiv.style.color = '#b20000';
  }
  newItemDiv.textContent = fileArray[fileArray.length-1].title;
  const dueDateDiv = document.createElement('p');
  dueDateDiv.textContent = `Due: ${fileArray[fileArray.length-1].due}`;
  newItemDiv.appendChild(dueDateDiv);
  document.getElementById('todo-items-container').appendChild(newItemDiv);
  newItemDiv.appendChild(DeleteTodoButton(fileArray[fileArray.length-1].title, fileArray[fileArray.length-1].fileName));
  const itemTitle = fileArray[fileArray.length-1].title;
  newItemDiv.addEventListener('click', () => {
      displayItemDetails(itemTitle);
  });
}

const displayFileItems = (currentFileName) => {
    const todoItemContainer = document.getElementById('todo-item');
    if (todoItemContainer.children.length) {
        todoItemContainer.removeChild(todoItemContainer.firstChild);
    };
    const todoItemsContainer = document.getElementById('todo-items-container');
    while (todoItemsContainer.firstChild) {
        todoItemsContainer.removeChild(todoItemsContainer.firstChild);
    }
    for (let i = 0; i < fileArray.length; i++) {
        if (fileArray[i].fileName === currentFileName) {
            const itemDiv = document.createElement('div');
            if (fileArray[i].priority === 'high') {
                itemDiv.style.fontWeight = 'bold';
                itemDiv.style.color = '#b20000';
            }
            itemDiv.textContent = fileArray[i].title;
            const dueDateDiv = document.createElement('p');
            dueDateDiv.textContent = `Due: ${fileArray[i].due}`;
            itemDiv.appendChild(dueDateDiv);
            itemDiv.appendChild(DeleteTodoButton(fileArray[i].title, fileArray[i].fileName));
            document.getElementById('todo-items-container').appendChild(itemDiv);
            itemDiv.addEventListener('click', () => {
                const itemTitle = fileArray[i].title;
                displayItemDetails(itemTitle);
            });
            } 
        }
}

const displayItemDetails = (itemTitle) => {
    const todoItemContainer = document.getElementById('todo-item');
    if (todoItemContainer.children.length) {
        todoItemContainer.removeChild(todoItemContainer.firstChild);
    };
    for (let i = 0; i < fileArray.length; i++) {
        if (fileArray[i].title === itemTitle) {
            const itemDetailsDiv = document.createElement('div');
            const displayTitle = document.createElement('h3');
            displayTitle.textContent = fileArray[i].title;
            const displayDesc = document.createElement('p');
            displayDesc.textContent = fileArray[i].desc;
            const displayDue = document.createElement('p');
            displayDue.textContent = `Due: ${fileArray[i].due}`;
            const displayPriority = document.createElement('p');
            if (fileArray[i].priority === 'high') {
                displayPriority.style.fontWeight = 'bold';
                displayPriority.style.color = '#b20000';
            }
            displayPriority.textContent = `Priority: ${fileArray[i].priority}`;
            itemDetailsDiv.appendChild(displayTitle);
            itemDetailsDiv.appendChild(displayDesc);
            itemDetailsDiv.appendChild(displayDue);
            itemDetailsDiv.appendChild(displayPriority);
            todoItemContainer.appendChild(itemDetailsDiv);
        }
    }

}

export { NewFile, displayNewItem, displayFileItems };