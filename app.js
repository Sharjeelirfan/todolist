let input = document.getElementById("input");
// let btn = document.getElementById("addBtn");
let list = document.getElementById("todoList");
let form = document.getElementById("todoForm");
let theme = document.getElementById("theme");
let body = document.querySelector("body")




form.addEventListener("submit", function (event) {
  event.preventDefault();
  let text = input.value;
  if (text !== "") {
    additem(text);
    input.value = "";
  }
});

function additem(text) {
  let li = document.createElement("li");
  li.className = "addedText"
  li.textContent = text;
  let delBtn = document.createElement("div")
  delBtn.innerHTML = '<img src="./delete.png">'
  delBtn.className = 'del-btn'
  delBtn.addEventListener('click' , function (){
    li.remove()
  })
  li.appendChild(delBtn)
  list.appendChild(li);
}


let islight = true

theme.addEventListener("click" , () =>{
  if(islight === true){
    body.className = "light"
  }else{
    body.className = "dark"
  }
  islight = !islight

})