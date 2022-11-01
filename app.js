const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');

searchButton.addEventListener('click', () => {

    const mailFormat = /^[A-Za-z]+$/;

    if(document.getElementById('inputField').value.length === 0){
        alert("Please enter a city name!")
    }
    else if (document.getElementById('inputField').value.match(mailFormat)){
        console.log('Add info here.')
    }
    else {
        alert("Please enter a city name!")

    }

});

searchButton.addEventListener('click', () => {

});

const api = 'https://api.collectapi.com/weather/getWeather?data.lang=en&data.city=Louisville'
// const url = api + document.getElementById('inputField').value

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

    

    const weatherToday = data.result[0]
    const menu = document.querySelector("#weatherCard")

    const li = document.createElement("li");

    li.classList.add("day");

    const markup = `

    <h2 class="day-name">
        ${weatherToday.day}
    </h2>`;

    li.innerHTML = markup;

    menu.appendChild(li);


    console.log(li);

    // displayWeather(data);

}

fetchWeather();

// function displayWeather(data){
//     const weatherToday = data.result[0]
//     const weatherDiv = document.getElementById('weatherCard');

//     const todaysDate = weatherToday.day;
//     const heading = document.createElement('h2');
//     heading.innerHTML = todaysDate;
//     weatherDiv.appendChild(heading);

//     const todaysWeather = weatherToday.degree;
//     const para = document.createElement('p');
//     para.innerHTML = todaysWeather;
//     weatherDiv.appendChild(para);

//     const weatherTom = data.result[1]
//     const para1 = document.createElement('p');
//     const tomorrowsDate = weatherTom.day;
//     para1.innerHTML = tomorrowsDate;
//     weatherDiv.appendChild(para1);

//     const image = document.createElement('img');
//     image.src = weatherToday.icon;
//     weatherDiv.appendChild(image);
    
// };




