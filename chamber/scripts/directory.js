const url = 'https://byupathway-student.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');

const displayCompanies = (companies) => {
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


async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompanyData();