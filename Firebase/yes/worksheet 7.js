// Actividad 2
navigator.geolocation.getCurrentPosition(cb);

function cb(pos){
  lat = document.write(pos.coords.latitude + "</br>");
  long = document.write(pos.coords.longitude + "</br>");
}

function moveMapToBerlin(map){
    map.setCenter({lat, long});
    map.setZoom(14);
}

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
    apikey: window.apikey
  });
  var defaultLayers = platform.createDefaultLayers();
  
  //Step 2: initialize a map - this map is centered over Europe
  var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,{
    center: {lat, long},
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1
  });
  // add a resize listener to make sure that the map occupies the whole container
  window.addEventListener('resize', () => map.getViewPort().resize());
  
  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Now use the map as required...
  window.onload = function () {
    moveMapToBerlin(map);
  }

var router = platform.getRoutingService(),
routeRequestParams = {
    mode: "fastest;car",
    representation: "display",
    routeattributes: "waypoints, sumary, shape",
    maneuveattributes: "direction, action",
    waypoint0: lat, long,
    waypoint1: lat + 25, long};

router.calculateRoute(
    raouteRequestParams,
    onSuccess,
    onError
);


{
    "items" [
      {
        "title": "Heinestraße 42, 1020 Vienna, Austria",
        "id": "here:af:streetsection:2VFm4oq5Zq8utAoSB90pmA:CgcIBCD6iaNNEAEaAjQy",
        "resultType": "houseNumber",
        "houseNumberType": "PA",
        "address": {
          "label": "Heinestraße 42, 1020 Vienna, Austria",
          "countryCode": "AUT",
          "countryName": "Austria",
          "state": "Vienna",
          "county": "Vienna",
          "city": "Vienna",
          "district": "2. Bezirk-Leopoldstadt",
          "street": "Heinestraße",
          "postalCode": "1020",
          "houseNumber": "42"
        },
        "position": {
          "lat": 48.21809,
          "lng": 16.38988
        },
        "access": [
          {
            "lat": 48.21815,
            "lng": 16.38995
          }
        ],
        "distance": 4,
        "mapView": {
          "west": 16.39157,
          "south": 48.21697,
          "east": 16.38819,
          "north": 48.21921
        }
      }
    ]
  }
  
// Actividad 3