// Unique Key for List
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function TodoUniqueKey() {

    let[arrOfObject,setNewArrOfObject]=useState([{tasks:"sample Tasks",id:uuidv4()}]);
    let[newTask,setNewTask]=useState("");

    let updateNewArr=()=>{
        setNewArrOfObject([...arrOfObject,{tasks:newTask,id:uuidv4()}]);
        setNewTask("");
    }

    let updateNewTask=(event)=>{
        setNewTask(event.target.value);
    }

    let deleteTask=(id)=>{
       let newarr= arrOfObject.filter((el)=>el.id!=id);
       setNewArrOfObject([...newarr]);
    }

    let updateAllTask=()=>{
       let newarr= arrOfObject.map((el)=>{
                                    return{
                                        ...el ,tasks:el.tasks.toUpperCase()
                                    }
       });
       setNewArrOfObject([...newarr]);
    }

    let updateOneTask=(id)=>{
       let newarr= arrOfObject.map((el)=>{
                                    if (el.id==id) {
                                        return{
                                            ...el,tasks:el.tasks.toLowerCase()
                                        }
                                        
                                    }
                                    else{
                                        return el;
                                    }
       });
       setNewArrOfObject([...newarr]);
       console.log(newarr)
    }

    return(
        <div>
            <input placeholder="Enter Tasks"  onChange={updateNewTask} value={newTask}  />
            <button onClick={updateNewArr}>Add</button>

            <br /><br /><br /><hr />
            <h3>Tasks </h3>

            <ul>
                { arrOfObject.map((el)=>( 
                    <li key={el.id}><span>{el.tasks}</span>
                             <button onClick={()=>{deleteTask(el.id)}}>Delete</button> &nbsp; &nbsp;
                             <button onClick={()=>{updateOneTask(el.id)}}>To LowerCase</button>
                    </li>
                    ) )}
            </ul>
            <button onClick={updateAllTask}>To UpperCase</button>

        </div>
    );
    
}