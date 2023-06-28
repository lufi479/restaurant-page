import loadMain from "./main-page";
import loadMenu from "./menu-page";
import loadHeader from "./header";
import loadFooter from "./footer";
import loadContact from "./contact-page";

const content = document.getElementById("content");


content.appendChild(loadHeader());
content.appendChild(loadMain());
content.appendChild(loadFooter());


document.querySelector(".nav-home").addEventListener("click", () =>{
    content.replaceChild(loadMain(), content.childNodes[1]);
});


document.querySelector(".nav-menu").addEventListener("click", () =>{
    content.replaceChild(loadMenu(), content.childNodes[1]);
});

document.querySelector(".nav-contact").addEventListener("click", () =>{
    content.replaceChild(loadContact(), content.childNodes[1]);
});