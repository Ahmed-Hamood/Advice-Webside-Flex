let btn = document.getElementsByClassName('btn')[0];
btn.addEventListener("mouseover" , function(){

  btn.textContent = "Click";
 
});

btn.addEventListener("mouseleave" , function(){

  btn.textContent = " Read More";
   
});


// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 24.433832, lng: 54.396185 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 13,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#nav-bar').style.opacity = 0.9;
  } else {
    document.querySelector('#nav-bar').style.opacity = 1;
  }
});

// navigation bar sticky menu background opacity

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#nav-bar').style.opacity = 0.7;
  } else {
    document.querySelector('#nav-bar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#nav-bar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});