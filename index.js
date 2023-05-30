const userInput = document.querySelector("#userInput");
const submitBtn = document.querySelector("#submitBtn");
const list = document.querySelector("#list");

// CREATE A FUNCTION
const todo = () => {
  // 1. Get the value on the input field
  const input = userInput.value.trim();
  //2. Create a new list element that will hold the value of the typed text in the input field
  const newLi = document.createElement("li");
  //3. Create a text node that will print the value on the input field
  const text = document.createTextNode(input);
  //4. Check if the typed text in the input field is valid
  if (input === "") {
    return;
  }
  //5. Add the gathered text from the input field and insert it in "li" element
  newLi.appendChild(text);
  //6. Add the new "li" element inside the "ul" element or the list variable
  list.appendChild(newLi);
  //7. Clear input field
  userInput.value = "";
};
//8. Add event listener to the submit button
submitBtn.addEventListener("click", todo);
