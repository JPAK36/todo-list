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
    // Add optional parameters? priority = 'low', dueDate = currentDate, isComplete= false
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
        // TODO: Append newTask to tasks array
                // 1) Get Projects: const projects = updateStorage.getProjects();
                // 2) find project matching id: const projectToUpdate = projects.find(project => project.id == id)
                // 3) get tasks array and append newTask: projectToUpdate.tasks.push(newTask);
                // 4) saveProject to localStorage: updateStorage.saveProject(projectToUpdate); *Might have to edit saveProject function in storage.js
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

    /*const onTaskNameEdit = (taskId, taskName) => {
        
    }*/

    return { onProjectSelect, onProjectAdd, onProjectNameEdit, onTaskAdd }
    
}

export default handlers();