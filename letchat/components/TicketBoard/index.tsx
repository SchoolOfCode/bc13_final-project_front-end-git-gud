import Ticket from "../Ticket";
import tickets from "../../data/ticketData";
import {useState,useEffect} from 'react';

type TicketProps = {
  completed : boolean;
}

const TicketBoard = ({completed} : TicketProps) => {

  const [done, setDone] = useState(false);

  useEffect (() => {
    setDone(completed);
  }, [completed])



  return (
    // Ticket container
    <div className="gap-3 overflow-y-scroll w-full flex flex-col items-center h-[60vh] text-black">
      {/* Map over tickets array, rendering each ticket */}
      {tickets.map((ticket) => {
        return ticket.completed === done ? (
          <Ticket id={ticket.id} name={ticket.name} subject={ticket.subject} date={ticket.date} time={ticket.time} lastMessage={ticket.lastMessage}/>
  
            ) : (
              null
            )
      }) }
    
    </div>
  );
};

export default TicketBoard;
