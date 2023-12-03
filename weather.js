
const userLocation = JSON.parse(localStorage.getItem("location"))
document.addEventListener('DOMContentLoaded',()=>{
const Usermap = document.getElementById("location-map");
const weatherdetails = document.getElementById("weather-details")
const lat = document.getElementById('lat')
const long = document.getElementById('long')

Usermap.innerHTML = `<iframe src="https://maps.google.com/maps?q=${userLocation.latitude}, ${userLocation.longitude}&z=15&output=embed" width="100%" height="100%" frameborder="0" style="border:0"></iframe>`
// showPosition();
function fetchWeather(latitude, longitude) {
    const apiKey = "bcbc416f594d0a7c6feec5ba33bfeb36";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&units=metric`;

    async function checkWeather() {
      const response = await fetch(apiUrl + `&appid=${apiKey}`);
      lat.innerText = `Lat: ${latitude}`
      long.innerText = `Long: ${longitude}`
      let data = await response.json();
      console.log(data);

      weatherdetails.innerHTML = `<h3 style='color:#360369; margin:20px 0; font-size:2.5rem;'>Your weather Data</h3>
      <div class="data">
          <p class="data-1 geotags">Location : ${data.name}</p>
          <p class="data-2 geotags">Wind Speed : ${data.wind.speed} km/h</p>
          <p class="data-3 geotags">Humidity : ${data.main.humidity}%</p>
          <p class="data-4 geotags">Time Zone :  ${data.timezone}</p>
          <p class="data-5 geotags">Pressure : ${data.main.pressure} atm</p>
          <p class="data-2 geotags">Wind Speed : ${data.wind.speed} km/h</p>
         
          <p class="data-9 geotags">Feels like : ${data.main.feels_like}°C</p>
      </div>`
      // localStorage.clear();
    }
    checkWeather();
  
};
fetchWeather(userLocation.latitude,userLocation.longitude)
})
function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  const userLocation = {
      latitude: `${latitude}`,
      longitude: `${longitude}`
  }
  localStorage.setItem('location',JSON.stringify(userLocation))
  

  // You can use the latitude and longitude values as needed.
}