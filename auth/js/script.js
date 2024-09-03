const container = document.getElementById("container");
const toggleRegisterBtn = document.getElementById("toggle-register");
const toggleLoginBtn = document.getElementById("toggle-login");

toggleRegisterBtn.addEventListener("click", () => {
  container.classList.add("active");
});

toggleLoginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
