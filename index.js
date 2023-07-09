
const search_box = document.querySelector(".search_box input");
const search_btn = document.querySelector(".search_box button");
const weather_icon = document.querySelector(".weather_icon");
async function checkWeather(city) {
    const apikey="5c0a26a9c9ac84e88e9f8deb759f2610";
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    const data = await  fetch(`${apiurl}`).then(response=>response.json());
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="none";
    if(data.cod === '404'){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
        document.querySelector(".Humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".Wind_Speed").innerHTML= data.wind.speed + " km/h";
        document.querySelector(".weather").style.display="block";
        switch (data.weather[0].main) {
            case 'Clear':
                weather_icon.src = 'images/clear.png';
                break;
    
            case 'Rain':
                weather_icon.src = 'images/rain.png';
                break;
    
            case 'Snow':
                weather_icon.src = 'images/snow.png';
                break;
    
            case 'Clouds':
                weather_icon.src = 'images/clouds.png';
                break;
    
            case 'Haze':
                weather_icon.src = 'images/mist.png';
                break;
    
            case 'Drizzle':
                weather_icon.src = 'images/drizzle.png';
                break;
            default:
                image.src = '';
        }
        
    }


}
search_btn.addEventListener("click",()=>{
    checkWeather(search_box.value);
})
