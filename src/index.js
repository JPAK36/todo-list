import { addProject, deleteProject, editProject } from "./projects";
import updateStorage from "./storage";
import { updateProjectList, loadAllProjects } from "./createDOMElements";
import { toggleTask, addTaskToDOM, addTask, updatePriority } from "./tasks";

// Load localStorage items on page load
window.onload = () => {
    const projects = updateStorage.getProjects();
    updateProjectList(projects);
    loadAllProjects(projects);
}

// Sidebar Module
const sidebarController = (() => {

    const mobileToggleBtn = document.getElementById('bars-icon-mobile');
    if (window.innerWidth <= 1024 && mobileToggleBtn.classList.contains('hidden')) {
        mobileToggleBtn.classList.toggle('hidden');
    }

    const sidebar = document.getElementById('sidebar');
    
    const toggleSidebar = () => {
        sidebar.classList.toggle('toggle-sidebar');
        if (window.innerWidth <= 1024) mobileToggleBtn.classList.toggle('hidden');
    }
    
    const toggleBtn = document.querySelectorAll('.bars-icon');
    toggleBtn.forEach(button => {
        button.addEventListener('click', toggleSidebar);
    });        
})();

const projectController = (() => {
    deleteProject();
    const addProjectBtn = document.querySelector('[data-add-project]');
    addProjectBtn.addEventListener('click', addProject);

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-project')) {
            editProject(e);
        }
    });
})();

const taskController = (() => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-text')) {
            const taskElement = e.target.closest('.task');
            toggleTask(taskElement);
        }
        if (e.target.classList.contains('add-task')) {
            addTaskToDOM(e.target);
            addTask();
        }
        if (e.target.classList.contains('priority-icon')) {
            updatePriority(e.target);
        }
    });
})();