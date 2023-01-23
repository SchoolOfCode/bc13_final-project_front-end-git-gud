import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const TicketForm = () => {
  const { user } = useAuth();

  console.log(user);

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
      .then((data) => console.log(data));
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault(); // prevent page refresh
    console.log(ticket);
    postNewTicket(ticket);
  }

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  }
  return (
    <div className="p-6 rounded-lg shadow-lg w-screen md:w-0 lg:min-w-[600px]">
      <form className="flex flex-col ">
        <div className="form-group mb-6">
          <input
            name="property_id"
            onChange={handleChange}
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Property Number"
          />
        </div>
        <div className="form-group mb-6">
          <input
            name="subject"
            onChange={handleChange}
            type="email"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
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
      px-6
      py-2.5
      bg-light-primary
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-light-primary hover:shadow-lg hover:opacity-50
      focus:bg-light-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-light-primary active:shadow-lg
      transition
      duration-150
      ease-in-out"
          onClick={handleClick}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
