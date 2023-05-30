`user strict`;

const userInput = document.querySelector("#userInput");
const submitBtn = document.querySelector("#submitBtn");
const list = document.querySelector("#list");

const todo = () => {
  //1. get the text from the input field
  const input = userInput.value.trim();
  //2. create a new "li" element
  const newLi = document.createElement("li");
  //3. create a text node to print the text typed in the input field
  const text = document.createTextNode(input);

  //4. Make sure that something is typed in the input field. If there is none, then nothing will happen.
  if (input === "") {
    return;
  }
  //5. Added the text variable inside the newLi variable
  newLi.appendChild(text);
  //6. Added the newLi variable inside the List variable
  list.appendChild(newLi);
  // 7. Clear the input field
  userInput.value = "";
};
// 8. Added event listener for the submitBtn button
submitBtn.addEventListener("click", todo);
