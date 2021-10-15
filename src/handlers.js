import { updateProjectList, updateActiveTab } from "./createDOMElements";
import updateStorage from "./storage";

const handlers = () => {
    
    const _refreshProjectList = () => {
        const projects = updateStorage.getProjects(); // Update projects in storage
        _setProjectList(projects); // Update projects on DOM
        //_setActiveTab(tab)
    }

    const _setProjectList = (projects) => {
        updateProjectList(projects); // TODO: create updateProjectList function
    }

    const _setActiveTab = (tab) => {
        const activeTab = tab;
        updateActiveTab(tab) // TODO: create updateActiveTab function
    }

    // Here be handlers
    const onProjectSelect = (projectId) => {
        const projects = updateStorage.getProjects();
        const selectedProject = projects.find(project => project.id == projectId); // Don't think it will know what projects is, might have to declare variable
        //console.log(selectedProject);
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
    }

    return { onProjectSelect, onProjectAdd, }
    
}

export default handlers();