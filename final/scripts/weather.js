const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.12&lon=-111.71&units=imperial&appid=74b6ac5f3006ac88a6e81b9a12de404f';
const icon = document.querySelector('#weather-icon');
const temp = document.querySelector('#temp');
const condi = document.querySelector('#weather-condi');
const feeltemp = document.querySelector('#feel-temp');

async function weatherfetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);

        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
};

function displayWeather(data) {
    let wdesc = data.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    icon.setAttribute('alt', wdesc);
    icon.setAttribute('src', iconsrc);

    temp.innerHTML = `${data.main.temp}&deg;F`;
    condi.innerHTML = `${data.weather[0].main}`;
    feeltemp.innerHTML = `${data.main.feels_like}&deg;F`;
}

weatherfetch();