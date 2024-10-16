"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

const getElementsByClassName = document.getElementsByClassName("btn");
console.log(getElementsByClassName);

//Creating and inserting elements
//.insertAdjacentHtml

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improved functionality and 
analytics. <button class="btn btn--close-cookie">Got it!</button>`;

const header = document.querySelector("header"); // or a specific class or ID

header.prepend(message);
header.append(message);

//delete Elements
document.querySelector(".btn--close-cookie").addEventListener(
  "click",
  function () {
    //   message.remove();
    message.parentElement.removeChild(message);
  },
);

//Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
const height = console.log(getComputedStyle(message).height);

message.style.height = Number.parseInt(height, 10) + 20 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

//Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);

logo.alt = "Beautiful minimalist logo";

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "bankist");

//Classes
logo.classList.add("c");
logo.classList.remove("d");
logo.classList.toggle("e");
logo.classList.contains("f");
