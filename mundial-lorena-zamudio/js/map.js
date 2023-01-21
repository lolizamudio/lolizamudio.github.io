// Si el item logged de localStorage no existe
// y queremos entrar en map.html
// la aplicación nos deberá redirigir a index.html:
if (localStorage.getItem("logged") === false) {
  window.location.href = "index.html";
}

let center = [25.2841478, 51.4419568];

let map = L.map("map").setView(center, 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

const objetoMapa = [
  {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
  },
  {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
  },
  {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
  },
  {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
  },
  {
    jugador: "Cuti Romero",
    coordenada: [-31.4135, -64.18105],
    ciudad: "Córdoba",
  },
];

let selector = document.getElementById("select");

let arrayJugadores = objetoMapa.map(function (objeto) {
  return `<option>${objeto.jugador}</option>`;
});

selector.innerHTML = arrayJugadores.join().replaceAll(",", "");

let markerIcon = L.icon({
  iconUrl: "img/redMarker.png",
  iconSize: [30, 30],
  iconAnchor: [15, 31],
});

let marker = L.marker(center, { icon: markerIcon }).addTo(map);

function changeMap() {
  const objeto = objetoMapa.find((item) => item.jugador === select.value);
  map.setView(new L.LatLng(...objeto.coordenada), 11);
  marker = L.marker(objeto.coordenada, { icon: markerIcon }).addTo(map);
}

const cerrarSesion = () => {
  localStorage.removeItem("logged");
  window.location.href = "index.html";
};
