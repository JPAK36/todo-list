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
            tasks: '[]'
        }
        updateStorage.saveProject(newProject);
        // add input to page
        _refreshProjectList();
        const newProjectDOMElement = document.querySelector(`[data-project-id='${newProject.id}']`);
        _setActiveTab(newProjectDOMElement);
    }

    const onTaskAdd = () => {
        const date = new Date();
        const currentDate = format(date, "MM/dd/yyyy");

        const newTask = {
            task: {
                item: 'name',
                priority: low,
                dueDate: currentDate,
                isComplete: false
            }
        }
    }

    const onProjectEdit = (projectId, projectName, tasks) => {
        updateStorage.saveProject({
            id: projectId,
            projectName: projectName,
            tasks: tasks
        });

        _refreshProjectList();
    }

    return { onProjectSelect, onProjectAdd, onProjectEdit }
    
}

export default handlers();