var map, L, MQ, cpts, potholeCluster, rl, idx = 0;

function init() {

    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [29.951065, -90.071533],
        zoom: 13
    });



    L.control.scale().addTo(map);



    cpts = new L.layerGroup();
    cpts.addTo(map);

    potholeCluster = new L.markerClusterGroup({
        maxClusterRadius: 30,
        removeOutsideVisibleBounds: true
    });
    for (var i = 0; i < markers.length; i++) {
        var latlng = new L.LatLng(markers[i].lat, markers[i].lng);

        var potholeMarker = new L.Circle(latlng, 10,
            {
                id: idx,
                cweight: 100,
                color: 'red',
                fillColor: 'red',
                opacity: 1,
                fillOpacity: 0.5
            }
        ).addTo(potholeCluster);
        potholeCluster.addTo(cpts);

        //map.addLayer(potholes);
        //var visibleOne = potholes.getVisibleParent(i);

        //idx = idx + 1;
    }



}
window.onload = init;

function routeit() {

    var cpc = [], dir = MQ.routing.directions()
        .on('success', function(data){
            var legs = data.route.legs,
                html = '',
                maneuvers,
                i;

            if (legs && legs.length) {
                maneuvers = legs[0].maneuvers;

                for (i = 0; i < maneuvers.length; i++) {

                    html += (i+1) + '. ';
                    html += maneuvers[i].narrative + '';
                }
                L.DomUtil.get('route-narrative').innerHTML = html;
            }

        });



    cpts.eachLayer(function(layer){

        if (layer.getChildCount > 20) {
            cpc.push({
                lat: layer.lat,
                lng: layer.lng,
                weight: 100,
                radius: 1
            });
        }
        if (layer.getChildCount < 20 && layer.getChildCount > 10) {
            cpc.push({
                lat: layer.lat,
                lng: layer.lng,
                weight: 50,
                radius: 0.75
            });
        }
        if (layer.getChildCount < 10 && layer.getChildCount > 5) {
            cpc.push({
                lat: layer.lat,
                lng: layer.lng,
                weight: 25,
                radius: 0.1
            });
        }
        if (layer.getChildCount < 5 && layer.getChildCount > 2) {
            cpc.push({
                lat: layer.lat,
                lng: layer.lng,
                weight: 10,
                radius: 0.1
            });
        }
        if (layer.getChildCount < 2) {
            cpc.push({
                lat: layer.lat,
                lng: layer.lng,
                weight: 0.9,
                radius: 0.1
            });
        }



    });

    /* cpts.eachLayer(function (d) {

     var w = 0;

     if (d.options.fillColor === 'red') {

     w = d.options.fillOpacity * 200;
     } else {
     w = 1 - (d.options.fillOpacity * 2)
     }
     cpc.push({
     lat: d.lat,
     lng: d.lng,
     weight: w,
     radius: 0.1
     });
     });*/


    dir.route({
        locations: [
            document.getElementById('orig').value,
            document.getElementById('dest').value
        ],
        options: {
            routeControlPointCollection: cpc
        }
    });

    if (rl) {
        map.removeLayer(rl);
    }

    rl = MQ.routing.routeLayer({
        directions: dir,
        fitBounds: true,
        ribbonOptions: {draggable: false}
    });
    rl.addTo(map);

    map.addLayer(rl);
}