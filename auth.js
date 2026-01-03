function signup() {
  const email = email.value;
  const password = document.getElementById("password").value;

  const users = getUsers();
  users.push({ email, password });
  saveUsers(users);
  alert("Signup successful");
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = getUsers().find(u => u.email === email && u.password === password);
  if (!user) return alert("Invalid login");

  sessionStorage.setItem("user", email);
  window.location.href = "dashboard.html";
}
