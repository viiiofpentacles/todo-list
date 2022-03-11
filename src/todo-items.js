const TodoItemCreator = function (title, desc, dueDate, priority) {
    const todoItem = {
      title,
      desc,
      dueDate,
      priority,
    }
  return todoItem;
}

export { TodoItemCreator };