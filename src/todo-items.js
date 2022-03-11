import { FileCreator } from './file.js';

const TodoItemCreator = function (title, desc, dueDate, priority) {
    const todoItem = {
      title,
      desc,
      dueDate,
      priority,
    }
  return todoItem;
}

const AddToFileArray = () => {
    FileCreator.name[TodoItemCreator.todoItem];
}

export { TodoItemCreator, AddToFileArray };