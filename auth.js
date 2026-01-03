function signup() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Fill both fields");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.email === email)) {
    alert("User already exists");
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful");
}

function login() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value;
  const password = passwordInput.value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid login");
    return;
  }

  sessionStorage.setItem("user", email);
  window.location.href = "dashboard.html";
}
