import loadMain from "./main-page";
import loadMenu from "./menu-page";
import loadHeader from "./header";
import loadFooter from "./footer";

console.log(loadMain());

const content = document.getElementById("content");


content.appendChild(loadHeader());
content.appendChild(loadMain());
content.appendChild(loadFooter());