function checkTemp(){
    const icon = document.getElementById('icon')
    const city = document.getElementById('inp').value
    const cityname = document.getElementById('cityName')
    const temp = document.getElementById('temperature')
    const realfeal = document.getElementById('realfeel')
    const windspeed = document.getElementById('windspeed')
    const humidity = document.getElementById('humidity')

    fetch(`https://api.weatherapi.com/v1/current.json?key=69292638a3cc467c8de91237250403&q=${city}&aqi=yes`)

    .then((response)=> response.json())
    .then((data)=>{
        cityname.innerHTML=city;
        temp.innerHTML=data.current.temp_c
        icon.src=data.current.condition.icon
        realfeal.innerHTML="Real Feel: "+ data.current.feelslike_c
        windspeed.innerHTML = "Wind Speed: " + data.current.wind_kph + " km/h"
        humidity.innerHTML="Humidity: " +data.current.humidity
        console.log(data)
    })
}