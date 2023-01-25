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
  const [clicked, setClicked] = useState(false);

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

  async function handleClick(e: any) {
    // when a toggle is clicked, I want to send a patch request
    // to the database to toggle the completed status of the row with the same id
    // as the ticket that was clicked
    // then I want to update the tickets array with the new data
    // console.log(e.target.checked)
      let res = await fetch( `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets/landlords/1`, {  
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          completed: e.target.checked,
          id: e.target.id
        })
      })
      let data = await res.json();


    // let ticketIDText =
    //   e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName(
    //     "h5"
    //   )[0].innerText;
    // // console.log(ticketIDText);
    // let ticketID = Number(ticketIDText.match(/[0-9]/g));
    // console.log(ticketID);
  }

  // async function handleClick() {
  // change completed toggle for ticket that has been clicked

  // send patch request to database
  // update tickets array

  // }

  // console.log(tickets);
  return (
    <div className="gap-3 overflow-y-scroll max-h-[60vh] md:max-h-[70vh] grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 text-black p-2">
      {/* Map over tickets array, rendering each ticket */}
      {tickets.map((ticket: TicketObject) => {
        // async function getLastMessage(id: number) {
        //   let res = await fetch(
        //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets/${id}`
        //   );
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
            handleClick={handleClick}
          />
        ) : null;
      })}
    </div>
  );
};

export default TicketBoard;
