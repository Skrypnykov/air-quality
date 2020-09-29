$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        items:3,
        nav:true,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    });
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tyeXBueWtvdiIsImEiOiJja2ZsYTdkbzEwZGdqMnFwc2dyMHBnZTl0In0.XQ6qUunUpxoUThIMrGLbPQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [31, 48.55],
    zoom: 5,
});

// Geolocate Control
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
        trackUserLocation: true
}));


// mapcontrol
map.addControl(new mapboxgl.NavigationControl());

// markers 
var marker = new mapboxgl.Marker({ color: 'red' })
.setLngLat([37.55, 47.15])
.addTo(map);

var marker = new mapboxgl.Marker( { color: 'red' })
.setLngLat([37.8, 48.05])
.addTo(map);

var marker = new mapboxgl.Marker({ color: 'green' })
.setLngLat([36.25, 50])
.addTo(map);

var marker = new mapboxgl.Marker({ color: 'green' })
.setLngLat([30.51, 50.47])
.addTo(map);

var marker = new mapboxgl.Marker({ color: 'gold' })
.setLngLat([24.7, 48.95])
.addTo(map);

var marker = new mapboxgl.Marker({ color: 'green' })
.setLngLat([30.7, 46.5])
.addTo(map);

var marker = new mapboxgl.Marker({ color: 'green' })
.setLngLat([31.98, 47])
.addTo(map);

var marker = new mapboxgl.Marker({ color: 'gold' })
.setLngLat([35.35, 46.9])
.addTo(map);

// button-vector scroll
var hiddenElement = document.getElementById("map");
var button = document.querySelector(".button-vector");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}
button.addEventListener("click", handleButtonClick);
