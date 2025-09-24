import { useState } from "react";
import  "./LotteryGame.css"
import {generatenewticket,ticketsum} from  "./helper";

export default function LotteryGame(){
    let [ticket,setTicket]=useState([0,0,0]);

    let iswinning=ticketsum(ticket)===15;
  
   let buyTicket=()=>{
        setTicket(generatenewticket(3))
    }


    return(
            <div>
                <h1>Lottery Game</h1>
                <div className="ticket">
                    <span>{ticket[0]}</span>
                     <span>{ticket[1]}</span>
                    <span>{ticket[2]}</span>
                </div>
                <h3>{iswinning && "Congrats u Win"}</h3>
                <button onClick={buyTicket}>Buy New Ticket</button>

            </div>
    )
}