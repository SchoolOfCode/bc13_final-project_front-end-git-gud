
import Image from "next/image";
import avatar from "../../public/assets/images/img_avatar.png";
import Link from "next/link";
import Toggle from "../Toggle";
import tickets from "../../pages/api/hello";

type TicketObjectProps = {
  id: number;
  key: number;
  property_id: number;
  tenant_id: number;
  request: string;
  completed: boolean;
  raised_by: string;
  first_name: string;
  last_name: string;
  // lastMessageText: promise<any>;
};

const Ticket = (ticket: TicketObjectProps) => {
  function handleClick(e: any) {
    // when a toggle is clicked, I want to send a patch request
    // to the database to toggle the completed status of the row with the same id
    let ticketIDText =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName(
        "h5"
      )[0].innerText;
    let ticketID = Number(ticketIDText.match(/[0-9]/g));
    console.log(ticketID);
  }


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
          <Image src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <p className="leading-10 ml-2">
            {ticket.first_name} {ticket.last_name}
          </p>
        </div>
        {/* Ticket meta/info */}
        <div
          id="ticket-info"
          className="flex flex-col text-right justify-right"
        >
          <h5>Ticket #{ticket.id}</h5>
        </div>
      </header>
      {/* Ticket body */}
      <main className="p-2">
        {/* <div>{ticket.lastMessage}</div> */}
        {/* Ticket footer/read more button */}
        <Link href={`/jobboard/${ticket.id}`}>
          {" "}
          {/* Link to ticket messages page */}
        <div>
          <h3 className="font-bold">{ticket.request}</h3>
        </div>
          <button className="bg-light-hot rounded-lg px-2 py-1 mt-2 float-right">
            Read more
          </button>
        </Link>
        <Toggle completed={ticket.completed} handleClick={handleClick} />
      </main>
    </article>
  );
};
export default Ticket;

