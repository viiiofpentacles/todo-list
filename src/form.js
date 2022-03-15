import { TodoItemCreator } from './todo-items.js';
import { displayNewItem } from './update-display.js';

const NewItemForm = () => {
    const form = document.createElement('form');
    form.hidden = true;
    form.id = 'new-todo-form';
    document.getElementById('add-button-container').appendChild(form);
    FormInputs('Title', 'text');
    FormInputs('Description', 'text');
    FormInputs('Due', 'date');
    
    const prioritySelector = document.createElement('input');
      prioritySelector.setAttribute('type', 'checkbox');
      prioritySelector.setAttribute('value', 'yes');
      prioritySelector.id = 'priority';
    
    const priorityLabel = document.createElement('label');
      priorityLabel.setAttribute('for', 'priority');
      priorityLabel.textContent = 'Prioritize?';
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelector);

    const fileName = document.createElement('input');
    fileName.id = 'fileName';
    fileName.setAttribute('type', 'hidden');
    fileName.setAttribute('value', 'Notes'); 
    form.appendChild(fileName);
    
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.id = 'submit-button';
    submitButton.value = 'Add to List';
    form.appendChild(submitButton);
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        TodoItemCreator();
        displayNewItem();
        form.hidden = true;
        form.reset();
    });
}

const FormInputs = (name, type) => {
    const inputField = document.createElement('input');
      inputField.setAttribute('type', type);
      inputField.id = name;
    const inputLabel = document.createElement('label');
      inputLabel.setAttribute('for', name);
      inputLabel.textContent = name;
    const form = document.getElementById('new-todo-form');
    form.appendChild(inputLabel);  
    form.appendChild(inputField);
}
  
export { NewItemForm };