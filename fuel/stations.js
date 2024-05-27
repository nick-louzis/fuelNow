const gasStations = [
    {
        name: "Gas Station 1",
        latitude: 37.9838,
        longitude: 23.7275
    },
    {
        name: "Gas Station 2",
        latitude: 37.9894,
        longitude: 23.7319
    },
    {
        name: "Gas Station 3",
        latitude: 37.9779,
        longitude: 23.7420
    },
    {
        name: "Gas Station 4",
        latitude: 37.9715,
        longitude: 23.7260
    },
    {
        name: "Gas Station 5",
        latitude: 37.9645,
        longitude: 23.7353
    }
];



var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

gasStations.forEach(station => {
  var name = station.name
  var lat = station.latitude
  var lng = station.longitude
  L.marker([lat,lng]).addTo(map).bindPopup(name)
  .openPopup();
});
