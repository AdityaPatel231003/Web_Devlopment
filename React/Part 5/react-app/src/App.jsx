import { useState } from 'react'
import './App.css'
import LotteryGame from './LotteryGame'
import LotteryGameComponent from './LotteryGameComponent.jsx'
import {ticketsum} from './helper.js'
function App() {
 
    // let winningSum=(ticket)=>{
    //     return  ticketsum(ticket)===15;
    // }

    // let winningSum=(ticket)=>{
    //     return  ticket.every((num)=> num===ticket[0])
    // }

    let winningSum=(ticket)=>{
        return  ticket[0]===0;
    }




    return(
        <>
            {/* <LotteryGame/> */}
            <LotteryGameComponent n={3} winningSum={winningSum}/>
        </>
    )
 
}

export default App
