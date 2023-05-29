"use strict";

const todo = document.querySelector(".todo");
const form = document.querySelector("form");
const userInput = document.querySelector("#userInput");
const submitBtn = document.querySelector("#submitBtn");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = userInput.value;
  const newLi = document.createElement("li");
  newLi.innerText = input;
  list.append(newLi);
  form.reset();
});
