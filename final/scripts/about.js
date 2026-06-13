const online = document.querySelector('#openButton1');
const inPerson = document.querySelector('#openButton2');

const eventBox = document.querySelector('#eventDialogContainer');
const eventText = document.querySelector('#eventDialog');
const closeButton = document.querySelector('#closeButton');

const visitTime = document.querySelector('#VisitTime')

online.addEventListener("click", () => {
    eventText.innerHTML = `<p><strong>Online Events</strong></p>
    <p>These events are held online through digital meetings, they are perfect for if you want to stay home but still get together with other artists. These events include art lessons, art activities, and art contests.</p>`;
    eventBox.showModal();
});

inPerson.addEventListener("click", () => {
    eventText.innerHTML = `<p><strong>In Person Events</strong></p>
    <p>These events are in person in various places, these events are perfect if you want to get out of the house. These events include art lessons, art activities, and trips to art museums.</p>`;
    eventBox.showModal();
});

closeButton.addEventListener("click", () => {
    eventBox.close();
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