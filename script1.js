
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1a3e3c6897msh58d45b9dd3b2f8cp1312ecjsn529b1f3f4977',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  const getWeather=(city)=>{
      cityName.innerHTML=city;
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
      
      console.log(response)
  
      cloud_pct2.innerHTML = response.cloud_pct
      cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      temp2.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_speed2.innerHTML = response.wind_speed
      sunset.innerHTML = response.sunset
      sunrise.innerHTML = response.sunrise
  
      cloud_pct32.innerHTML = response.cloud_pct
      cloud_pct3.innerHTML = response.cloud_pct
      temp3.innerHTML = response.temp
      temp32.innerHTML = response.temp
      feels_like3.innerHTML = response.feels_like
      humidity3.innerHTML = response.humidity
      min_temp3.innerHTML = response.min_temp
      max_temp3.innerHTML = response.max_temp
      wind_speed3.innerHTML = response.wind_speed
      wind_speed32.innerHTML = response.wind_speed
      sunset3.innerHTML = response.sunset
      sunrise3.innerHTML = response.sunrise
      })
    .catch(error => console.error(error));
  }
  
  submit.addEventListener("click",(e)=>{
      e.preventDefault();
      getWeather(city.value);
  })
  getWeather("Nashik");
  
  const getWeather2=(city)=>{
      // cityName.innerHTML=city;
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
      
      console.log(response);
  
      document.getElementById(city + 'cloud_pct').innerHTML = response.cloud_pct;
        document.getElementById(city + 'temp').innerHTML = response.temp;
        document.getElementById(city + 'feels_like').innerHTML = response.feels_like;
        document.getElementById(city + 'humidity').innerHTML = response.humidity;
        document.getElementById(city + 'min_temp').innerHTML = response.min_temp;
        document.getElementById(city + 'max_temp').innerHTML = response.max_temp;
        document.getElementById(city + 'wind_speed').innerHTML = response.wind_speed;
        document.getElementById(city + 'sunset').innerHTML = response.sunset;
        document.getElementById(city + 'sunrise').innerHTML = response.sunrise;
      })
    .catch(error => console.error(error));
  }
  getWeather2("Mumbai");
  getWeather2("Bangalore");
  getWeather2("Hyderabad");
  getWeather2("Kolkata");
  getWeather2("Dehradun");
  getWeather2("Manali");