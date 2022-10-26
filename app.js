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

    const url = 'https://api.collectapi.com/weather/getWeather?data.lang=en&data.city=Louisville'
    // const location = 'Dallas'
    
    async function fetchWeather() {
        const response = await fetch(url, {
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
    }
    
    fetchWeather();


});



