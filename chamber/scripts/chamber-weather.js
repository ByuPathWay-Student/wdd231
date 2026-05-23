const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.77&lon=-111.93&units=imperial&appid=74b6ac5f3006ac88a6e81b9a12de404f';
const currentWeather = document.querySelector('#curr-weather');
const icon = document.querySelector('#weather-icon');
const weatherData = document.querySelector('#weather-data');


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    
}

apiFetch()