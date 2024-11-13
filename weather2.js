const apikey = "68d864d1094de93619337573a1df8ee7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".srch-btn");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    searchBox.innerText = "Enter City name"
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404){
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "weather";
  } else{
      var data = await response.json();
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      
    
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(temp) + '&#176;C';
      document.querySelector(".wind").innerHTML = windSpeed + 'kpm';
      document.querySelector(".humidity").innerHTML = humidity + '%';
      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
      } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
      } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
      }
       else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector('.error').style.display = "none";
  }
}

searchBtn.addEventListener('click', ()=>{
    let city = searchBox.value;
    checkWeather(city);
})


