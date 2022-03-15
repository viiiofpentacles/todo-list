const fileArray = [];

const TodoItemCreator = function () {
    const todoItem = {
      title: document.getElementById('Title').value,
      desc: document.getElementById('Description').value,
      due: document.getElementById('Due').value,
      priority: 'high',
      fileName: document.getElementById('fileName').value
    }

    fileArray.push(todoItem);
}

const displayNewItem = () => {
  const newItemDiv = document.createElement('div');
  newItemDiv.textContent = fileArray[fileArray.length-1].title;
  const dueDateDiv = document.createElement('p');
  dueDateDiv.textContent = `Due: ${fileArray[fileArray.length - 1].due}`;
  newItemDiv.appendChild(dueDateDiv);
  document.getElementById('todo-list').appendChild(newItemDiv);
}



export { TodoItemCreator, displayNewItem };