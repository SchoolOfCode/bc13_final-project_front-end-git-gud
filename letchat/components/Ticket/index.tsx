import Image from "next/image";
import Link from "next/link";
import Toggle from "../Toggle";
import avatar from "../../public/assets/images/img_avatar.png";

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
};

const Ticket = (ticket: TicketObjectProps) => {
  return (
    // Ticket
    <article
      key={ticket.id}
      className=" glass flex h-full flex-col rounded-2xl shadow-lg shadow-slate-300 hover:shadow-sm hover:shadow-light-tertiary md:w-full"
    >
      <header className="flex flex-row justify-between items-center p-2 bg-light-primary bg-opacity-80 rounded-t-2xl">
        <div id="ticket-author" className="flex flex-row align-center">

          {/* Avatar */}
          <Image src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
          <p className="ml-2 leading-10 text-white">
            {ticket.first_name} {ticket.last_name}
          </p>
        </div>
        {/* Ticket meta/info */}
        <div
          id="ticket-info"
          className="justify-right flex-col items-center text-right"
        >
          <p className="font-bold text-white">{ticket.subject}</p>
        </div>
      </header>
      <div className="w-full p-2">
        <div className="mb-5 flex items-center justify-between">
          <Toggle
            completed={ticket.completed}
            handleClick={ticket.handleClick}
          />
          {/* Link to ticket messages page */}

          <Link
            className="flex h-full items-center rounded-lg bg-light-tertiary bg-opacity-50 px-2 py-1"
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
