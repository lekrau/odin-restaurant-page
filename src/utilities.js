export default function addElement(tag, text, parent, classes = []) {
    const element = document.createElement(tag);
    element.innerHTML = text;
    classes.forEach(value => {
        element.classList.add(value);
    });
    parent.appendChild(element);
    return element;
};