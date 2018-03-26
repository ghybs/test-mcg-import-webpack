import * as L from 'leaflet';
//import 'leaflet'; // Works as well, because Leaflet still exports to window.L as well in version 1.3.1.
import 'leaflet.markercluster';
//import {MarkerClusterGroup} from 'leaflet.markercluster';

const map = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.setView([48.85, 2.35], 12);
const mcg = L.markerClusterGroup().addTo(map);
//const mcg = new MarkerClusterGroup().addTo(map);

for (let i = 0; i < 50; i += 1) {
  L.marker(getRandomLatLng()).addTo(mcg);
}

function getRandomLatLng() {
  return [
    48.8 + 0.1 * Math.random(),
    2.25 + 0.2 * Math.random()
  ];
}
