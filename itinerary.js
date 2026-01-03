const id = new URLSearchParams(location.search).get("id");
const trips = getTrips();
const trip = trips.find(t => t.id == id);

function addStop() {
  trip.itinerary.push(city.value);
  saveTrips(trips);
  render();
}

function render() {
  stops.innerHTML = trip.itinerary.map(c => `<li>${c}</li>`).join("");
}
render();
