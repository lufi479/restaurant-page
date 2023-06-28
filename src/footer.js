function loadFooter(){
    const footer = document.createElement("div");
    footer.classList.add("footer");
    let text1 = "Background by "
    const creator = document.createElement("a");
    creator.href = "https://unsplash.com/@kfred?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    creator.textContent = "Karl Fredrickson";
    let text2 = " on ";
    const website = document.createElement("a");
    website.href = "https://unsplash.com/images/food/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    website.textContent = "Unsplash";

    footer.appendChild(document.createTextNode(text1));
    footer.appendChild(creator);
    footer.appendChild(document.createTextNode(text2));
    footer.appendChild(website);

    return footer;
}

export default loadFooter;