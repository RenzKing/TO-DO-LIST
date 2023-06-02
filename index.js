// const userInput = document.querySelector("#userInput");
// const submitBtn = document.querySelector("#submitBtn");
// const list = document.querySelector("#list");

// // CREATE A FUNCTION
// const todo = () => {
//   // 1. Get the value on the input field
//   const input = userInput.value.trim();
//   //2. Create a new list element that will hold the value of the typed text in the input field
//   const newLi = document.createElement("li");
//   //3. Create a text node that will print the value on the input field
//   const text = document.createTextNode(input);
//   //4. Check if the typed text in the input field is valid
//   if (input === "") {
//     return;
//   }
//   //5. Add the gathered text from the input field and insert it in "li" element
//   newLi.appendChild(text);
//   //6. Add the new "li" element inside the "ul" element or the list variable
//   list.appendChild(newLi);
//   //7. Clear input field
//   userInput.value = "";
// };
// //8. Add event listener to the submit button
// submitBtn.addEventListener("click", todo);

const userInput = document.querySelector("#userInput");
const submitBtn = document.querySelector("#submitBtn");
const list = document.querySelector("#list");
const btn = document.createElement("button");
btn.classList.add("butones");
btn.innerText = "Click me to change color";
btn.style.color = "white";
btn.style.alignItems = "center";

let task = [];
// CREATE A FUNCTION THAT WILL DELETE A SPECIFIC TASK

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

const colorizer = () => {
  const color = randomColor();
  console.log(`RGB Value ${color}`);
  btn.style.background = color;
};

const remove = (e) => {
  const del = e.target.parentElement;
  list.removeChild(del);
};

// CREATE A FUNCTION THAT WILL GET THE VALUE OF THE INPUT AND PRINT IT OUT IN A UNORDERED LIST FORMAT
const todo = () => {
  const input = userInput.value.trim();
  const newLi = document.createElement("li");
  const text = document.createTextNode(input);
  if (input === "") {
    return;
  }
  task.push(input);
  newLi.appendChild(text);
  list.appendChild(newLi);
  list.style.display = "grid";

  userInput.value = "";
  const deleter = document.createElement("button");
  deleter.textContent = "Remove";
  deleter.style.background = "red";
  deleter.style.marginLeft = "20px";
  newLi.appendChild(deleter);
  deleter.addEventListener("click", remove);
};
const body = document.querySelector("body");
btn.style.background = "blue";
btn.style.height = "100px";
btn.style.width = "100px";
body.appendChild(btn);
submitBtn.addEventListener("click", todo);

btn.addEventListener("click", colorizer);
