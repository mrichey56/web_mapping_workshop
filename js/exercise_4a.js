// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'mrichey56.pp9j6b27';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoibXJpY2hleTU2IiwiYSI6ImNpbmcyZDliZzFiZTJ1Zmx3cDVxaDhqZWMifQ.6ULZdwh0R8Mwq7YO5nJqVA';

// Create the map object with your mapId and token, 
// referencing the DOM element where you want the map to go
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!

var dataFileToAdd ='data/parks.geojson';
// reference to data

var featureLayer =L.mapbox.featureLayer();
// () fire it off
featureLayer.loadURL(dataFileToAdd);
featureLayer.addTo(map);
                   
featureLayer.on('ready',function(){
  this.setStyle({
    "color":"#6583BF",
    "fillColor":"#6583BF",
    "weight": .5,
    "opacity": 0.65
  })
  map.fitBounds(featureLayer.getBounds());
})

featureLayer.on('ready', function(){
  this.eachLayer(function(layer){
    layer.bindPopup('Welcome to ' +layer.feature.properties.LABEL);
  })
})
