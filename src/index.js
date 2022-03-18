import './style.css';
import { NewFileButtonCreator, NewToDoItemButtonCreator } from './DOMbuttons';
import { displayFileItems, NewFile } from './update-display.js'
import { NewItemForm } from './form.js';
import { fileArray } from './todo-items.js';

if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        const todoItem = JSON.parse(localStorage.getItem(key));
        fileArray.push(todoItem);
    }
}

NewFileButtonCreator();

const displayStorageFiles = (() => {
    const listOfFiles = [];
    for (let i = 0; i < fileArray.length; i++) {
        if (!listOfFiles.includes(fileArray[i].fileName)) {
        listOfFiles.push(fileArray[i].fileName);
        };
    };
    for (let i = 0; i < listOfFiles.length; i++) { 
        NewFile(listOfFiles[i]);
    }
})();

displayFileItems('Notes');
const addButtonContainer = document.getElementById('add-button-container');
addButtonContainer.appendChild(NewToDoItemButtonCreator());
NewItemForm();
