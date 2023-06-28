function loadPage(){
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const heading = document.createElement("div");
    heading.classList.add("contact-heading");
    heading.textContent = "Contact Us";

    contact.appendChild(heading);

    const grid = document.createElement("div");
    grid.classList.add("contact-grid");


    const info = document.createElement("div");
    info.classList.add("contact-info");

    const phone = document.createElement("div");
    phone.classList.add("phone");
    phone.textContent = "Phone: 123-456-7890";
    info.appendChild(phone);

    const email = document.createElement("div");
    email.classList.add("email");
    email.textContent = "E-Mail: manager@randomemail.com"
    info.appendChild(email);

    const address = document.createElement("div");
    address.classList.add("address");
    address.textContent = "Address: 12 Fake Street, New York, NY";

    grid.appendChild(info);

    grid.appendChild(address);

    const hours = document.createElement("div");
    hours.classList.add("hours-container");

    const hoursHead = document.createElement("div");
    hoursHead.classList.add("hours-head");
    hoursHead.textContent = "Hours";

    hours.appendChild(hoursHead);


    const sunday = document.createElement("div");
    sunday.classList.add("time");
    sunday.textContent = "Sunday: 6 AM - 6PM";
    hours.appendChild(sunday);

    const monday = document.createElement("div");
    monday.classList.add("time");
    monday.textContent = "Monday: 6 AM - 6PM";
    hours.appendChild(monday);

    const tuesday = document.createElement("div");
    tuesday.classList.add("time");
    tuesday.textContent = "Tuesday: 6 AM - 6PM";
    hours.appendChild(tuesday);

    const wedensday = document.createElement("div");
    wedensday.classList.add("time");
    wedensday.textContent = "Wedensday: 6 AM - 6PM";
    hours.appendChild(wedensday);

    const thursday = document.createElement("div");
    thursday.classList.add("time");
    thursday.textContent = "Thursday: 6 AM - 6PM";
    hours.appendChild(thursday);

    const friday = document.createElement("div");
    friday.classList.add("time");
    friday.textContent = "Friday: 6 AM - 6PM";
    hours.appendChild(friday);

    const saturday = document.createElement("div");
    saturday.classList.add("time");
    saturday.textContent = "Saturday: 6 AM - 6PM";
    hours.appendChild(saturday);

    grid.appendChild(hours);

    contact.appendChild(grid);

    return contact;

}

export default loadPage;