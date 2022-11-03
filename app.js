const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');
const inputField = document.getElementById('inputField');

searchButton.addEventListener('click', () => {

    const mailFormat = /^[A-Za-z ]+$/;

    if(inputField.value.length === 0){
        alert("Please enter a city name!")
    }
    else if (inputField.value.match(mailFormat)){
        weatherApi()
    }
    else {
        alert("Please enter a city name!")
    }

});


function weatherApi() {

    const api = `https://api.collectapi.com/weather/getWeather?data.lang=en&data.city=${inputField.value}`

    async function fetchWeather() {
        const response = await fetch(api, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "authorization": "apikey 37rnoKPwjY7lFwpC1JlmWG:6RxhStZ9y8nwTTlSKQkpJF"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json();

        console.log(data);

        const weatherToday = data.result[0]
        const menu = document.querySelector("#weatherCard")

        const li = document.createElement("li");

        li.classList.add("cityCard");

    const markup = `

        <h2 class="city-name">
            ${data.city}
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
            <p>Weather Tomorrow:</p>
            ${Math.round(data.result[1].degree)}<sup>°F</sup> ${data.result[1].description}
        </div>
        `;

        li.innerHTML = markup;
        menu.appendChild(li);


    }

    inputField.value = "";
    inputField.focus();

    fetchWeather();

};


clearButton.addEventListener('click', () => {
    document.querySelector("#weatherCard").innerHTML = ' ';
});