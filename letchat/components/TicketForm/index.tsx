import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const TicketForm = () => {
  const { user } = useAuth();

  const [ticket, setTicket] = useState({
    property_id: "",
    subject: "",
    message: "",
    landlord_id: 1,
    completed: false,
    raised_by: user?.role,
    tenant_id: 1,
  });

  type ticketObject = {
    property_id: string;
    subject: string;
    message: string;
    landlord_id: number;
    completed: boolean;
    raised_by: string;
    tenant_id: number;
  };
  
  // return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets/`, {
  

  const form = document.querySelector('form[name="post"]') as HTMLFormElement;

  const postForm = (body: object) => {
      return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    };
    
  const handleClear = () => {
    form.reset();
  };

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(form);
      const body = {...Object.fromEntries(formData.entries()), landlord_id: 1, completed: false, raised_by: user?.role, tenant_id: 1}
      const response = await postForm(body);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      handleClear();
    }
  }

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form
        name="post"
        className="flex flex-col rounded-lg p-6 shadow-lg lg:flex-grow"
        onSubmit={handleSubmit}
      >
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
            type="text"
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
      
        >
          Send
        </button>
      </form>
    </>
  );
};

export default TicketForm;
