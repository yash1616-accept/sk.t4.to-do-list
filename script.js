const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("List-container");
function addTask() {
    if (inputbox.value === ''){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
 }
 inputbox.value = "";
  savedata();
}
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
         savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
         savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML)
}//stores data in local storage
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
    if (listcontainer.innerHTML === null) {
        listcontainer.innerHTML = "";
    }
}
showtask();
