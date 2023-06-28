
function loadPage(){
    const hero = document.createElement("div");
    hero.classList.add("main-hero");

    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = "Random Cafe";

    const saying = document.createElement("div");
    saying.classList.add("saying");
    saying.textContent = "The best cafe in the area";

    hero.appendChild(name);
    hero.appendChild(saying);

    return hero;

}

export default loadPage;