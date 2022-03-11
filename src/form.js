import { TodoItemCreator, AddToFileObject } from './todo-items.js'

const NewItemForm = () => {
    const form = document.createElement('form');
    form.id = 'new-todo-form';
    document.getElementById('todo-list').appendChild(form);
    FormInputs('Title', 'text');
    FormInputs('Description', 'text');
    FormInputs('Due Date', 'date');
    const prioritySelector = document.createElement('input');
      prioritySelector.setAttribute('type', 'checkbox');
      prioritySelector.setAttribute('value', 'yes');
      prioritySelector.id = 'priority';
    const priorityLabel = document.createElement('label');
      priorityLabel.setAttribute('for', 'priority');
      priorityLabel.textContent = 'Prioritize?';
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelector);
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.id = 'submit-button';
    submitButton.value = 'Add to List';
    form.appendChild(submitButton);
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
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