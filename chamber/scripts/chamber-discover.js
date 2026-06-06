import { itemsOfInterest } from '../data/items.mjs';
console.log(itemsOfInterest);

const interestCard = document.querySelector('#interestCard');

const visitDate = document.querySelector('#visitDate');

function trackVisits() {
    const currtime = Date.now();

    if (getLocalStorage('lastVisit')) {
        const data = getLocalStorage('lastVisit');
        setLocalStorage('lastVisit', currtime);
        return data;
    }
    else {
        setLocalStorage('lastVisit', currtime);
        return false;
    };
};

function displayVisits() {
    const saveData = trackVisits();
    const currtime = new Date();
    let userMessage = '';
    if (saveData) {
        const savedTime = new Date(Number(saveData));
        const diffInDays = Math.floor((currtime - savedTime) / (1000 * 60 * 60 * 24));
        if (diffInDays < 1) {
            userMessage = 'Back so soon! Awesome!';
        }
        else {
            userMessage = `You last visited ${diffInDays} days ago.`;
            if (diffInDays == 1) {
                userMessage = `You last visited ${diffInDays} day ago.`;
            };
        };
    }
    else {
        userMessage = 'Welcome! Let us know if you have any questions.';
    };
    visitDate.textContent = userMessage;
    return;
};

function setLocalStorage(localStorageKey, value) {
    localStorage.setItem(localStorageKey, value);
    return;
};

function getLocalStorage(localStorageKey) {
    const data = localStorage.getItem(localStorageKey);
    return data;
};

function displayInterestCards(itemsOfInterest) {
    itemsOfInterest.forEach(item => {
        const itemCard = document.createElement('div');

        const itemPhoto = document.createElement('img');
        itemPhoto.loading = 'lazy';
        itemPhoto.src = `images/${item.photo}`;
        itemPhoto.alt = item.name;

        const itemName = document.createElement('h2');
        itemName.innerText = item.name;

        const itemAddress = document.createElement('address');
        itemAddress.innerText = item.address;

        const itemDesc = document.createElement('p');
        itemDesc.innerText = item.description;

        const itemButton = document.createElement('button');
        itemButton.innerText = 'learn more';

        itemCard.appendChild(itemPhoto);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemAddress);
        itemCard.appendChild(itemDesc);
        itemCard.appendChild(itemButton);

        interestCard.appendChild(itemCard);
    });
};

displayVisits();
displayInterestCards(itemsOfInterest);