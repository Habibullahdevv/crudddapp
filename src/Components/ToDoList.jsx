import { useState } from "react"


function ToDolist(){


const [task,settask ] = useState(["one", "two", "three"]);
const[newTask, setnewTask] = useState("");

function HandleInputChange(event){
    setnewTask(event.target.value);
}

function HandleAdd(){
if(newTask.trim() !== ""){
   
    settask(t=> [...t, newTask]);
    setnewTask("");

}
}

function HandleDelete(index){
    const updatetasks = task.filter((_, i) => i !==index);
settask(updatetasks);

}

function HandleUp(index){

    if(index > 0){
        const updatetasks = [...task];
    [updatetasks[index], updatetasks[index - 1]] = 
    [updatetasks[index - 1], updatetasks[index]];
       
        settask(updatetasks);
    }

}

function HandleDown(index){
    
    if(index < task.length - 1){
        const updatetasks = [...task];
    [updatetasks[index], updatetasks[index + 1]] = 
    [updatetasks[index + 1], updatetasks[index]];
       
        settask(updatetasks);
    }

}


    return(<>
    <hr />
<div className="to-do-list">

<h1>To Do List</h1>

<div>
<input type="text" placeholder="Enter a Task!..." value={newTask} onChange={HandleInputChange}/>
<button className="add-task" onClick={HandleAdd}>Add</button>
</div>


<ol>{task.map((tasks, index) => 
        <li key={index}> <span className="text">{tasks}</span> 
            <button className="Delete-button"
            onClick={() => HandleDelete(index)}>
                Delete
            </button> 
           
            <button className="Up-button"
            onClick={() => HandleUp(index)}>
                👆
            </button> 
           
            <button className="Dowm-button"
            onClick={() => HandleDown(index)}>
                👇
            </button> 
        </li> )}
</ol>

</div>


    </>);

}

export default ToDolist