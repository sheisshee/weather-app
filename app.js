const request = require('request')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Bulan,ph&APPID=4ec5c0904e05f548051f556cad0e94b8'

request({ url:  url, json: true }, (error, response) => {
    //console.log(response.body)
    console.log(response.body.weather[0].description + '. It is currently ' + response.body.main.temp + ' degrees fahrenheit out. There is a ' + response.body.clouds.all + '% chance of rain.')
})

const geocodeURL = 'https://geocode.maps.co/search?q=Bulan+Sorsogon+Philippines'

request({ url:geocodeURL, json: true }, (error, response) => {
    const latitude = response.body[0].lat
    const longitude = response.body[0].lon

    console.log(latitude, longitude)
})