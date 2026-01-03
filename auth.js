// GET ELEMENTS
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// HELPER FUNCTIONS
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// SIGNUP
signupBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Please fill both fields!");
    return;
  }

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    alert("User already exists!");
    return;
  }

  users.push({ email, password });
  saveUsers(users);
  alert("Signup successful! You can now login.");
  emailInput.value = "";
  passwordInput.value = "";
});

// LOGIN
loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password!");
    return;
  }

  sessionStorage.setItem("user", email);
  alert("Login successful!");
  window.location.href = "dashboard.html";
});
