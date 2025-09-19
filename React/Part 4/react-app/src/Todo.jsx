import { useState } from "react";

export default function Todo() {

    let[arr,setNewArr]=useState(["Sample Task"]);
    let[newTask,setNewTask]=useState("");

    let updateNewArr=()=>{
        setNewArr([...arr,newTask]);
        setNewTask("");
    }

    let updateNewTask=(event)=>{
        setNewTask(event.target.value);
    }

    return(
        <div>
            <input placeholder="Enter Tasks"  onChange={updateNewTask} value={newTask}  />
            <button onClick={updateNewArr}>Add</button>

            <br /><br /><br /><hr />
            <h3>Tasks </h3>

            <ul>
                { arr.map((el)=>( <li>{el}</li>) )}
            </ul>

        </div>
    );
    
}