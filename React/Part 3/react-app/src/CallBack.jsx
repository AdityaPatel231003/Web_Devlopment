// New State depend on old State
import { useState } from "react";

export default function CallBack(){
    let [count,setCount]=useState(0);
    

    function increase() {
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

        // New State depend on old State
        // async function therefore use callback

        setCount((count)=>{
            return count+1;
        })
        setCount((count)=>{
             return count+1;
        })
        setCount((count)=>{
           return  count+1;
        })
        setCount((count)=>{
           return count+1;
        })       
        

     
    }
    

    return(
            <>
                <h1>Count={count}</h1>
                <button onClick={increase}>Increase Count</button>
            </>
    )
}
