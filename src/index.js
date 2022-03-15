import './style.css';
import { NewFileButtonCreator, NewToDoItemButtonCreator } from './DOM.js';
import { NewFile } from './update-display.js'
import { NewItemForm } from './form.js';

NewFileButtonCreator();
NewFile('Notes');
const todoListContainer = document.getElementById('todo-list');
todoListContainer.appendChild(NewToDoItemButtonCreator());
NewItemForm();
