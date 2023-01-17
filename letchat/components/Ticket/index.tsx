import Image from "next/image";
import avatar from "../../public/assets/images/img_avatar.png";
import Link from "next/link";

// Ticket interface
type TicketProps = {
  id: number;
  name?: string;
  subject?: string;
  date?: string;
  time?: string;
  lastMessage?: string;
  completed?: boolean;
};

const Ticket = (ticket: TicketProps) => {

  return (
    // Ticket
    <article
      key={ticket.id}
      className="h-[15rem] flex flex-col w-full p-2 shadow-lg bg-[#F0C8C2] rounded-2xl"
    >
      {/* Ticket header */}
      <header className="flex flex-row justify-between p-2 bg-light-hot rounded-t-2xl">
        <div id="ticket-author" className="flex flex-row align-center">
          {/* Avatar */}
          <Image
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <p className="leading-10 ml-2">{ticket.name}</p>
        </div>
        {/* Ticket meta/info */}
        <div
          id="ticket-info"
          className="flex flex-col text-right justify-right"
        >
          <h5>Ticket #{ticket.id}</h5>
          <h4>Subject: {ticket.subject}</h4>
        </div>
      </header>
      {/* Ticket body */}
      <main className="p-2">
        <div>
          <p>{ticket.lastMessage}</p>
        </div>
        {/* Ticket footer/read more button */}
        <Link href={`/jobboard/${ticket.id}`}>
          {" "}
          {/* Link to ticket messages page */}
          <button className="bg-light-hot rounded-lg px-2 py-1 mt-2 float-right">
            Read more
          </button>
        </Link>
      </main>
    </article>
  );
};
export default Ticket;
