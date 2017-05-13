/**
 * Created by kellykrawczyk on 4/11/17.
 */



var map, L, MQ, myURL, myIcon, cpts;

function init() {

    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [29.951065, -90.071533],
        zoom: 13
    });



    L.control.scale().addTo(map);


    cpts = new L.layerGroup();
    cpts.addTo(map);



    var potholes = new L.markerClusterGroup({
        maxClusterRadius: 40
    });
    for (var i = 0; i < markers.length; i++) {
        var latlng = new L.LatLng(markers[i].lat, markers[i].lng);
        potholes.addLayer(new L.Circle(latlng, 10));
    }
    map.addLayer(potholes);


    /*myURL = jQuery('script[src$="testing.js"]').attr('src').replace('testing.js', '');

    myIcon = L.icon({
        iconUrl: myURL + 'images/pin24.png',
        iconRetinaUrl: myURL + 'images/pin48.png',
        iconSize: [29, 24],
        iconAnchor: [9, 21]
    });

    for (let i = 0; i < markers.length; ++i) {
        let m = L.marker(
            [markers[i].lat, markers[i].lng],
            {icon: myIcon}
            ).addTo(potholes);
        potholes.addLayer(m);
    }

    //map.addLayer(MQ.mapLayer());
    //map.addLayer(cpts);
*/
}
window.onload = init;
/*function routeit() {

    var dir = MQ.routing.directions();

    dir.route({

        locations: [
            'new orleans LA',
            'metarie LA'
        ]
    });


    map.addLayer(MQ.routing.routeLayer({
        directions: dir,
        fitBounds: true

    }));
}

*/


/*

var L, MQ, map, idx = 0, cps, rl;

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


/*
var tiles = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}),
latlng = L.latLng(29.951065, -90.071533);

var map = L.map('map', {center: latlng, zoom: 15, layers: [tiles]});

var potholes = L.markerClusterGroup({ spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false });

function populate() {
    var myURL = jQuery( 'script[src$="testing.js"]' ).attr( 'src' ).replace( 'testing.js', '' );
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

*/
/*TEST OF MARKER CLUSTER DOCUMENTATION FROM GITHUB ABOVE */



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


