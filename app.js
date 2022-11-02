const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');

searchButton.addEventListener('click', () => {

    const mailFormat = /^[A-Za-z ]+$/;

    if(document.getElementById('inputField').value.length === 0){
        alert("Please enter a city name!")
    }
    else if (document.getElementById('inputField').value.match(mailFormat)){
        weatherApi()
    }
    else {
        alert("Please enter a city name!")

    }

});

searchButton.addEventListener('click', () => {

});


function weatherApi(){ 

const input = document.getElementById('inputField').value
const api = `https://api.collectapi.com/weather/getWeather?data.lang=en&data.city=${input}`

async function fetchWeather() {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 37rnoKPwjY7lFwpC1JlmWG:6RxhStZ9y8nwTTlSKQkpJF"
        }
    });

    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json();


    console.log(data);

    const weatherToday = data.result[0]
    const menu = document.querySelector("#weatherCard")

    const li = document.createElement("li");

    li.classList.add("day");

    const markup = `

    <h2 class="day-name">
        ${input}
    </h2>
    <p class="city-temp">
        ${Math.round(weatherToday.degree)}<sup>°F</sup>
    </p>
    <figure>
        <img class="weather-icon" src=${weatherToday.icon}>
    </figure>
    <p class="city-desc">
        ${weatherToday.description}
    </p>
    <hr/>
    <div id="weatherTomorrow">
        <p>Weather Tomorrow</p>
        ${Math.round(data.result[1].degree)}<sup>°F</sup> ${data.result[1].description}
    </div>

    `;

    li.innerHTML = markup;

    menu.appendChild(li);


    // displayWeather(data);

}

fetchWeather();


}

