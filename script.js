const userLocation = document.getElementById("fetch-data");

userLocation.addEventListener('click',()=>{
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        window.location.href = 'weather.html'
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
})




function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    const userLocation = {
        latitude: `${latitude}`,
        longitude: `${longitude}`
    }
    localStorage.setItem('location',JSON.stringify(userLocation))
    console.log(userLocation);

    // You can use the latitude and longitude values as needed.
}