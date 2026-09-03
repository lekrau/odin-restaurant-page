import tableImage from "./mediterranean-restaurant-table.jpg";
import addElement from "./utilities.js";

export default function loadMenuPage() {
    console.log("Load menu page");

    const content = document.querySelector("#content");

    content.innerHTML = "";

    addElement("h1", "Ember & Olive", content);
    addElement("h2", "Menu", content);
    addElement("p", "Seasonal Mediterranean dishes made for sharing. Our menu changes with the ingredients, but these are a few house favorites.", content, ["intro"]);

    const smallPlatesSection = addElement("section", "", content, ["small-plates"]);
    addElement("h3", "Small Plates", smallPlatesSection);
    const smallPlatesDishes = addElement("dl", "", smallPlatesSection, ["small-plates__dishes"]);
    addElement("dt", "Whipped Feta — €9", smallPlatesDishes);
    addElement("dd", "Roasted grapes, thyme, olive oil, warm flatbread", smallPlatesDishes);
    addElement("dt", "Charred Eggplant — €11", smallPlatesDishes);
    addElement("dd", "Tahini, pomegranate, herbs, toasted almonds", smallPlatesDishes);
    addElement("dt", "Crispy Calamari — €13", smallPlatesDishes);
    addElement("dd", "Lemon, parsley, smoked paprika aioli", smallPlatesDishes);

    const mainsSection = addElement("section", "", content, ["mains"]);
    addElement("h3", "Mains", mainsSection);
    const mainsDishes = addElement("dl", "", mainsSection, ["mains__dishes"]);
    addElement("dt", "Herb-Grilled Sea Bass — €24", mainsDishes);
    addElement("dd", "Chickpeas, roasted peppers, lemon and parsley", mainsDishes);
    addElement("dt", "Slow-Roasted Chicken — €22", mainsDishes);
    addElement("dd", "Rosemary potatoes, olives, garlic jus", mainsDishes);
    addElement("dt", "Wild Mushroom Orzo — €19", mainsDishes);
    addElement("dd", "Spinach, pecorino, toasted hazelnuts", mainsDishes);

    const dessertSection = addElement("section", "", content, ["dessert"]);
    addElement("h3", "Dessert", dessertSection);
    const dessertDishes = addElement("dl", "", dessertSection, ["dessert__dishes"]);
    addElement("dt", "Orange Olive Oil Cake — €8", dessertDishes);
    addElement("dd", "Greek yogurt, honey, pistachios", dessertDishes);

    console.log("Menu page loaded");
};

