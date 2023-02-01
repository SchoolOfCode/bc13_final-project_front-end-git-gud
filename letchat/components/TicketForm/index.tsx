import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { data } from "cypress/types/jquery";

const TicketForm = () => {
  const { user } = useAuth();

  const [newTicketId, setNewTicketId] = useState<string>("");

  const [ticket, setTicket] = useState({
    property_id: "",
    subject: "",
    message: "",
    landlord_id: 1,
    completed: false,
    raised_by: user?.role,
    tenant_id: 1,
  });

  async function postNewTicket(ticket: {
    property_id: string;
    subject: string;
    message: string;
    landlord_id: number;
    completed: boolean;
    raised_by: string;
    tenant_id: number;
  }) {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewTicketId(data.payload.id);
      });
  }

  async function postNewMessage(newTicketId: string, message: string) {
    console.log(newTicketId, message);
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/messages/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ticket_id: newTicketId,
        user_id: 1,
        user_role: user?.role,
        message: message,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error sending message");
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault(); // prevent page refresh
    postNewTicket(ticket);
    postNewMessage(newTicketId, ticket.message);
  }

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  }
  return (
    <form className="flex flex-col rounded-lg p-6 shadow-lg lg:flex-grow">
      <div className="form-group mb-6">
        <input
          name="property_id"
          onChange={handleChange}
          type="text"
          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          id="exampleInput7"
          placeholder="Property Number"
        />
      </div>
      <div className="form-group mb-6">
        <input
          name="subject"
          onChange={handleChange}
          type="email"
          className="form-control m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          id="exampleInput8"
          placeholder="Subject"
        />
      </div>
      <div className="form-group mb-6">
        <textarea
          name="message"
          onChange={handleChange}
          className="
        form-control
        m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
          id="exampleFormControlTextarea13"
          rows={3}
          placeholder="Message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="
      w-full
      rounded
      bg-light-primary
      px-6
      py-2.5
      text-xs
      font-medium
      uppercase
      leading-tight
      text-white
      shadow-md
      transition duration-150 ease-in-out
      hover:bg-light-primary hover:opacity-50 hover:shadow-lg focus:bg-light-primary
      focus:shadow-lg focus:outline-none
      focus:ring-0
      active:bg-light-primary
      active:shadow-lg"
        onClick={handleClick}
      >
        Send
      </button>
    </form>
  );
};

export default TicketForm;
