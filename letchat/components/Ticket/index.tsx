import Image from "next/image";
import avatar from "./img/avatar.png";
import tickets from "../../data/ticketData";

type ticket = {
  id: number;
  name: string;
  subject: string;
  date: string;
  time: string;
  lastMessage: string;
};

const Ticket = (openTicket: { openTicket: (id: number) => void }) => {
  return (
    <>
      {tickets.map((ticket: ticket) => {
        return (
          <article>
            <header>
              <div id="ticket-author">
                <Image src={avatar} alt="avatar" />
                <p>{ticket.name}</p>
              </div>
              <div id="ticket-info">
                <h5>Ticket #{ticket.id}</h5>
                <h4>Subject: {ticket.subject}</h4>
              </div>
            </header>
            <main>
              <div>
                <p>{ticket.lastMessage}</p>
              </div>
              <button
                onClick={() => {
                  openTicket(ticket.id);
                }}
              >
                Read more
              </button>
            </main>
          </article>
        );
      })}
    </>
  );
};
export default Ticket;
