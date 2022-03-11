import './style.css';
import { NewFile, NewFileButtonCreator, NewToDoItemButtonCreator } from './DOM.js';

NewFileButtonCreator();
NewFile('Notes');

const todoListContainer = document.getElementById('todo-list');
todoListContainer.appendChild(NewToDoItemButtonCreator());
