import { useState } from "react"
import {v4 as uuidv4} from "uuid";


export default function MarkAsTodo(){

    let[todoValue,setTodoValue]=useState("");
    let[arr,setArr]=useState([{tasks:"Sample-task",id:uuidv4(),isDone:false}])

    let addTask=()=>{
        setArr([...arr,{tasks:todoValue,id:uuidv4(),isDone:false}]);
        setTodoValue("");

    }

    let newValue=(event)=>{
        setTodoValue(event.target.value);

    }

    let deleteTasks=(id)=>{
        let newarr=arr.filter((el)=>
            el.id!==id
        )

        setArr([...newarr])
    }

    let updateAll=()=>{
        let newarr=arr.map((el)=>{
            return{
                ...el,tasks:el.tasks.toUpperCase(),isDone:true
            }
        }
            
        )

        setArr([...newarr])
    }

    let updateOne=(id)=>{
        let newarr=arr.map((el)=>{
            if (el.id===id) {
                            return{
                ...el,tasks:el.tasks.toLowerCase(),isDone:true
            }
                
            }else{
                return {...el}
            }

        }
            
        )

        setArr([...newarr])
    }

    let markAsDone=(id)=>{
        let newarr=arr.map((el)=>{
            if (el.id===id) {
                            return{
                ...el,isDone:true
            }
                
            }else{
                return {...el}
            }

        }
            
        )

        setArr([...newarr])
        console.log(newarr);
    }



    return(
        <div className="MarkAsTodo">
            <input placeholder="Enter Tasks" onChange={newValue} value={todoValue} />
            <button onClick={addTask} >Add</button>

            <br /><br /><br />
            <h4>Todo Tasks</h4>    <hr />

            <ul>
                {
                    arr.map((el)=>(
                        <li key={el.id}>
                            <span style={el.isDone?{ textDecorationLine: 'line-through' }:{}}>  {el.tasks} </span>
                        <button onClick={()=>{deleteTasks(el.id)}}>Delete</button> &nbsp; &nbsp;
                        <button onClick={()=>{updateOne(el.id)}}>Lower Case</button>
                        <button onClick={()=>{markAsDone(el.id)}}  >Mark as Done</button>
                        </li>

                    ))
                }
            </ul>
            <button onClick={updateAll}>UpperCase All</button>

        </div>
    )
}