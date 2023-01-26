import { useState } from "react";
import TicketBoard from "../TicketBoard";
import TicketForm from "../TicketForm";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  



  return (
    <>
      <ul className="flex list-none ml-1 p-4 flex-wrap gap-4 " role="tablist">
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-2 py-3 shadow-lg rounded block leading-normal " +
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
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-2 py-3 shadow-lg rounded block leading-normal " +
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
        <li className="-mb-px mr-2 last:mr-0  text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
      <div className="relative flex flex-col mb-6 shadow-lg rounded">
        <div className="lg:px-4 py-5">
          <div className="">
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
