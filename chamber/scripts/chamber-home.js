const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.77&lon=-111.93&units=imperial&appid=74b6ac5f3006ac88a6e81b9a12de404f';
const threeDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.77&lon=-111.93&units=imperial&appid=74b6ac5f3006ac88a6e81b9a12de404f';
const companyDataUrl = 'https://byupathway-student.github.io/wdd231/chamber/data/members.json';


const currentWeather = document.querySelector('#curr-weather');
const icon = document.querySelector('#weather-icon');

const temp = document.querySelector('#temp');
const currCondition = document.querySelector('#weather-condition');

const high = document.querySelector('#high-temp');
const low = document.querySelector('#low-temp');

const humidity = document.querySelector('#humidity');

const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const threeDayForecast = document.querySelector('#forecast');

const spotlightHolder = document.querySelector('#spotlights');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function threeDayApiFetch() {
    try {
        const response = await fetch(threeDayUrl);
        if (response.ok) {
            const data = await response.json();
            displayForcast(data);

        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function CompanyDataFetch() {
    try {
        const response = await fetch(companyDataUrl);
        if (response.ok) {
            const data = await response.json();
            DisplayCompanySpotlight(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayForcast(data) {
    threeDayFilter = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

    threeDayFilter.forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
        const temperature = day.main.temp;

        let weekday = document.createElement('h3');
        let weekTemp = document.createElement('p');

        weekday.innerHTML = `${date}`;
        weekTemp.innerHTML = `${temperature}&deg;F`;

        threeDayForecast.appendChild(weekday);
        threeDayForecast.appendChild(weekTemp);
    });
}

function displayWeather(data) {
    let desc = data.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    icon.setAttribute('alt', desc);
    icon.setAttribute('src', iconsrc);

    temp.innerHTML = `${data.main.temp}&deg;F`;
    currCondition.innerHTML = `${data.weather[0].main}`;
    high.innerHTML = `${data.main.temp_max}&deg;F`;
    low.innerHTML = `${data.main.temp_min}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;

    let timezone = data.timezone;
    let sunriseNumber = data.sys.sunrise;
    let sunriseConvert = new Date((sunriseNumber + timezone) * 1000);
    let sunriseFormat = sunriseConvert.toLocaleTimeString('en-US', {
        timeZone: 'UTC',
        hour: '2-digit',
        minute: '2-digit'
    });

    let sunsetNumber = data.sys.sunset;
    let sunsetConvert = new Date((sunsetNumber + timezone) * 1000);
    let sunsetFormat = sunsetConvert.toLocaleTimeString('en-US', {
        timeZone: 'UTC',
        hour: '2-digit',
        minute: '2-digit'
    });

    sunrise.innerHTML = `${sunriseFormat}`;
    sunset.innerHTML = `${sunsetFormat}`;
}

function DisplayCompanySpotlight(data) {
    const filteredData = data.companies.filter((company) => {
        return company.membershipLevel == 2 || company.membershipLevel == 3;
    });

    const randomizer = [...filteredData].sort(() => 0.5 - Math.random());
    const spotlight = randomizer.slice(0, 3);

    spotlight.forEach((company) => {
        const card = document.createElement('div');
        const name = document.createElement('h2');
        const logo = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');

        name.textContent = `${company.companyName}`;

        logo.setAttribute('src', company.companyImage);
        logo.setAttribute('alt', `Logo for ${company.companyName}`);
        logo.setAttribute('loading', 'lazy');

        address.textContent = `ADDRESS: ${company.companyAddress}`;
        phone.textContent = `PHONE: ${company.companyPhone}`;
        website.textContent = `URL: ${company.companyUrl}`;


        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        spotlightHolder.appendChild(card);
    });

}

apiFetch();
threeDayApiFetch();
CompanyDataFetch();