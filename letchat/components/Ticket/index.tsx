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
  subject: string;
  message: string;
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
    console.log(ticketIDText);
    let ticketID = Number(ticketIDText.match(/[0-9]/g));
    console.log(ticketID);
  }

  // async function handleClick(id:number) {
  //   console.log(id);
  // }

  return (
    // Ticket
    <article
      key={ticket.id}
      className=" flex flex-col glass h-full md:w-full shadow-lg rounded-2xl"
    >
      <header className="flex flex-row justify-between p-2 bg-light-primary rounded-t-2xl">
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
          <Toggle completed={ticket.completed} handleClick={handleClick} />
           {/* Link to ticket messages page */}
          <Link
            className="flex items-center bg-light-tertiary  rounded-lg px-2 py-1 h-full"
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
