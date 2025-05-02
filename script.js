// Menú Responsive
const menuToggle = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

const navLinks = document.querySelectorAll('.mobile-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('show');
  });
});

// Cambiador de Color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function getBrightness(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
}

if (btn) {
  btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;

    const brightness = getBrightness(hexColor);
    const header = document.querySelector("header");

    if (brightness < 128) {
      header.classList.remove("nav-dark");
      header.classList.add("nav-light");
    } else {
      header.classList.remove("nav-light");
      header.classList.add("nav-dark");
    }
  });
}
