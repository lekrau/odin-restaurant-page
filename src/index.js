import "./styles.css";
import { switchActiveButton } from "./utilities.js";
import loadHomePage from "./home-page-load.js";
import loadMenuPage from "./menu-page-load.js";
import loadContactPage from "./contact-page-load.js";

const nav = document.querySelector("nav");
const homeButton = nav.querySelector(".button.home");
const menuButton = nav.querySelector(".button.menu");
const contactButton = nav.querySelector(".button.contact");
const content = document.querySelector("#content");

homeButton.addEventListener("click", () => {
    switchActiveButton(homeButton);
    content.innerHTML = "";
    loadHomePage();
});
menuButton.addEventListener("click", () => {
    switchActiveButton(menuButton);
    content.innerHTML = "";
    loadMenuPage();
});
contactButton.addEventListener("click", () => {
    switchActiveButton(contactButton);
    content.innerHTML = "";
    loadContactPage();
});

loadHomePage();
switchActiveButton(homeButton);