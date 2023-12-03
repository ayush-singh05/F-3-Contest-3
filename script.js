const userLocation = document.getElementById("fetch-data");

userLocation.addEventListener('click',()=>{
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
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
    

    // You can use the latitude and longitude values as needed.
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}