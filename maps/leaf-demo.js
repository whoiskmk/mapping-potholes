var markerClusters = new L.markerClusterGroup();

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

var myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21]
});


for ( var i = 0; i < markers.length; ++i )
{


    var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} );

    markerClusters.addLayer( m );
}


var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2VsbHlrcmF3Y3p5ayIsImEiOiJjajFkdHkycGowMDI0MndrNXdwNTZqdmpyIn0._7Q7EEZeSvoBQbeaJZtokQ';

var grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    streets = L.tileLayer(mbUrl, {id: 'mapbox.streets', attribution: mbAttr});


var map = L.map( 'map', {
    center: [29.951065, -90.071533],
    minZoom: 2,
    zoom: 13,
    layers: [grayscale, markerClusters]
});

var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};

var overlays = {
    "MarkerClusters": markerClusters
};

L.control.layers(baseLayers, overlays).addTo(map);

function routeit() {
    L.Routing.control({

        router: L.Routing.mapbox('pk.eyJ1Ijoia2VsbHlrcmF3Y3p5ayIsImEiOiJjajFkdHkycGowMDI0MndrNXdwNTZqdmpyIn0._7Q7EEZeSvoBQbeaJZtokQ')
    });
}


//map.addLayer( markerClusters );
