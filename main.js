const dailyToDos = [
  "Wash Up",
  "Clean Teeth",
  "Eat Breakfast",
  "Eat Lunch",
  "Eat Dinner",
];

let buttonVar = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

function addList() {
  const li = document.createElement("li");
  li.innerText = input.value;
  if(input.value === ""){
    return;
  }
  ul.appendChild(li);
  input.value = "";
}

buttonVar.addEventListener("click", addList);