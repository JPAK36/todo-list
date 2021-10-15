import { updateProjectList, updateActiveTab } from "./createDOMElements";
import updateStorage from "./storage";

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
        const projectObject = projects.find(project => project.id == projectId); // Don't think it will know what projects is, might have to declare variable
        const selectedProject = document.querySelector(`[data-project-id='${projectObject.id}']`);
        _setActiveTab(selectedProject);
    }

    const onProjectAdd = (projectName) => {
        // pass user input into function
        const newProject =  {
            projectName: projectName
        }
        updateStorage.saveProject(newProject);
        // add input to page
        _refreshProjectList();
        const newProjectDOMElement = document.querySelector(`[data-project-id='${newProject.id}']`);
        console.log(newProjectDOMElement);
        _setActiveTab(newProjectDOMElement);
    }

    return { onProjectSelect, onProjectAdd, }
    
}

export default handlers();