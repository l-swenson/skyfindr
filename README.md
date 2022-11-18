# skyfindr

Skyfindr is a weather application built for the Code Louisville Web Development II Course. It combines some of the skills learned over the past weeks into a functional and easy to use application that takes a user's city input and displays the weather for that day, a high and low range, description of the conditions, icon of the weather, and two-day forecast. It also gives the user the opportunity to view the weather of a random city if they are interested in seeing conditions in some other place! 

PLEASE NOTE: While my project contains matieral for Express, MongoDB and Mongoose, I have not been able to complete this portion yet. They are still under construction. The completed features are listed below. 


# Capstone Project Feature List:

## Section 1 Features:
- Arrays are used in two places and their contents are analyzed  and displayed in the app. The data from the API request is placed in an array and is looped through with a forEach loop to populate weather cards that display the day's weather as well as a forecast. The "Random City Weather" button uses an array of city names and a random number function to generate a random city to pass to the API and display in the app.
- Regex validation is used to ensure only letters and spaces are passed through to the API.

## Section 2 Features:
- An external API is used to generate the weather information, descriptions, and icons that are displayed on the app.

Forthcoming features include integrating multi-city searches and passing the data to MongoDB.

