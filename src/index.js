import './style.css';
import { NewFileButtonCreator, NewToDoItemButtonCreator } from './DOMbuttons';
import { NewFile } from './update-display.js'
import { NewItemForm } from './form.js';

NewFileButtonCreator();
NewFile('Notes');
const addButtonContainer = document.getElementById('add-button-container');
addButtonContainer.appendChild(NewToDoItemButtonCreator());
NewItemForm();
