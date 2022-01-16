import { updateProjectList, updateActiveTab, addProjectToNotepad, loadTask } from "./createDOMElements";
import updateStorage from "./storage";
import { isThisWeek, isToday, parseISO } from "date-fns";

const handlers = () => {
    
    const _refreshProjectList = () => {
        const projects = updateStorage.getProjects(); // Update projects in storage        
        updateProjectList(projects); // Update projects on DOM
    }

    const onHomeTabSelect = (projects, tab) => {
        loadAllProjects(projects);  
        updateActiveTab(tab);
    }
    
    const onTodayTabSelect = (projects, tab) => {
        loadAllProjects(projects);
        // Filter projects that have tasks due today
        projects.forEach(project => {
            const tasks = project.tasks;

            const todaysTasks = tasks.filter(task => dueToday(task));
            
            // Hide project container if no tasks due today
            if (todaysTasks.length === 0) {
                const notepad = document.querySelector('.notepad')
                const projectContainer = notepad.querySelector(`[data-project-id="${project.id}"]`);
                projectContainer.remove();
            }

            // Remove tasks that are not due today from DOM
            const notDueToday = tasks.filter(task => !dueToday(task));
            
            notDueToday.forEach(task => {
                const taskContainer = document.querySelector(`[data-task-id="${task.taskId}"]`);
                if (taskContainer) taskContainer.remove();
            });
        });
        updateActiveTab(tab);
    }

    const dueToday = (task) => {
        if (isToday(parseISO(task.dueDate))) return task;
    }

    const onThisWeekTabSelect = (projects, tab) => {
        loadAllProjects(projects);

        projects.forEach(project => {
            const tasks = project.tasks;
            const thisWeeksTasks = tasks.filter(task => dueThisWeek(task));

            // Hide project container if no tasks due this week
            if (thisWeeksTasks.length === 0) {
                const notepad = document.querySelector('.notepad')
                const projectContainer = notepad.querySelector(`[data-project-id="${project.id}"]`);
                projectContainer.remove();
            }

            // Remove tasks that are not due this week from DOM
            const notDueThisWeek = tasks.filter(task => !dueThisWeek(task));
            
            notDueThisWeek.forEach(task => {
                const taskContainer = document.querySelector(`[data-task-id="${task.taskId}"]`);
                if (taskContainer) taskContainer.remove();
            });
        });   
        updateActiveTab(tab);
    }

    const dueThisWeek = (task) => {
        if (isThisWeek(parseISO(task.dueDate))) return task;
    }

    const loadAllProjects = (projects) => {
        clearProjectsFromDOM();
        const notepad = document.querySelector('.notepad');
        
        projects.forEach(project => {
            addProjectToNotepad(project.id);

            const projectTasks = project.tasks;
            const projectContainer = notepad.querySelector(`[data-project-id="${project.id}"]`);
            const tasksList = projectContainer.querySelector('ul');
            const addTaskBtn = projectContainer.querySelector('.add-task');
            
            projectTasks.forEach(task => {
                const taskToAdd = loadTask(task);
                tasksList.insertBefore(taskToAdd, addTaskBtn.parentElement);
            });
        });
    }  

    const clearProjectsFromDOM = () => {
        const writingArea = document.querySelector('#writing-area');
        const projects = writingArea.querySelectorAll('.project');
        projects.forEach(project => project.remove());
    }

    const onProjectSelect = (projectId) => {
        const projects = updateStorage.getProjects();
        loadAllProjects(projects);
        const projectObject = projects.find(project => project.id == projectId);
        const sidebar = document.querySelector('#sidebar');
        const selectedProject = sidebar.querySelector(`[data-project-id='${projectObject.id}']`);
        const projectsOnNotepad = document.querySelectorAll('.project');

        projectsOnNotepad.forEach(project => {
            if (project.dataset.projectId != projectId) {
                project.remove();
            } 
        });
        updateActiveTab(selectedProject);
    }

    const onProjectAdd = (projectName) => {
        // pass user input into function
        const newProject =  {
            projectName: projectName,
            tasks: []
        }
        updateStorage.saveProject(newProject);
        // add input to page
        _refreshProjectList();
        const newProjectDOMElement = document.querySelector(`[data-project-id='${newProject.id}']`);
        //updateActiveTab(newProjectDOMElement);
    }
    
    const onTaskAdd = (task, id) => {
        const newTask = {
            item: task, 
            taskId: Math.floor(Math.random() * 1000000),
            priority: 'low',
            dueDate: null,
            isComplete: false
        }
        const projects = updateStorage.getProjects();
        const projectToUpdate = projects.find(project => project.id == id);
        projectToUpdate.tasks.push(newTask);
        updateStorage.saveProject(projectToUpdate);
        
        return newTask;
    }
    
    const onProjectNameEdit = (projectId, projectName, tasks = updateStorage.getTasks(projectId)) => {
        updateStorage.saveProject({
            id: projectId,
            projectName: projectName,
            tasks: tasks
        });

        _refreshProjectList();
    }

    const onTaskNameEdit = (projectId, taskId, newTaskName) => {
        const existingTask = updateStorage.findTaskToUpdate(projectId, taskId);
        updateStorage.updateTask(projectId, {
                item: newTaskName,
                taskId: existingTask.taskId,
                priority: existingTask.priority,
                dueDate: existingTask.dueDate,
                isComplete: existingTask.isComplete
            });  
    }

    const onTaskPriorityEdit = (projectId, taskId, newPriority) => {
        const existingTask = updateStorage.findTaskToUpdate(projectId, taskId);
        updateStorage.updateTask(projectId, {
                item: existingTask.item,
                taskId: existingTask.taskId,
                priority: newPriority,
                dueDate: existingTask.dueDate,
                isComplete: existingTask.isComplete
            });  
    }

    const onTaskDueDateEdit = (projectId, taskId, newDueDate) => {
        const existingTask = updateStorage.findTaskToUpdate(projectId, taskId);
        updateStorage.updateTask(projectId, {
                item: existingTask.item,
                taskId: existingTask.taskId,
                priority: existingTask.priority,
                dueDate: newDueDate,
                isComplete: existingTask.isComplete
            });  
    }

    const onTaskCompleteEdit = (projectId, taskId, isComplete) => {
        const existingTask = updateStorage.findTaskToUpdate(projectId, taskId);
        updateStorage.updateTask(projectId, {
                item: existingTask.item,
                taskId: existingTask.taskId,
                priority: existingTask.priority,
                dueDate: existingTask.dueDate,
                isComplete: isComplete
            });  
    }

    return { onProjectSelect, onProjectAdd, onProjectNameEdit, onTaskAdd, onTaskNameEdit, onTaskPriorityEdit, onTaskDueDateEdit, onTaskCompleteEdit, onHomeTabSelect, onTodayTabSelect, onThisWeekTabSelect }
    
}

export default handlers();