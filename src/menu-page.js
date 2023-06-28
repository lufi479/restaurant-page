function loadPage(){
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const header = document.createElement("div");
    header.classList.add("menu-header");
    header.textContent = "Menu";

    const container = document.createElement("div");
    container.classList.add("item-container");

    //Coffee Item
    const coffeeItem = document.createElement("div");
    coffeeItem.classList.add("item");

    const coffeeName = document.createElement("div");
    coffeeName.classList.add("item-name");
    coffeeName.textContent = "Coffee";

    const coffeeDesc = document.createElement("div");
    coffeeDesc.classList.add("item-desc");
    coffeeDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const coffeePrice = document.createElement("div");
    coffeePrice.classList.add("item-price");
    coffeePrice.textContent = "$5.99";

    coffeeItem.appendChild(coffeeName);
    coffeeItem.appendChild(coffeeDesc);
    coffeeItem.appendChild(coffeePrice);

    container.appendChild(coffeeItem);

    //Latte Item
    const latteItem = document.createElement("div");
    latteItem.classList.add("item");

    const latteName = document.createElement("div");
    latteName.classList.add("item-name");
    latteName.textContent = "Latte";

    const latteDesc = document.createElement("div");
    latteDesc.classList.add("item-desc");
    latteDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const lattePrice = document.createElement("div");
    lattePrice.classList.add("item-price");
    lattePrice.textContent = "$5.99";

    latteItem.appendChild(latteName);
    latteItem.appendChild(latteDesc);
    latteItem.appendChild(lattePrice);

    container.appendChild(latteItem);

    //Expresso Item
    const exprItem = document.createElement("div");
    exprItem.classList.add("item");

    const exprName = document.createElement("div");
    exprName.classList.add("item-name");
    exprName.textContent = "Expresso";

    const exprDesc = document.createElement("div");
    exprDesc.classList.add("item-desc");
    exprDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const exprPrice = document.createElement("div");
    exprPrice.classList.add("item-price");
    exprPrice.textContent = "$5.99";

    exprItem.appendChild(exprName);
    exprItem.appendChild(exprDesc);
    exprItem.appendChild(exprPrice);

    container.appendChild(exprItem);

    //Tea Item
    const teaItem = document.createElement("div");
    teaItem.classList.add("item");

    const teaName = document.createElement("div");
    teaName.classList.add("item-name");
    teaName.textContent = "Tea";

    const teaDesc = document.createElement("div");
    teaDesc.classList.add("item-desc");
    teaDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const teaPrice = document.createElement("div");
    teaPrice.classList.add("item-price");
    teaPrice.textContent = "$5.99";

    teaItem.appendChild(teaName);
    teaItem.appendChild(teaDesc);
    teaItem.appendChild(teaPrice);

    container.appendChild(teaItem);

    //Cold Bre Coffee Item
    const coldItem = document.createElement("div");
    coldItem.classList.add("item");

    const coldName = document.createElement("div");
    coldName.classList.add("item-name");
    coldName.textContent = "Cold Brew Coffee";

    const coldDesc = document.createElement("div");
    coldDesc.classList.add("item-desc");
    coldDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const coldPrice = document.createElement("div");
    coldPrice.classList.add("item-price");
    coldPrice.textContent = "$5.99";

    coldItem.appendChild(coldName);
    coldItem.appendChild(coldDesc);
    coldItem.appendChild(coldPrice);

    container.appendChild(coldItem);

    menu.appendChild(header);
    menu.appendChild(container);

    return menu;

}

export default loadPage;