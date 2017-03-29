var map,
    dir;

map = L.map( 'map', {
    center: [29.951065, -90.071533],
    minZoom: 2,
    zoom: 13
});

dir = MQ.routing.directions();

dir.route({
    locations: [
        '1750 st charles avenue, new orleans',
        '2520 joseph street, new orleans'
    ]
});

map.addLayer(MQ.routing.routeLayer({
    directions: dir,
    fitBounds: true
}));