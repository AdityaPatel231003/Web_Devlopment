// New State depend on old State
import { useState } from "react";

export default function NormalFlow(){
    let [count,setCount]=useState(0);
    console.log('Re-render');
    

    function increase() {

        // setCount(count+1);
        setCount(25);


        // New State not depend on old State
        // async function therefore use callback 
        // but setvariable values is not change therefore there is no Re-render


    }
    

    return(
            <>
                <h1>Count={count}</h1>
                <button onClick={increase}>Increase Count</button>
            </>
    )
}
