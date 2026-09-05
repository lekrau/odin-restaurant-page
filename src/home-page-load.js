import tableImage from "./mediterranean-restaurant-table.jpg";
import { addElement } from "./utilities.js";

export default function loadHomePage() {
    const content = document.querySelector("#content");

    addElement("h1", "Ember & Olive", content);
    addElement("h2", "Mediterranean food, made for sharing.", content);
    addElement("p", "Fresh ingredients, bold flavors, and a table worth gathering around. At Ember & Olive, we serve seasonal Mediterranean dishes inspired by simple recipes and long evenings with good company.", content, ["description"]);
    addElement("p", "Join us for dinner Tuesday through Sunday in the heart of the city.", content, ["additional-text"]);

    const image = document.createElement("img");
    image.src = tableImage;
    image.alt = "Mediterranean dishes served on a warmly lit restaurant table, including grilled fish, salad, vegetables, bread, olives, and wine.";
    image.classList.add("restaurant-table");
    content.appendChild(image);
};