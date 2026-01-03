const id = new URLSearchParams(location.search).get("id");
const trips = getTrips();
const trip = trips.find(t => t.id == id);

function save() {
  trip.budget = amount.value;
  saveTrips(trips);
  alert("Saved");
}
