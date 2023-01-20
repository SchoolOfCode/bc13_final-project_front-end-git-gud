// import tickets from "../../data/ticketData";
import { useState, useEffect } from "react";
import Ticket from "../Ticket";
import { env } from "process";

type CompletedProp = {
  completed: boolean;
};

export type TicketObject = {
  id: number;
  property_id: number;
  tenant_id: number;
  subject: string;
  message: string;
  completed: boolean;
  raised_by: string;
  first_name: string;
  last_name: string;
};

const TicketBoard = ({ completed }: CompletedProp) => {
  const [tickets, setTickets] = useState([]);
  // const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    async function fetchTickets() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets/landlords/1`
      );
      const data = await res.json();
      setTickets(data.payload);
    }
    fetchTickets();
  }, []);

  console.log(tickets);
  return (
    <div className="gap-3 overflow-y-scroll w-full flex flex-col items-center h-[60vh] text-black">
      {/* Map over tickets array, rendering each ticket */}
      {tickets.map((ticket: TicketObject) => {
        // async function getLastMessage(id: number) {
        //   let res = await fetch(`http://localhost:3001/api/messages/tickets/${id}`)
        //   let data = await res.json();
        //   let messageArrLength = await data.payload.length;
        //   let lastMessageObj = await data.payload[messageArrLength - 1];
        //   return lastMessageObj;
        // }

        // async function getLastMessageText(id: number) {
        //   let lastMessageObj = await getLastMessage(id);
        //   let lastMessageText = await lastMessageObj.message;
        //   return lastMessageText;
        // }

        // function callGetLastMessageText(id: number) {
        //   let lastMessageText = getLastMessageText(id);
        //   return lastMessageText;
        // }

        // let lastMessageText = callGetLastMessageText(ticket.id);

        return ticket.completed === completed ? (
          <Ticket
            key={ticket.id}
            id={ticket.id}
            first_name={ticket.first_name}
            last_name={ticket.last_name}
            property_id={ticket.property_id}
            tenant_id={ticket.tenant_id}
            subject={ticket.subject}
            message={ticket.message}
            raised_by={ticket.raised_by}
            completed={ticket.completed}
            // lastMessage={lastMessageText}
          />
        ) : null;
      })}
    </div>
  );
};

export default TicketBoard;
