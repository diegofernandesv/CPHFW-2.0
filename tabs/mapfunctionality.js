// Initialize the map
const map = L.map("map-container").setView([55.6761, 12.5683], 13); // Coordinates for Copenhagen

// Add minimalistic tile layer (CartoDB Positron)
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://carto.com/attributions">CartoDB</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Custom icon for "My Location"
const myLocationIcon = L.icon({
  iconUrl: "../images/i'mhere-icon.png", // Path to "My Location" icon image
  iconSize: [40, 40], // Size of the location icon
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// Create the "My Location" marker (use appropriate coordinates for actual location)
const myLocationMarker = L.marker([55.6761, 12.5683], { icon: myLocationIcon })
  .addTo(map)
  .bindPopup("<b>You are here!</b>");

// Create custom icons for each section with the desired colors
const eventHouseIcon = L.icon({
  iconUrl: "../images/event-house-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const selectedEventHouseIcon = L.icon({
  iconUrl: "../images/selectedevent-icon.png",
  iconSize: [50, 50], // larger size for selected icon
  iconAnchor: [25, 50],
  popupAnchor: [0, -40],
});

const foodIcon = L.icon({
  iconUrl: "../images/food-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const selectedFoodIcon = L.icon({
  iconUrl: "../images/selected-food.png",
  iconSize: [50, 50], // larger size for selected icon
  iconAnchor: [25, 50],
  popupAnchor: [0, -40],
});

const wcIcon = L.icon({
  iconUrl: "../images/wc-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const selectedWcIcon = L.icon({
  iconUrl: "../images/selected-wc.png",
  iconSize: [50, 50], // larger size for selected icon
  iconAnchor: [25, 50],
  popupAnchor: [0, -40],
});

const transportIcon = L.icon({
  iconUrl: "../images/transport-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const selectedTransportIcon = L.icon({
  iconUrl: "../images/selected-transport.png",
  iconSize: [50, 50], // larger size for selected icon
  iconAnchor: [25, 50],
  popupAnchor: [0, -40],
});

// Initialize markers arrays for each section without adding them to the map
let eventHouseMarkers = [];
let foodMarkers = [];
let wcMarkers = [];
let transportMarkers = [];

// Track the current selected marker
let currentMarker = null;
let currentMarkerCategory = null;

// Example pin data for each section (replace this with your actual data)
const eventHousesPins = [
  {
    lat: 55.68636,
    lon: 12.58721,
    name: "Borgergade 91",
  },
  {
    lat: 55.683,
    lon: 12.57786,
    name: "Landemærket 14",
  },
  {
    lat: 55.68205,
    lon: 12.59231,
    name: "Sankt Anne 17",
  },
  {
    lat: 55.67678,
    lon: 12.57827,
    name: "Bertel Throvaldsens Plads 2",
  },
];

const foodPins = [
  {
    lat: 55.67008,
    lon: 12.56007,
    name: "H15",
    website: "https://h15.dk/",
  },
  {
    lat: 55.68324,
    lon: 12.61072,
    name: "Noma",
    website: "https://noma.dk/",
  },
  {
    lat: 55.68346,
    lon: 12.58513,
    name: "Gasoline Grill",
    website: "https://www.gasolinegrill.com/",
  },
  {
    lat: 55.67394,
    lon: 12.55431,
    name: "Mangia",
    website: "http://mangia.dk/",
  },
  {
    lat: 55.66972,
    lon: 12.55327,
    name: "La Neta Vesterbro",
    website: "http://laneta.dk/",
  },
];

const wcPins = [
  {
    lat: 55.70705,
    lon: 12.5641,
    name: "Public toilet",
  },
  {
    lat: 55.69136,
    lon: 12.56122,
    name: "Public toilet",
  },
  {
    lat: 55.68537,
    lon: 12.56956,
    name: "Public toilet",
  },
];

const transportPins = [
  {
    lat: 55.67295,
    lon: 12.56468,
    name: "København H",
    website: "https://www.dsb.dk/",
  },
  {
    lat: 55.68231,
    lon: 12.55292,
    name: "Forum",
    website: "https://www.dsb.dk/",
  },
  {
    lat: 55.67688,
    lon: 12.56895,
    name: "Rådhuspladsen",
    website: "https://www.dsb.dk/",
  },
  {
    lat: 55.68386,
    lon: 12.57176,
    name: "Nørreport",
    website: "https://www.dsb.dk/",
  },
  {
    lat: 55.68269,
    lon: 12.55759,
    name: "Peblinge Dossering",
    website: "https://www.dsb.dk/",
  },
];

// Function to create markers with click functionality
// Function to create markers without adding them to the map initially
function createMarkers(pins, markersArray, icon, selectedIcon) {
  pins.forEach((pin) => {
    const marker = L.marker([pin.lat, pin.lon], { icon: icon }).bindPopup(
      `<b>${pin.name}</b><br><a href="${
        pin.website || "#"
      }" target="_blank">Visit Website</a>`
    );

    // Add click event for the marker to toggle the selected icon
    marker.on("click", () => {
      // Reset the previous marker's icon to its default, if a different marker was clicked
      if (currentMarker && currentMarker !== marker) {
        currentMarker.setIcon(
          currentMarkerCategory === "eventhouse"
            ? eventHouseIcon
            : currentMarkerCategory === "food"
            ? foodIcon
            : currentMarkerCategory === "wc"
            ? wcIcon
            : transportIcon
        );
      }

      // Set the clicked marker to the selected icon
      marker.setIcon(selectedIcon);
      currentMarker = marker;
      currentMarkerCategory =
        markersArray === eventHouseMarkers
          ? "eventhouse"
          : markersArray === foodMarkers
          ? "food"
          : markersArray === wcMarkers
          ? "wc"
          : "transport";
    });

    markersArray.push(marker); // Store the marker but don't add to map yet
  });
}

// Initialize markers for all sections with the right icons
createMarkers(
  eventHousesPins,
  eventHouseMarkers,
  eventHouseIcon,
  selectedEventHouseIcon
);
createMarkers(foodPins, foodMarkers, foodIcon, selectedFoodIcon);
createMarkers(wcPins, wcMarkers, wcIcon, selectedWcIcon);
createMarkers(
  transportPins,
  transportMarkers,
  transportIcon,
  selectedTransportIcon
);

// Function to toggle visibility of section markers when a section is clicked
function toggleMarkers(section) {
  let markers = [];
  switch (section) {
    case "eventhouses":
      markers = eventHouseMarkers;
      break;
    case "food":
      markers = foodMarkers;
      break;
    case "wc":
      markers = wcMarkers;
      break;
    case "transport":
      markers = transportMarkers;
      break;
  }

  markers.forEach((marker) => {
    if (marker._map) {
      // If marker is already added to the map, remove it
      map.removeLayer(marker);
    } else {
      map.addLayer(marker); // If marker is hidden, add it
    }
  });
}

// Event listeners for section buttons

document.getElementById("eventhouses").addEventListener("click", function () {
  toggleMarkers("eventhouses");
});

document.getElementById("food").addEventListener("click", function () {
  toggleMarkers("food");
});

document.getElementById("wc").addEventListener("click", function () {
  toggleMarkers("wc");
});

document.getElementById("transport").addEventListener("click", function () {
  toggleMarkers("transport");
});
