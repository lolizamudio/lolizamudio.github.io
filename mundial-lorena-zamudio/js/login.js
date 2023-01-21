if (localStorage.getItem("logged" === true)) {
  window.location.href = "map.html";
}

const credenciales = {
  email: "estudiante@guayerd.com",
  password: "123456",
};

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    form.elements.emailInput.value === credenciales["email"] &&
    form.elements.passwordInput.value === credenciales["password"]
  ) {
    localStorage.setItem("logged", true);
    window.location.href = "map.html";
  } else {
    alert("las credenciales son incorrectas.");
  }
});
