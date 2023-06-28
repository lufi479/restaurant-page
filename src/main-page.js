
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

    // const footer = document.createElement("div");
    // footer.classList.add("footer");
    // let text1 = "Background by "
    // const creator = document.createElement("a");
    // creator.href = "https://unsplash.com/@kfred?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    // creator.textContent = "Karl Fredrickson";
    // let text2 = " on ";
    // const website = document.createElement("a");
    // website.href = "https://unsplash.com/images/food/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    // website.textContent = "Unsplash";

    // footer.appendChild(document.createTextNode(text1));
    // footer.appendChild(creator);
    // footer.appendChild(document.createTextNode(text2));
    // footer.appendChild(website);

    // const content = document.getElementById("content");

    // content.appendChild(hero);
    // content.appendChild(footer);

    return hero;

}

export default loadPage;