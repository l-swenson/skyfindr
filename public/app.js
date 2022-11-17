const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');
const randomCityBtn = document.getElementById('randomCityBtn');
const inputField = document.getElementById('inputField');

//  Regex to validate city input 

searchButton.addEventListener('click', () => {

    const mailFormat = /^[A-Za-z ]+$/;

    if (inputField.value.length === 0) {
        alert("Please enter a city name!")
    }
    else if (inputField.value.match(mailFormat)) {
        searchButton.disabled = true;
        randomCityBtn.disabled = true;
        weatherApi()
    }
    else {
        alert("Please enter a city name!")
    }
});

// API call and markup
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

        let array = [data.result[0], data.result[1], data.result[2]]

        array.forEach(function (item) {

            const list = document.createElement("li");
            list.classList.add("cityCard");

            const markup = `

                <h2 class="city-name">
                    ${item.day}
                </h2>
                <p class="city-temp">
                    ${Math.round(((item.degree * 9) / 5 + 32))}<sup>°F</sup>
                </p>
                <figure>
                    <img class="weather-icon" src=${item.icon}>
                </figure>
                <p class="city-desc">
                    ${item.description}
                </p>
                <hr/>
                <div class="high-low">
                    <p>High: </p> ${Math.round((item.max * 9) / 5 + 32)}<sup>°F  </sup> <p>Low: </p> ${Math.round((item.min * 9) / 5 + 32)}<sup>°F</sup>
                </div>
            `;

            list.innerHTML = markup;
            document.querySelector("#weatherCard").appendChild(list);
        })
    }

    inputField.value = "";
    fetchWeather();

};

// Button to populate a random city in the search field

randomCityBtn.addEventListener('click', () => {
    const cityList = ["Albuquerque", "Abilene", "Akron", "Boise", "Tulsa", "Boston", "New York City", "Cleveland", "Indianapolis", "Honolulu", "Dallas", "Lexington", "Houston", "Buffalo", "Chicago", "Salt Lake City", "San Antonio", "San Bernardino", "Minneapolis", "Detroit", "San Francisco"];
    const random = Math.floor(Math.random() * cityList.length);
    document.querySelector("#inputField").value = cityList[random];
    weatherApi();
    searchButton.disabled = true;
    randomCityBtn.disabled = true;
});

//  Clear results button 

clearButton.addEventListener('click', () => {
    document.querySelector("#weatherCard").innerHTML = ' ';
    inputField.value = "";
    searchButton.disabled = false;
    randomCityBtn.disabled = false;
    inputField.focus();
});





// ADD later as an option for people to search for different cities at the same time. 

    //     const weatherToday = data.result[0]
    //     const menu = document.querySelector("#weatherCard")

    //     const li = document.createElement("li");

    //     li.classList.add("cityCard");


    // const markup = `

    //     <h2 class="city-name">
    //         ${data.city}
    //     </h2>
    //     <p class="city-temp">
    //         ${Math.round(((weatherToday.degree * 9) / 5 + 32))}<sup>°F</sup>
    //     </p>
    //     <figure>
    //         <img class="weather-icon" src=${weatherToday.icon}>
    //     </figure>
    //     <p class="city-desc">
    //         ${weatherToday.description}
    //     </p>
    //     <hr/>
    //     <div id="weatherTomorrow">
    //         <p>Weather Tomorrow:</p>
    //         ${Math.round((data.result[1].degree * 9) / 5 + 32)}<sup>°F</sup> ${data.result[1].status}
    //     </div>
    //     `;

    //     li.innerHTML = markup;
    //     menu.appendChild(li);


    // }

   