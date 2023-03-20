"use strict";

// For Registeration Form
const formSubmitBtn = document.querySelector(".Submit-Btn");
const SubmitMessage = document.querySelector(".Submit-Message");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  SubmitMessage.style.display = "block";
  SubmitMessage.style.color = "green";
  SubmitMessage.innerHTML = "Submitted successfully!";
  setTimeout(() => {
    SubmitMessage.innerHTML = "";
  }, 5000);
  form.reset();
});

// To swich Colors Of Text and Background.
const switchColors = document.querySelector(".switch");
const body = document.querySelector("body");
const header = document.querySelector("header");
const AllheadingOne = document.querySelectorAll("h1");
const Allheadingtwo = document.querySelectorAll("h2");
const Allheadingthree = document.querySelectorAll("h3");
const testimonyDiv = document.querySelectorAll(".col");
const paragraphs = document.querySelectorAll("p");
switchColors.addEventListener("click", () => {
  body.classList.toggle("switch-To-blue");

  function ChangeTextColor(text) {
    text.classList.toggle("heading");
  }
  AllheadingOne.forEach((e) => {
    ChangeTextColor(e);
  });
  Allheadingtwo.forEach((e) => {
    ChangeTextColor(e);
  });
  Allheadingthree.forEach((e) => {
    ChangeTextColor(e);
  });
  paragraphs.forEach((p) => {
    p.classList.toggle("heading");
    testimonyDiv.forEach((d) => {
      if (p.classList.contains("heading")) {
        d.style.border = "2px solid white";
      } else {
        d.style.border = "2px solid orange";
      }
    });
  });
});
