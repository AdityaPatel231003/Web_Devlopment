import { useState } from "react";

// ObjectState
export default function LudoBoard() {
    let [move,setMove]=useState({red:0,yellow:0,green:0,blue:0})
    let [count,setCount]=useState(0);
    let updateRed=()=>{
        console.log(move.red);
        setMove({...move,red:move.red+1});
    }
    let updatyellow=()=>{
        console.log(move)
        setMove((move)=>{
           return {...move,yellow:move.yellow+1}
        });
    }
    let updatGreen=()=>{
        move.green+=1;
        console.log(move)
        setMove((move)=>{
           return {...move,move}
        });
    }
    let updatBlue=()=>{
        move.blue+=1;
        console.log(move)
        setMove((move)=>{
           return {...move,move}
        });
    }
    
    return(
        <div>
            <h1>Ludo Board</h1>

            <p>Red={move.red}</p>
            <button onClick={updateRed} style={{backgroundColor:'Red',color:'black'}}>+1</button>

            <p>yellow={move.yellow}</p>
            <button onClick={updatyellow} style={{backgroundColor:'yellow',color:'black'}}>+1</button>

            <p>Green={move.green}</p>
            <button onClick={updatGreen} style={{backgroundColor:'Green',color:'black'}}>+1</button>

            <p>Blue={move.blue}</p>
            <button onClick={updatBlue} style={{backgroundColor:'blue',color:'black'}}>+1</button>
        </div>
    )
}