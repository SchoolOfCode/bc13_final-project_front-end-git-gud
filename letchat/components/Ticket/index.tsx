import Image from "next/image";
import avatar from "../../public/assets/images/img_avatar.png";
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
          <article className="flex flex-col max-w-lg m-2 shadow-lg bg-[#F0C8C2] rounded-2xl">
            <header className="flex flex-row justify-between p-2 bg-light-hot rounded-t-2xl">
              <div id="ticket-author" className="flex flex-row align-center">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <p className="leading-10 ml-2">{ticket.name}</p>
              </div>
              <div
                id="ticket-info"
                className="flex flex-col text-right justify-right"
              >
                <h5>Ticket #{ticket.id}</h5>
                <h4>Subject: {ticket.subject}</h4>
              </div>
            </header>
            <main className="p-2">
              <div>
                <p>{ticket.lastMessage}</p>
              </div>
              <button
                className="bg-light-hot rounded-lg px-2 py-1 mt-2 float-right"
                // onClick={() => {
                //   openTicket(ticket.id);
                // }}
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
