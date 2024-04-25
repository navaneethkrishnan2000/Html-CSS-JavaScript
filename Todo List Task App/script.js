const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){  // if the input tag is empty then a alert will come
        alert("Add your task!");
    }
    else{
        let li = document.createElement("li"); //while clicking on the button this method will acutate and create a new element with tag 'li'
        li.innerHTML = inputBox.value;  //adding the text in the input box to the li tag
        listContainer.appendChild(li);  //this appendChild method is used to display the text under the class

        //to show the cross icon in the kest after adding the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = ''; // after adding the task, it will automatically disappears from the input tag
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//to save the data after adding it to the list, while refreshing the all the data will gone, this is to prevent that
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();