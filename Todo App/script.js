// step-1 Assure Validation
// step-2 Add New Task
// step-3 Mark complete
// step-4 Delete Task

fetchTask();

document.querySelector(".addTask").addEventListener("click", newTask);

document.querySelector("#tasks").addEventListener("click", (e) =>{
    
if (e.target.className === "checkbox" ) {
    completeTask(e)
}
if (e.target.className === "delete") {
    deleteTask(e)
}

});


function newTask(){
    const taskValue = document.querySelector(".newTask").value;

    if(taskValue === ""){
        alert("Please Enter Value");
    }
    else{
    const newTask = document.createElement('p');
    newTask.className ='taskList';
    newTask.innerHTML = `<input class="checkbox" type='checkbox'>
    <span class="mark">${taskValue}</span> <span class="delete"> &#10005;</span>`;

    document.querySelector("#tasks").appendChild(newTask);
    document.querySelector(".newTask").value = '';

    storeTask();
    }
}

function completeTask(e){

    const ischecked = e.target.checked;

    if (ischecked) {
        e.target.nextSibling.nextSibling.classList.add('marked');
        e.target.defaultChecked = true;
    }else{
        e.target.nextSibling.nextSibling.classList.remove('marked');
        e.target.defaultChecked = false;
    }

    storeTask();
}


function deleteTask(e){
    e.target.parentElement.remove();
    storeTask();
}


function storeTask(){
    const data = document.querySelector("#tasks").innerHTML;
    localStorage.setItem("data",data);

}

function fetchTask(){
    const data = localStorage.getItem("data"); 
    document.querySelector("#tasks").innerHTML = data;
}


