import { useState } from "react";

// First Hook
export default function StateVariable(){
    let [countVariable,setCountVariable]=useState(0);
    

    function increase() {
        setCountVariable(countVariable+1);
        console.log(countVariable);
        // Difference in value in .log() and count={}
        // click .log()  rerender=> count   
        //   N                        0             
        //   Y      0                 1    
        //   Y      1                 2
        //   Y      2                 3
        // beacuse pura code Re-render tab setcount() mai value increase  hogi
        //  setcount ko execute kerna sai code Re-render hoga (except initialization of useState() hook)
        //    fir value increase hogi jo .log() mai visible hogi
        
    }
    

    return(
            <>
                <h1>Count={countVariable}</h1>
                <button onClick={increase}>Increase Count</button>
            </>
    )
}
