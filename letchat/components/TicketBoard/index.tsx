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
  const [tickets, setTickets] = useState<TicketObject[]>([]);


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

  async function handleClick(ticketId: number, newCompleted: boolean) {
   
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets/${ticketId}`, {  
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          completed: newCompleted,
          id: ticketId
        })
      });
      const data = await res.json()
      console.log(data);
      console.log('Ticket updated:' + ticketId);
      setTickets(prevTickets => prevTickets.map(ticket => 
        ticket.id === ticketId ? {...ticket, completed: newCompleted} : ticket
      ));
    } catch (err) {
      console.error(err);
    } 
  }

  return (
    <div className="gap-3 overflow-y-scroll max-h-[60vh] md:max-h-[70vh] grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 text-black p-2">
      {/* Map over tickets array, rendering each ticket */}
      {tickets.map((ticket: TicketObject) => {
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
            handleClick={(e: any) => handleClick(ticket.id, e.target.checked)}
          />
        ) : null;
      })}
    </div>
  );
};

export default TicketBoard;
