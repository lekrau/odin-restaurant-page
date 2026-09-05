import { addElement } from "./utilities.js";

export default function loadContactPage() {
    console.log("Load contact page");

    const content = document.querySelector("#content");

    addElement("h1", "Ember & Olive", content);
    addElement("h2", "Contact", content);
    addElement("p", "Planning dinner with friends or simply want to stop by? We’d love to welcome you.", content, ["short-text"]);
    addElement("h3", "Address", content);
    addElement("address", "Ember & Olive\n24 Market Street\nRiverside", content, ["address"]);

    addElement("h3", "Telephone", content);
    const telephone = addElement("a", "+1 555 014 8290", content, ["telephone"]);
    telephone.href = "tel:+15550148290";

    addElement("h3", "E-Mail", content);
    const email = addElement("a", "hello@emberandolive.com", content, ["email"]);
    email.href = "mailto:hello@emberandolive.com";

    const openingHoursSection = addElement("section", "", content, ["openingHours"]);
    addElement("h3", "Opening Hours", openingHoursSection);
    addElement("p", "Tuesday – Thursday: 5:00 PM – 10:00 PM", openingHoursSection);
    addElement("p", "Friday – Saturday: 5:00 PM – 11:00 PM", openingHoursSection);
    addElement("p", "Sunday: 5:00 PM – 9:00 PM", openingHoursSection);
    addElement("p", "Monday: Closed", openingHoursSection);

    console.log("Contact page loaded");
};