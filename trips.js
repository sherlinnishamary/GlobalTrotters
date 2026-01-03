function createTrip() {
  const trips = getTrips();
  trips.push({
    id: Date.now(),
    user: getCurrentUser(),
    name: name.value,
    start: start.value,
    end: end.value,
    itinerary: [],
    budget: 0
  });
  saveTrips(trips);
  window.location.href = "my-trips.html";
}
