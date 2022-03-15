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

export { fileArray, TodoItemCreator };