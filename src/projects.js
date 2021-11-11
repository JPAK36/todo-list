import { addProjectToSidebar, addProjectToNotepad, createElements } from "./createDOMElements";
import handlers from "./handlers";
import updateStorage from "./storage"

const awaitingInput = () => {
    const userInput = document.querySelector('#user-input');
    if (userInput != null) return true;

    return false;
}

const handleUserInput = () => { 
    // This is DOM Stuff
    const userInput = document.querySelector('#user-input')
    const inputForm = userInput.parentElement;
    const projectItem = inputForm.parentElement;
    const projectSpan = createElements().createSpanElement('project-name');
    
    const projectName = userInput.value.trim();
    if (!projectName) return;

    projectSpan.textContent = projectName;
    userInput.parentElement.remove();
    projectItem.insertBefore(projectSpan, projectItem.childNodes[0]); 
}

const addProject = () => {
    if (awaitingInput()) return;
    addProjectToSidebar();
    
    const userInput = document.querySelector('#user-input');
    const inputForm = userInput.parentElement;
    const projectItem = inputForm.parentElement;

    userInput.addEventListener('blur', function () {
        if (userInput.value.trim() == '') {
            projectItem.remove();
            return;
        }
        handleUserInput();
        if (!awaitingInput()) addProjectToNotepad();
        const projectName = projectItem.firstElementChild.textContent;
        handlers.onProjectAdd(projectName); 
    });

    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        handleUserInput();
        if (!awaitingInput()) addProjectToNotepad();
        const projectName = projectItem.firstElementChild.textContent;
        handlers.onProjectAdd(projectName); 
    });
}
const deleteProject = () => {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.delete-project')) {
            const projectItem = e.target.closest('.project-item')
            projectItem.remove();
            const projectId = projectItem.dataset.projectId;
            updateStorage.deleteProject(projectId);
        }
    });
    // TODO: Remove project from notepad by reloading localStorage items for current selected tab (i.e. Today). If current select tab is the one that is deleted load notepad with Home tab 
}

// TODO: create function to update project name on notepad when user edits it
 
const editProject = (e) => {
    if (awaitingInput()) return;
    
    // This is DOM Stuff
    const inputForm = createElements().createForm();
    const inputField = createElements().createInputField('Project name...');
    const projectName = e.target.parentElement.previousElementSibling;

    inputField.value = projectName.textContent;
    projectName.remove();
    inputForm.append(inputField);

    const projectItem = e.target.closest('.project-item');
    projectItem.insertBefore(inputForm, projectItem.childNodes[0]);

    const userInput = document.querySelector('#user-input');
    
    const projectId = projectItem.dataset.projectId;

    userInput.addEventListener('blur', function () {
        if (userInput.value != '') handleUserInput();
        //if (!awaitingInput()) editProjectOnNotepad();
        const projectName = projectItem.firstElementChild.textContent;
        handlers.onProjectEdit(projectId, projectName, 'beans'); // TODO: Figure out how to store task data
    });

    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        handleUserInput();
        //if (!awaitingInput()) editProjectOnNotepad();
        const projectName = projectItem.firstElementChild.textContent;
        handlers.onProjectEdit(projectId, projectName, 'beans'); // TODO: Figure out how to store task data
    });
}

export { 
    addProject,
    deleteProject,
    editProject
}