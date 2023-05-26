// ASSIGNING ELEMENTS
const landingPage = document.querySelector(".landing-page");
const myToDoList = document.querySelector("#my-to-do-list");
const nameInput = document.querySelector("#name-input");
const submit = document.querySelector("#submit");
const mainPage = document.querySelector(".main-page");
const itemInput = document.querySelector("#item-input");
const userName = document.querySelector("#user-name");
const addItem = document.querySelector("#add-item");
const removeItem = document.querySelector("#remove-item");
const exit = document.querySelector("#exit");

let toDoList = [];

// CREATED A FUNCTION THAT HANDLES THE NAME INPUT AND BG STYLE AFTER SUBMITTING NAME
const nameInputAndBGChanger = function () {
  // Created a variable that store the name typed in the input element
  const name = nameInput.value.trim();

  // This checks if the name is true or it contains a non-empty value so that if it is true it will run the following block of code
  if (userName) {
    // this line gets the value or the typed in text in the name variable
    userInput.innterText = name;
    // This sets the display background css property of the landingPage to "none"
    landingPage.style.background = "none";
  }
  // This sets the display background css property of the mainPage to "flex" the mainPage visible by changing its display style on the CSS property of mainPage
  mainPage.style.backgroun = "flex";
};
// ADDED nameInputAndBGChanger FUNCTION TO SUBMIT BUTTON
submit.addEventListener("submit", nameInputAndBGChanger());

// CREATED A FUNCTION THAT ADDS THE TASK TYPED IN THE TO DO LIST INPUT

const addTask = function () {
  // Created a variable that store the name typed in the input element
  const item = addItem.value.trim();
  // this line gets the value or the typed in text in the name variable
  itemInput.innerText = item;
};
// ADDED addTask FUNCTION TO ADDITEM BUTTON
addItem.addEventListener("submit", addTask());
