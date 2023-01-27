import { useState, useEffect } from "react";
import TicketBoard from "../TicketBoard";
import TicketForm from "../TicketForm";

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

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  const [numTicketsAdded, setNumTicketsAdded] = useState(0);
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
  }, [numTicketsAdded]);


  const handleNumTicketsAdded = () => {
    setNumTicketsAdded(numTicketsAdded + 1);
  };

  
  

  return (
    <>
      <ul className="ml-1 flex list-none flex-wrap gap-4 p-4 " role="tablist">
        <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
          <a
            className={
              "block rounded px-2 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
              (openTab === 1 ? " bg-light-tertiary bg-opacity-50" : "bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            In Progress
          </a>
        </li>
        <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
          <a
            className={
              "block rounded px-2 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
              (openTab === 2 ? "bg-light-tertiary bg-opacity-50" : "bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            Completed
          </a>
        </li>
        <li className="-mb-px mr-2 text-center  last:mr-0">
          <a
            className={
              "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
              (openTab === 3 ? "bg-light-tertiary bg-opacity-50" : "bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
          >
            +
          </a>
        </li>
      </ul>
      <div className="relative mb-6 flex flex-col rounded shadow-lg">
        <div className="py-5 lg:px-4">
          <div className="">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <TicketBoard completed={false}  />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <TicketBoard completed={true} />
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
            <TicketForm handleNumTicketsAdded={handleNumTicketsAdded} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
