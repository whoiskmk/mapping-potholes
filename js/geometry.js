/**
 * Created by kellykrawczyk on 5/12/17.
 */

/*
(maybe use geoCSV) https://github.com/joker-x/Leaflet.geoCSV

use subgroups in featureLayer.subgroup for weights of local marketClusterGroups: https://github.com/ghybs/Leaflet.FeatureGroup.SubGroup/blob/leaflet-0.7/examples/subGroup-markercluster-controlLayers-realworld.388.html

create local markerClusterGroup and assign weights based on convex hull
calculate from: view-source:http://leaflet.github.io/Leaflet.markercluster/example/marker-clustering-custom.html

 var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 maxZoom: 18,
 attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }),
 latlng = L.latLng(50.5, 30.51);

 var map = L.map('map', {center: latlng, zoom: 15, layers: [tiles]});


 //Custom radius and icon create function
 var markers = L.markerClusterGroup({
 maxClusterRadius: 120,
 iconCreateFunction: function (cluster) {
 var markers = cluster.getAllChildMarkers();
 var n = 0;
 for (var i = 0; i < markers.length; i++) {
 n += markers[i].number;
 }
 return L.divIcon({ html: n, className: 'mycluster', iconSize: L.point(40, 40) });
 },
 //Disable all of the defaults:
 spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false
 });


 function populate() {
 for (var i = 0; i < 100; i++) {
 var m = L.marker(getRandomLatLng(map), { title: i });
 m.number = i;
 markers.addLayer(m);
 }
 return false;
 }
 function populateRandomVector() {
 for (var i = 0, latlngs = [], len = 20; i < len; i++) {
 latlngs.push(getRandomLatLng(map));
 }
 var path = L.polyline(latlngs);
 map.addLayer(path);
 }
 function getRandomLatLng(map) {
 var bounds = map.getBounds(),
 southWest = bounds.getSouthWest(),
 northEast = bounds.getNorthEast(),
 lngSpan = northEast.lng - southWest.lng,
 latSpan = northEast.lat - southWest.lat;

 return L.latLng(
 southWest.lat + latSpan * Math.random(),
 southWest.lng + lngSpan * Math.random());
 }

 populate();
 map.addLayer(markers);



 var shownLayer, polygon;

 function removePolygon() {
 if (shownLayer) {
 shownLayer.setOpacity(1);
 shownLayer = null;
 }
 if (polygon) {
 map.removeLayer(polygon);
 polygon = null;
 }
 };

 markers.on('clustermouseover', function (a) {
 removePolygon();

 a.layer.setOpacity(0.2);
 shownLayer = a.layer;
 polygon = L.polygon(a.layer.getConvexHull());
 map.addLayer(polygon);
 });
 markers.on('clustermouseout', removePolygon);
 map.on('zoomend', removePolygon);

 */