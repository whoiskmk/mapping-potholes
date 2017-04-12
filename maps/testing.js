/**
 * Created by kellykrawczyk on 4/11/17.
 */


var map, MQ, myURL, myIcon, cpts;
//var icon = "http://maps/images/pin24.png";
function init() {

    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [29.951065, -90.071533],
        zoom: 10
    });

    L.control.layers({
        'Map': MQ.mapLayer(),
        'Dark': MQ.darkLayer(),
        'Light': MQ.lightLayer(),
        'Satellite': MQ.satelliteLayer()
    }).addTo(map);

    cpts = new L.featureGroup();
    cpts.addTo(map);


    myURL = jQuery('script[src$="testing.js"]').attr('src').replace('testing.js', '');

    myIcon = L.icon({
        iconUrl: myURL + 'images/pin24.png',
        iconRetinaUrl: myURL + 'images/pin48.png',
        iconSize: [29, 24],
        iconAnchor: [9, 21]
    });

    for (var i = 0; i < markers.length; ++i) {
        var m = L.marker([markers[i].lat, markers[i].lng], {icon: myIcon});
        cpts.addLayer(m);
    }
    map.addLayer(cpts);
}
window.onload = init;







/*var L, MQ, map, idx = 0, cps, rl;

function init() {
    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [29.951065, -90.071533],
        zoom: 15
    });

    L.control.scale().addTo(map);

    cps = new L.featureGroup();
    cps.addTo(map);


}
*/





/*var tiles = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}),
latlng = L.latLng(29.951065, -90.071533);

var map = L.map('map', {center: latlng, zoom: 15, layers: [tiles]});

var potholes = L.markerClusterGroup({ spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false });

function populate() {
    var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );
    var myIcon = L.icon({
        iconUrl: myURL + 'images/pin24.png',
        iconRetinaUrl: myURL + 'images/pin48.png',
        iconSize: [29, 24],
        iconAnchor: [9, 21]
    });
    for ( var i = 0; i < markers.length; ++i ) {
        var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} );
        markerClusters.addLayer( m );
    }
    return false;
}

potholes.on('clusterclick', function(a) {
    a.layer.spiderfy();
});

populate();
map.addLayer(potholes);
TEST OF MARKER CLUSTER DOCUMENTATION FROM GITHUB ABOVE */



/*
L.control.scale().addTo(map);

cps = new L.featureGroup();
cps.addTo(map);

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

var myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21]
});

var markerClusters = L.markerClusterGroup();



map.addLayer( markerClusters );*/


