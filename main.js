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

// Task 3
const buttonDaily = document.querySelector("#dailyTasks");
function loopTasks(){
  for(let index= 0; index< dailyToDos.length; index ++){
    const lis = document.createElement("li");
    lis.innerText =dailyToDos[index];
    ul.appendChild(lis);
    console.log('index');
  };
 
}
buttonDaily.addEventListener("click", loopTasks);
// task 4

function changeCol(event){
  event.target.style.color = "lightgreen";
  // col1 = "lightgreen";
}
document.addEventListener("click", changeCol);

//task 5
const buttonClear = document.querySelector("#clear");
function clearList(event){
  const lis = document.querySelector('li');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  
}
buttonClear.addEventListener("click", clearList);