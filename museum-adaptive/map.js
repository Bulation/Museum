mapboxgl.accessToken =
  "pk.eyJ1IjoiYnVsYXRpb24iLCJhIjoiY2t0azc4NWhxMDQzYTJvbWs5OW5qM2x6MCJ9.HNckc8PX9VXLLEXa2w6iXA";

let obj = {
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [2.337230, 48.8613022],
  zoom: 16,
}
const mapContainer = document.querySelector(".contacts-wrapper");
let map = new mapboxgl.Map(obj);

map.addControl(new mapboxgl.NavigationControl());

const markerLouvre = new mapboxgl.Marker({
  color: "#000000",
})
  .setLngLat([2.336435, 48.8609092])
  .addTo(map);

const markerRivoli = new mapboxgl.Marker({
  color: "grey",
})
  .setLngLat([2.336495, 48.8624933])
  .addTo(map);

const markerCarousel = new mapboxgl.Marker({
  color: "grey",
})
  .setLngLat([2.332995, 48.861892])
  .addTo(map);

const markerTunnel = new mapboxgl.Marker({
  color: "grey",
})
  .setLngLat([2.333255, 48.8602102])
  .addTo(map);

const markerSarcophage = new mapboxgl.Marker({
  color: "grey",
})
  .setLngLat([2.339705, 48.8607392])
  .addTo(map);
