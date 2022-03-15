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

const deleteTodo = function (todoTitle) {
  for (let i = 0; i < fileArray.length; i++) {
    if (fileArray[i].title === todoTitle) {
      fileArray.splice(i, 1);
    }
  }
}

export { fileArray, TodoItemCreator, deleteTodo };