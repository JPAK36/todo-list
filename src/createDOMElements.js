// DOM Elements Factory Function
const createElements = () => {
    
    const createListElement = (htmlClass) => {
        const li = document.createElement('li');
        li.setAttribute('class', htmlClass);
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
        img.setAttribute('draggable', 'false');
        return img;
    }
    
    const createForm = () => {
        const inputForm = document.createElement('form');
        return inputForm;
    }

    const createInputField = (placeholderText) => {
        const userInput = document.createElement('input');
        userInput.setAttribute('type', 'text');
        userInput.setAttribute('placeholder', placeholderText);
        userInput.setAttribute('id', 'user-input');
        userInput.required = true;

        return userInput;
    }

    const createDiv = (htmlClass) => {
        const div = document.createElement('div');
        div.setAttribute('class', htmlClass);
        return div;
    }

    return {createListElement, createSpanElement, createImageElement, createInputField, createForm, createDiv}
}

export default createElements();