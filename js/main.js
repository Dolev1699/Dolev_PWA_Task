window.addEventListener("DOMContentLoaded", function () {

document.getElementById("find-me").addEventListener("click", geoFindMe);


const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }


document.getElementById("shareBtn").addEventListener("click",  async () => {
   
//share the map-link text
    await navigator.share({
        title: 'Map Link',
        text: document.getElementById("map-link").textContent,
        url: document.getElementById("map-link").textContent
    });


})

});




function geoFindMe() {
    const status = document.getElementById('status');
    const mapLink = document.getElementById('map-link');
    const iframe = document.getElementById('iframe');
  
    mapLink.href = '';
    mapLink.textContent = '';
  iframe.classList.add("d-none");
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://maps.google.com/?q=${latitude},${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    
    document.getElementById("map-link").innerHTML = `https://maps.google.com/?q=${latitude},${longitude}`;


    const linktoembed =`https://maps.google.com/?output=embed&q=${latitude},${longitude}`;
   //put linktoembed in iframe src
    iframe.classList.remove("d-none");
     iframe.src = `https://maps.google.com/?output=embed&q=${latitude},${longitude}`;


}

    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }


 







