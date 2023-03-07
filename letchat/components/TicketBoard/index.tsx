import { useState, useEffect } from "react";

import Ticket from "../Ticket";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [numLoads, setNumLoads] = useState<number>(0);

  async function fetchTickets() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets/landlords/1`
      );
      const data = await res.json();
      setTickets(data.payload);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTickets();
    setNumLoads(1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTickets();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function handleClick(ticketId: number, newCompleted: boolean) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets/${ticketId}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed: newCompleted,
            id: ticketId,
          }),
        }
      );
      const data = await res.json();
      setTickets((prevTickets) =>
        prevTickets.map((ticket) =>
          ticket.id === ticketId
            ? { ...ticket, completed: newCompleted }
            : ticket
        )
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="grid max-h-[60vh] grid-cols-1 gap-3 overflow-y-scroll p-2 text-black md:max-h-[70vh] xl:grid-cols-2 2xl:grid-cols-3">
      {isLoading && numLoads < 1 ? (
        <div className="flex flex-col min-w-[75vw] justify-center items-center">
          <p>Loading...</p>
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
      ) : (
        tickets.map((ticket: TicketObject) => {
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
              handleClick={(e: any) =>
                handleClick(ticket.id, e.target.checked)
              }
            />
          ) : null;
        })
      )}
    </div>
  );
};

export default TicketBoard;
