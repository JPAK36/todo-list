import { updateProjectList, updateActiveTab } from "./createDOMElements";
import updateStorage from "./storage";
import {format} from "date-fns";

const handlers = () => {
    
    const _refreshProjectList = () => {
        const projects = updateStorage.getProjects(); // Update projects in storage        
        _setProjectList(projects); // Update projects on DOM
    }

    const _setProjectList = (projects) => {
        updateProjectList(projects);
    }

    const _setActiveTab = (tab) => {
        updateActiveTab(tab);
    }

    // Here be handlers
    const onProjectSelect = (projectId) => {
        const projects = updateStorage.getProjects();
        const projectObject = projects.find(project => project.id == projectId);
        const selectedProject = document.querySelector(`[data-project-id='${projectObject.id}']`);
        _setActiveTab(selectedProject);
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
        _setActiveTab(newProjectDOMElement);
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

    return { onProjectSelect, onProjectAdd, onProjectNameEdit, onTaskAdd, onTaskNameEdit, onTaskPriorityEdit, onTaskDueDateEdit, onTaskCompleteEdit }
    
}

export default handlers();