import { FileCreator } from './file.js';

const NewFile = (name) => {
    FileCreator(name);
    const fileDiv = document.createElement('div');
    fileDiv.id = name;  
    fileDiv.textContent = name;
    document.getElementById('files-container').appendChild(fileDiv);
}

const NewFileButtonCreator = () => {
    const newFileButton = document.createElement('button');
    newFileButton.textContent = 'New';
    newFileButton.addEventListener('click', () => {
      const newFileName = prompt('Please name your new file.', 'New File');
      NewFile(newFileName);
    });
    document.getElementById('files-container').appendChild(newFileButton);
}


export { NewFile, NewFileButtonCreator };