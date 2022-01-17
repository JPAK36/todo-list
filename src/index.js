import { addProject, deleteProject, editProject } from "./projects";
import updateStorage from "./storage";
import { updateProjectList } from "./createDOMElements";
import { toggleTask, addTaskToDOM, addTask, updatePriority, deleteTask, editTask, adjustElementHeight } from "./tasks";
import handlers from "./handlers";

// Load localStorage items on page load
window.onload = () => {
    const projects = updateStorage.getProjects();
    const tab = document.querySelector('[data-tab="home"]');

    // TODO : THIS WORKS BUT LOOK INTO ResizeObserver BECAUSE IT BREAKS WHEN ADJUSTING SCREEN SIZE
    const observer = new MutationObserver(entries => {
        entries.forEach(entry  => {
            if (entry.addedNodes.length) {
                const taskContainers = document.querySelectorAll('.task');
                
                taskContainers.forEach(container => {
                    if (container.querySelector('.add-task')) {
                        const taskTextSpan = container.querySelector('.add-task');
                        adjustElementHeight(container, taskTextSpan);
                    } else {
                        const taskTextSpan = container.querySelector('.task-text');
                        adjustElementHeight(container, taskTextSpan);
                    }
                });
            } 
        });
    });
    const writingArea = document.querySelector('#writing-area');
    const mutationConfig = { childList: true };
    
    observer.observe(writingArea, mutationConfig);

    updateProjectList(projects);
    handlers.onHomeTabSelect(projects, tab);
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

    const homeTab = sidebar.querySelector('[data-tab="home"]');
    const todayTab = sidebar.querySelector('[data-tab="today"]');
    const thisWeekTab = sidebar.querySelector('[data-tab="this-week"]');

    
    homeTab.addEventListener('click', () => {
        const projects = updateStorage.getProjects();
        handlers.onHomeTabSelect(projects, homeTab);
    });

    todayTab.addEventListener('click', () => {
        const projects = updateStorage.getProjects();
        handlers.onTodayTabSelect(projects, todayTab);
    });

    thisWeekTab.addEventListener('click', () => {
        const projects = updateStorage.getProjects();
        handlers.onThisWeekTabSelect(projects, thisWeekTab);
    });

})();

const projectController = (() => {
    deleteProject();
    const addProjectBtn = document.querySelector('[data-add-project]');
    addProjectBtn.addEventListener('click', addProject);
    const projectList = document.querySelector('.project-list');

    projectList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-project')) {
            editProject(e);
        }
    });
})();

const taskController = (() => {
    const notepad = document.querySelector('.notepad');
    notepad.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-text')) {
            const taskElement = e.target.closest('.task');
            toggleTask(taskElement);
        }
        else if (e.target.classList.contains('add-task')) {
            addTaskToDOM(e.target);
            addTask();
        }
        else if (e.target.classList.contains('priority-icon')) {
            updatePriority(e.target);
        }
        else if(e.target.classList.contains('edit-icon')) {
            const task = e.target.closest('.task');
            editTask(task);
        }
        else if(e.target.classList.contains('delete-icon')) {
            const projectId = e.target.closest('[data-project-id]').dataset.projectId;
            const taskId = e.target.closest('[data-task-id]').dataset.taskId;
            deleteTask(projectId, taskId);
        }
    });
})();