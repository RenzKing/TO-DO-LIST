// ASSIGNING ELEMENTS
const landingPage = document.querySelector(".landing-page");

const myToDoList = document.querySelector("#my-to-do-list");

const nameInput = document.querySelector("#name-input");

const submit = document.querySelector("#submit");

const mainPage = document.querySelector(".main-page");

const userName = document.querySelector("#user-name");

const addItem = document.querySelector("#add-item");

const removeItem = document.querySelector("#remove-item");

const exit = document.querySelector("#exit");

let toDoList = [];

// CREATE FUNCTION FOR BUTTONS

//NAME INPUT VALUE
const inputValue = () => {
  const name = nameInput.value.trim();
  if (name) {
    userName.innerText = name;
    landingPage.style.display = "none";
    mainPage.style.display = "flex";
  }
};
submit.addEventListener("click", inputValue);
