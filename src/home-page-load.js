import tableImage from "./mediterranean-restaurant-table.jpg";

export default function loadHomePage() {
    console.log("Load home page");
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const description = document.createElement("p");
    const additionalText = document.createElement("p");
    const image = document.createElement("img");

    content.innerHTML = "";
    h1.textContent = "Ember & Olive";
    h2.textContent = "Mediterranean food, made for sharing.";
    description.textContent = "Fresh ingredients, bold flavors, and a table worth gathering around. At Ember & Olive, we serve seasonal Mediterranean dishes inspired by simple recipes and long evenings with good company.";
    additionalText.textContent = "Join us for dinner Tuesday through Sunday in the heart of the city.";
    image.src = tableImage;
    image.alt = "Mediterranean dishes served on a warmly lit restaurant table, including grilled fish, salad, vegetables, bread, olives, and wine.";

    content.appendChild(h1);
    content.appendChild(h2);
    content.appendChild(description);
    content.appendChild(additionalText);
    content.appendChild(image);

    console.log("Home page loaded");
};