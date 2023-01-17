import Ticket, { TicketObject } from "../Ticket";
// import tickets from "../../data/ticketData";
import {useState,useEffect} from 'react';

type CompletedProp = {
  completed : boolean
}


const TicketBoard = ({completed} : CompletedProp) => {
  const [tickets, setTickets] = useState([]);

  useEffect (() => {    
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/hello");
      const data = await res.json();
      setTickets(data.tickets);
    }
    fetchData();
  }, [completed]);

  console.log(tickets);


  return (
    <div className="gap-3 overflow-y-scroll w-full flex flex-col items-center h-[60vh] text-black">
      {/* Map over tickets array, rendering each ticket */}
      {tickets.map((ticket : TicketObject, key) => {
        return ticket.completed === completed ? (
          <Ticket key = {ticket.id} id={ticket.id} name={ticket.name} subject={ticket.subject} date={ticket.date} time={ticket.time} lastMessage={ticket.lastMessage} completed={ticket.completed} />
            ) : (
              null
            )
      }) }
    
    </div>
  );
};

export default TicketBoard;