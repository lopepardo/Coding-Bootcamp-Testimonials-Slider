import "../scss/main.scss";

import "../img/favicon-32x32.png";
import "../img/icon-next.svg";
import "../img/icon-prev.svg";
import "../img/image-john.jpg";
import "../img/image-tanya.jpg";
import "../img/pattern-bg.svg";
import "../img/pattern-curve.svg";
import "../img/pattern-quotes.svg";

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const profile = document.querySelectorAll(".card__profile-bg");
const img = document.querySelectorAll(".card__img");

prev.addEventListener("click", () => {
  profile[1].classList.remove("show");
  img[1].classList.remove("show");
  profile[0].classList.add("show");
  img[0].classList.add("show");
});

next.addEventListener("click", () => {
  profile[0].classList.remove("show");
  img[0].classList.remove("show");
  profile[1].classList.add("show");
  img[1].classList.add("show");
});

document.addEventListener("DOMContentLoaded", () => {
  profile[0].classList.add("show");
  img[0].classList.add("show");
});
