const url = 'https://byupathway-student.github.io/wdd231/final/data/events.json';
const cards = document.querySelector('#aboutCard');

const aEvents = document.querySelector('#allButton');
const oEvents = document.querySelector('#onlineButton');
const ipEvents = document.querySelector('#inPersonButton');

const online = document.querySelector('#openButton1');
const inPerson = document.querySelector('#openButton2');

const eventBox = document.querySelector('#eventDialogContainer');
const eventText = document.querySelector('#eventDialog');
const closeButton = document.querySelector('#closeButton');

const visitTime = document.querySelector('#VisitTime')

online.addEventListener('click', () => {
    eventText.innerHTML = `<p><strong>Online Events</strong></p>
    <p>These events are held online through digital meetings, they are perfect for if you want to stay home but still get together with other artists. These events include art lessons, art activities, and art contests.</p>`;
    eventBox.showModal();
});

inPerson.addEventListener('click', () => {
    eventText.innerHTML = `<p><strong>In Person Events</strong></p>
    <p>These events are in person in various places, these events are perfect if you want to get out of the house. These events include art lessons, art activities, and trips to art museums.</p>`;
    eventBox.showModal();
});

closeButton.addEventListener('click', () => {
    eventBox.close();
});

const displayListCard = (events) => {
    cards.replaceChildren();
    events.forEach((event) => {
        let listCard = document.createElement('section');
        let name = document.createElement('h2');
        let place = document.createElement('p');
        let date = document.createElement('p');
        let type = document.createElement('p');

        name.textContent = `${event.eventName}`;
        place.textContent = `${event.eventLocation}`;
        date.textContent = `${event.eventDate}`;

        type.textContent = `${event.eventType}`;

        listCard.appendChild(name);
        listCard.appendChild(place);
        listCard.appendChild(date);

        listCard.appendChild(type);
        cards.appendChild(listCard);
    });
}

async function getEventData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(await response.text());
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
};

aEvents.addEventListener('click', async () => {
    const data = await getEventData();
    displayListCard(data.events);
});

oEvents.addEventListener('click', async () => {
    const data = await getEventData();
    const onlineData = data.events.filter(event => event.eventType == 'Online Event');
    displayListCard(onlineData);
});

ipEvents.addEventListener('click', async () => {
    const data = await getEventData();
    const inPersonData = data.events.filter(event => event.eventType == 'In Person Event');
    displayListCard(inPersonData);
});

function trackVisits() {
    const currTime = Date.now();

    if (getLocalStorageDate('lastVisit')) {
        const data = getLocalStorageDate('lastVisit');
        setLocalStorageDate('lastVisit', currTime);
        return data;
    }
    else {
        setLocalStorageDate('lastVisit', currTime);
        return false;
    };
};

function setLocalStorageDate(key, value) {
    localStorage.setItem(key, value);
    return;
};

function getLocalStorageDate(key) {
    const data = localStorage.getItem(key);
    return data;
};

function displayVisits() {
    const saveDate = trackVisits();
    const currTime = new Date();

    let userMessage = '';
    if (saveDate) {
        const savedTime = new Date(Number(saveDate));
        const diffInDays = Math.floor((currTime - savedTime) / (1000 * 60 * 60 * 24));
        
        if (diffInDays < 1) {
            userMessage = 'Welcome back!';
        }
        else {
            userMessage = `Your last visit was ${diffInDays} days ago, welcome back!`;
            if (diffInDays == 1) {
                `Your last visit was ${diffInDays} day ago, welcome back!`
            };
        };
    }
    else {
        userMessage = `Welcome to the Art Club of Utah website!`
    };

    visitTime.textContent = userMessage;
    return;
}

displayVisits();
getEventData();
const data = await getEventData();
displayListCard(data.events);
