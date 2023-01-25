import Image from "next/image";
import avatar from "../../public/assets/images/img_avatar.png";
import Link from "next/link";
import Toggle from "../Toggle";
import tickets from "../../pages/api/hello";
import { useState } from "react";

type TicketObjectProps = {
  id: number;
  key: number;
  property_id: number;
  tenant_id: number;
  subject: string;
  message: string;
  completed: boolean;
  raised_by: string;
  first_name: string;
  last_name: string;
  handleClick: React.MouseEventHandler<HTMLInputElement>;
  // lastMessageText: promise<any>;
};


const Ticket = (ticket: TicketObjectProps) => {
  
  return (
    // Ticket
    <article
      key={ticket.id}
      className=" flex flex-col glass h-full md:w-full shadow-lg shadow-slate-300 hover:shadow-sm hover:shadow-light-tertiary rounded-2xl"
    >
      <header className="flex flex-row justify-between p-2 bg-light-primary bg-opacity-80 rounded-t-2xl">
        <div id="ticket-author" className="flex flex-row align-center">
          {/* Avatar */}
          <Image src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <p className="leading-10 ml-2 text-white">
            {ticket.first_name} {ticket.last_name}
          </p>
        </div>
        {/* Ticket meta/info */}
        <div
          id="ticket-info"
          className="flex-col items-center text-right justify-right"
        >
          <h5 className="font-bold text-white">{ticket.subject}</h5>
        </div>
      </header>
      <div className="p-2 w-full">
        <div className="flex justify-between items-center mb-5">
          <Toggle completed={ticket.completed} handleClick={ticket.handleClick} />
           {/* Link to ticket messages page */}
           
          <Link
            className="flex items-center bg-light-tertiary bg-opacity-50 rounded-lg px-2 py-1 h-full"
            href={`/jobboard/${ticket.id}`}
          >
            <button>Read More</button>
          </Link>
        </div>
        {/* Ticket body */}
        <p>{ticket.message}</p>
      </div>
    </article>
  );
};
export default Ticket;
