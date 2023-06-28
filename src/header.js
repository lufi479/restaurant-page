function loadHeader(){
    let header = document.createElement("div");
    header.classList.add("header");
   
    let logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "R C";


    let ul = document.createElement("ul");
    ul.classList.add("navigation");


    let home = document.createElement("li");
    home.classList.add("nav-home");

    let homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.textContent = "Home";

    home.appendChild(homeLink);


    let menu = document.createElement("li");
    menu.classList.add("nav-menu");

    let menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.textContent = "Menu";

    menu.appendChild(menuLink);


    let contact = document.createElement("li");
    contact.classList.add("nav-contact");

    let contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.textContent = "Contact";

    contact.appendChild(contactLink);

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);

    header.appendChild(logo);
    header.appendChild(ul);

    return header;

}

export default loadHeader;