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


