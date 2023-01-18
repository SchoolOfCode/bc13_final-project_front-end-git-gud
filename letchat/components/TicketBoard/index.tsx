// import tickets from "../../data/ticketData";
import { useState, useEffect } from "react";
import Ticket from "../Ticket";

type CompletedProp = {
  completed: boolean;
};

export type TicketObject = {
  id: number;
  property_id: number;
  tenant_id: number;
  completed: boolean;
  raised_by: string;
  first_name: string;
  last_name: string;
  date: string;
  time: string;
};

const TicketBoard = ({ completed }: CompletedProp) => {
  const [tickets, setTickets] = useState([]);

  console.log(tickets);

  useEffect(() => {
    async function fetchTickets() {
      const res = await fetch("http://localhost:3001/api/tickets/landlords/1");
      const data = await res.json();
      setTickets(data.payload);
    }
    fetchTickets();
  }, [completed]);

  // function getLastMessage(id: number) {
  //   return fetch(`http://localhost:3001/api/messages/tickets/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let messageArrLength = data.payload.length;
  //       let lastMessage = data.payload[messageArrLength - 1].message;
  //       return lastMessage;
  //     });
  // }
  // function callGetLastMessage(id: number) {
  //   let lastMessage = getLastMessage(id);
  //   .then();
  //   return lastMessage;
  // }

  return (
    <div className="gap-3 overflow-y-scroll w-full flex flex-col items-center h-[60vh] text-black">
      {/* Map over tickets array, rendering each ticket */}
      {tickets.map((ticket: TicketObject) => {
        // let lastMessage = callGetLastMessage(ticket.id);
        return ticket.completed === completed ? (
          <Ticket
            key={ticket.id}
            id={ticket.id}
            first_name={ticket.first_name}
            last_name={ticket.last_name}
            property_id={ticket.property_id}
            tenant_id={ticket.tenant_id}
            raised_by={ticket.raised_by}
            completed={ticket.completed}
            date={ticket.date}
            time={ticket.time}
            // lastMessage={lastMessage}
          />
        ) : null;
      })}
    </div>
  );
};

export default TicketBoard;
