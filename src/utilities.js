function addElement(tag, text, parent, classes = []) {
    const element = document.createElement(tag);
    element.textContent = text;
    classes.forEach(value => {
        element.classList.add(value);
    });
    parent.appendChild(element);
    return element;
};

function switchActiveButton(target) {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(button => {
        if (button === target) {
            button.classList.add("active");
            button.setAttribute("aria-current", "page");
        } else {
            button.classList.remove("active");
            button.removeAttribute("aria-current");
        }
    });
}

export { addElement, switchActiveButton };
