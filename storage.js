function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getTrips() {
  return JSON.parse(localStorage.getItem("trips")) || [];
}

function saveTrips(trips) {
  localStorage.setItem("trips", JSON.stringify(trips));
}

function getCurrentUser() {
  return sessionStorage.getItem("user");
}
