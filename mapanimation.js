// This array contains the coordinates for some family holiday destinations
const destinations = [
  [-75.70093053949601, 45.42383616882899], //Ottawa
  [-78.37910243610442, 45.837323503062635], //Algonquin Park
  [-79.38914369183809, 43.64201268212373], //Toronto
  [-80.94113541568274, 44.56894495412665], //Owen Sound
  [-77.20640401163072, 44.898401817839726], //Bon Echo Park
];

// This is my (CF) MapBox Access Token:
mapboxgl.accessToken = 'pk.eyJ1IjoiY29saW5iZmluZGxheSIsImEiOiJjbDMwczRrMXMwdzhwM2ltaHJyMjUxdnN1In0.3kjUPLYNsBZEF642i2DGNg';

// This creates the default map view:
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/colinbfindlay/cl32r1skt001i14mwjxpgr030', // I created a custom style in MapBox
  center: [-77.20640401163072, 44.898401817839726],
  zoom: 7,
});

// Creates the first Marker
let marker = new mapboxgl.Marker().setLngLat([-75.70093053949601, 45.42383616882899]).addTo(map);

// counter here represents the index of the current detination
let counter = 0;
function move() {
  // This moves the Marker through all the destinations
  setTimeout(() => {
    if (counter >= destinations.length) return;
    marker.setLngLat(destinations[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
