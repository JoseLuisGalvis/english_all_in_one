// Script para Dark Mode

const toggle = document.getElementById("darkModeToggle");
const sunIcon = document.getElementById("sunIcon");

// Verificar si hay un modo guardado en localStorage
document.addEventListener("DOMContentLoaded", () => {
  const darkModeEnabled = localStorage.getItem("darkMode") === "true";

  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    sunIcon.classList.replace("bi-sun", "bi-moon");
  }
});

// Alternar Dark Mode
toggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  // Guardar la preferencia en localStorage
  localStorage.setItem("darkMode", isDarkMode);

  // Cambiar ícono
  if (isDarkMode) {
    sunIcon.classList.replace("bi-sun", "bi-moon");
  } else {
    sunIcon.classList.replace("bi-moon", "bi-sun");
  }
});
