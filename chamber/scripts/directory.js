const url = 'https://byupathway-student.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');

const cbutton = document.querySelector('#cardbutton');
const lbutton = document.querySelector('#listbutton');

const displayCard = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        name.textContent = `${company.companyName}`;

        logo.setAttribute('src', company.companyImage);
        logo.setAttribute('alt', `Logo for ${company.companyName}`);
        logo.setAttribute('loading', 'lazy');

        address.textContent = `${company.companyAddress}`;
        phone.textContent = `${company.companyPhone}`;
        website.textContent = `${company.companyUrl}`;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);
    });
}

getCompanyData();

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCard(data.companies);
}

cbutton.addEventListener('click', () => {
    cards.classList.add("card");
    cards.classList.remove("list");
});

lbutton.addEventListener('click', () => {
    cards.classList.add("list");
    cards.classList.remove("card");
});