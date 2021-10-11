import createElements from "./createDOMElements";

const addProjectToSidebar = () => {
    const projectsContainer = document.querySelector('.project-list');

    const projectListElement =  createElements.createListElement('project-item');
    
    const projectInputForm = createElements.createForm();
    const projectNameInput = createElements.createInputField('Project name...');
    projectInputForm.append(projectNameInput);

    const newProject = (name) => {
        const newProject = createElements.createSpanElement('project-name');
        newProject.textContent = name;
        return newProject;
    }

    const iconSpan = createElements.createSpanElement('icons');
    const editIcon = createElements.createImageElement('images/edit-icon.svg', 'edit-icon');
    const deleteIcon = createElements.createImageElement('images/delete-icon.svg', 'delete-icon');
    
    editIcon.classList.add('edit-project');
    deleteIcon.classList.add('delete-project');
    
    iconSpan.append(editIcon, deleteIcon);
    projectListElement.append(projectInputForm, iconSpan);
    projectsContainer.insertBefore(projectListElement, projectsContainer.lastElementChild);

    return {newProject, projectNameInput, projectInputForm, iconSpan, projectListElement}
}

const awaitingInput = () => {
    const userInput = document.querySelector('#user-input');
    if (userInput != null) return true;

    return false;
}

const handleUserInput = () => { 
    const userInput = document.querySelector('#user-input')
    const inputForm = userInput.parentElement;
    const projectItem = inputForm.parentElement;
    const projectSpan = createElements.createSpanElement('project-name');
    
    const projectName = userInput.value.trim()
    if (!projectName) return;

    projectSpan.textContent = projectName;
    userInput.parentElement.remove();
    projectItem.insertBefore(projectSpan, projectItem.childNodes[0]); 
}

const addProjectToNotepad = () => {
    const projectList = document.querySelector('.project-list');
    const currentProjectNumber = projectList.childElementCount - 2;
    const projectName = projectList.children[currentProjectNumber].textContent;

    const notepad = document.querySelector('#writing-area');
    const projectDiv = createElements.createDiv('project');
    const skipLine = createElements.createDiv('skip-line');
    
    const projectHeading = createElements.createDiv('project-heading');
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'notepad-text');
    h2.textContent = projectName;
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'notepad-text');
    h3.textContent = 'Due Date';
        
    const tasksContainer = document.createElement('ul');
    tasksContainer.classList.add('notepad-text', 'todos');

    const addTaskListElement = createElements.createListElement('task');
    const addTaskSpan = createElements.createSpanElement('add-task');
    const addIcon = createElements.createImageElement('images/add-icon.svg', 'add-icon');
    addTaskSpan.append(addIcon, 'Add Task');

    addTaskListElement.append(addTaskSpan);
    tasksContainer.append(addTaskListElement);
    projectHeading.append(h2, h3);
    projectDiv.append(projectHeading, tasksContainer);
    notepad.append(projectDiv, skipLine);
}

const addProject = () => {
    if (awaitingInput()) return;
    addProjectToSidebar();

    const userInput = document.querySelector('#user-input')
    const inputForm = userInput.parentElement;

    userInput.addEventListener('blur', function () {
        if (userInput.value != '') handleUserInput();
        if (!awaitingInput()) addProjectToNotepad();
    });

    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        handleUserInput();
        if (!awaitingInput()) addProjectToNotepad();
    });
}
// TODO: Look into how to add local storage to possibly make editing and deleting easier. Or reference library project for its use of arrays to store user data
// TODO: Add function to delete project from notepad as well
const deleteProject = () => {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.delete-project')) {
            e.target.closest('.project-item').remove();
        }
    });
}
// TODO: create function to update project name on notepad when user edits it
 
const editProject = (e) => {
    if (awaitingInput()) return;
    const inputForm = createElements.createForm();
    const inputField = createElements.createInputField('Project name...');
    const projectName = e.target.parentElement.previousElementSibling;

    inputField.value = projectName.textContent;
    projectName.remove();
    inputForm.append(inputField);

    const projectItem = e.target.closest('.project-item');
    projectItem.insertBefore(inputForm, projectItem.childNodes[0]);

    const userInput = document.querySelector('#user-input');

    userInput.addEventListener('blur', function () {
        if (userInput.value != '') handleUserInput();
        //if (!awaitingInput()) editProjectToNotepad();
    });

    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        handleUserInput();
        //if (!awaitingInput()) editProjectOnNotepad();
    });
}

export { 
    addProject,
    deleteProject,
    editProject,
    createElements
}