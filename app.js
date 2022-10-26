const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');

searchButton.addEventListener('click', function(){

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

const url = 'https://api.collectapi.com/weather/getWeather?data.lang=en&data.city=Dallas'
// const location = 'Dallas'

async function fetchWeather() {
    const repsonse = await fetch(url, {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 37rnoKPwjY7lFwpC1JlmWG:6RxhStZ9y8nwTTlSKQkpJF"
        }
    });
    const data = await repsonse.json();
    console.log(data);
}

fetchWeather();

