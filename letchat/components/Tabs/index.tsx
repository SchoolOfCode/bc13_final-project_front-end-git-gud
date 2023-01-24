import { useState } from "react";
import TicketBoard from "../TicketBoard";
import TicketForm from "../TicketForm";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  // const [numTickets, setNumTickets] = useState();

  return (
    <>
      <ul className="flex mb-0 list-none pt-3 pb-4 flex-row" role="tablist">
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 1 ? "text-white bg-light-secondary" : "bg-white")
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
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 2 ? "text-white bg-light-secondary" : "bg-white")
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
        <li className="-mb-px mr-2 last:mr-0 w-[5vw] text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 3 ? "text-white bg-light-secondary" : "bg-white")
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
      <div className="relative flex flex-col break-words bg-white mb-6 shadow-lg rounded">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <TicketBoard completed={false} />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <TicketBoard completed={true} />
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <TicketForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
