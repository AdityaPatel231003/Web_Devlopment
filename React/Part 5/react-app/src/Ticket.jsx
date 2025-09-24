import TIcketnum from "./TIcketnum";
import "./Ticket.css";

export default function Ticket({ticket}) {
    return(
        <div className="Ticket">

            <h3>Lottery Game</h3>
            {
                ticket.map((num,idx)=>(
                   <TIcketnum n={num} key={idx}/>
                ))
            }
        </div>
    );
}