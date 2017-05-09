const markerClusters = new L.markerClusterGroup();

const myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

const myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21]
});


for ( let i = 0; i < markers.length; ++i )
{


    let m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} );

    markerClusters.addLayer( m );
}


const mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2VsbHlrcmF3Y3p5ayIsImEiOiJjajFkdHkycGowMDI0MndrNXdwNTZqdmpyIn0._7Q7EEZeSvoBQbeaJZtokQ';

const grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    streets = L.tileLayer(mbUrl, {id: 'mapbox.streets', attribution: mbAttr});


let map = L.map( 'map', {
    center: [29.951065, -90.071533],
    minZoom: 2,
    zoom: 13,
    layers: [grayscale, markerClusters]
});

const baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};

const overlays = {
    "MarkerClusters": markerClusters
};

L.control.layers(baseLayers, overlays).addTo(map);

map.attributionControl.setPosition('bottomleft');

// create the initial directions object, from which the layer
// and inputs will pull data.
//const directions = L.mapbox.directions();

/*const directionsLayer = L.mapbox.directions.layer(directions)
    .addTo(map);

const directionsInputControl = L.mapbox.directions.inputControl('inputs', directions)
    .addTo(map);

const directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions)
    .addTo(map);

const directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions)
    .addTo(map);

const directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions)
    .addTo(map);
*/
//map.addLayer( markerClusters );
