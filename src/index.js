import './style.css';
import { NewFile, NewFileButtonCreator, NewToDoItemButtonCreator } from './DOM.js';
import { NewItemForm } from './form.js';

NewFileButtonCreator();
NewFile('Notes');
const todoListContainer = document.getElementById('todo-list');
todoListContainer.appendChild(NewToDoItemButtonCreator());
NewItemForm();
