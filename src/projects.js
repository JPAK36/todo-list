
// DOM Elements Factory Function
const createElements = () => {
    
    const createListElement = () => {
        const li = document.createElement('li');
        return li;
    }

    const createSpanElement = (htmlClass) => {
        const span = document.createElement('span');
        span.classList.add(htmlClass);
        return span;
    }

    const createImageElement = (src, htmlClass) => {
        const img = document.createElement('img');
        img.classList.add(htmlClass);
        img.setAttribute('src', src);
        return img;
    }

    return {createListElement, createSpanElement, createImageElement}
}

// Add Project Factory Function
const addProject = () => {
    const createProject = createElements();
    const projectsContainer = document.querySelector('.project-list');
    const addProjectBtn = document.querySelector('#add-project');


    const projectListElement = createProject.createListElement();
    // TODO: Find a way to allow user to input project name.
        // Try: Add input field after the projectListElement is appended to the page
        // or use contentEditable = true
    const projectName = createProject.createSpanElement('project-name');
    projectName.textContent = 'Lorem Ipsum';
    const iconSpan = createProject.createSpanElement('icons');
    const editIcon = createProject.createImageElement('images/edit-icon.svg', 'edit-icon');
    const deleteIcon = createProject.createImageElement('images/delete-icon.svg', 'delete-icon');
    
    iconSpan.append(editIcon, deleteIcon);
    projectListElement.append(projectName, iconSpan);
    projectsContainer.insertBefore(projectListElement, projectsContainer.lastElementChild);
}

export default addProject