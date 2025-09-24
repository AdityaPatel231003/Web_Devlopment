import { useState } from "react"
import Ticket from "./Ticket"
import TIcketnum from "./TIcketnum"
import{generatenewticket ,ticketsum} from './helper'

export default function LotteryGameComponent({n,winningSum}) {
    let [ticket,setTicket]=useState(generatenewticket(n));
    let iswinning=winningSum(ticket);


    let buyTicket=()=>{
       setTicket( generatenewticket(n));
    }

    return(
        <div>
            <Ticket ticket={ticket}/>
               <h3>{iswinning && "Congrats u Win"}</h3>
                <button onClick={buyTicket}>Buy New Ticket</button>


        </div>

    )
}