import { useRouter } from "next/router";
import messageData from "../../data/messageData";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Messages() {
  const [input, setInput] = useState(""); // input state
  const [messages, setMessages] = useState(messageData); // messages array state
  const router = useRouter(); // get router object
  const { id } = router.query; // get id from router object

  // handle input change, setting input state to the value of the input field
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // handle keydown event, if key is enter, call handleClick function
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  // create message object and add it to the messages array
  const handleClick = () => {
    console.log(input);
    if (!input) return; // do nothing if input is empty
    const today = new Date();

    // get current date and time and save them in variables
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    let minutes = today.getMinutes().toString();
    if (minutes.length < 2) {
      minutes = "0" + today.getMinutes();
    }

    const time = today.getHours() + ":" + minutes + ":" + today.getSeconds();

    // create new message object
    const newMessage = {
      id: uuidv4(), // generate random id
      ticketId: Number(id), // get ticketId from router object
      user: "Jason Chalangary",
      role: "landlord",
      message: input,
      date: date,
      time: time,
    };
    // add new message to the messages array
    setMessages([...messages, newMessage]);
    // clear input
    setInput("");
  };

  // filter messages array to get messages with the same ticketId as the current ticket
  const conversation = messages.filter(
    (message) => message.ticketId == Number(id)
  );

  // render messages
  return (
    <div className="p-8 w-4/5 mx-auto h-full backdrop-blur-md rounded-3xl drop-shadow-md border">
      <a href="/jobboard">
        <span className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:text-light-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>{" "}
          <p className="hover:text-light-primary">Back</p>
        </span>
      </a>
      <h2 className="mb-10 text-center text-black">Ticket ID: {id}</h2>
      {/* Map over messages array, rendering each msg based on role */}
      <div className="flex flex-col gap-1 overflow-y-scroll h-[60vh] p-6">
        {conversation.map((message, index) => {
          // if message role is tenant, render chat bubble for tenant
          if (message.role === "tenant") {
            return (
              <>
                {index === 0 ||
                conversation[index - 1].date !== message.date ? (
                  <span className="flex justify-center">
                    <p className="px-2 py-1 rounded-full text-center text-xs bg-light-secondary w-fit">
                      {message.date}
                    </p>
                  </span>
                ) : null}
                <div className="chat chat-start flex flex-col" key={message.id}>
                  {index === 0 ||
                  conversation[index - 1].user !== message.user ? (
                    <p className="msg-info">{message.user}</p>
                  ) : null}
                  <div className="chat-bubble bg-light-primary text-white">
                    {message.message}
                  </div>
                  <p className="msg-info">{message.time.slice(0, 5)}</p>
                </div>
              </>
            );
            // if message role is landlord, render chat bubble for landlord
          } else {
            return (
              <>
                {index === 0 ||
                conversation[index - 1].date !== message.date ? (
                  <span className="flex justify-center">
                    <p className="px-2 py-1 rounded-full text-center text-xs bg-light-secondary w-fit">
                      {message.date}
                    </p>
                  </span>
                ) : null}

                <div className="chat chat-end flex flex-col" key={message.id}>
                  {index === 0 ||
                  conversation[index - 1].user !== message.user ? (
                    <p className="msg-info">{message.user}</p>
                  ) : null}

                  <div
                    className="chat-bubble bg-gray-200
               text-black"
                  >
                    {message.message}
                  </div>
                  <p className="msg-info">{message.time.slice(0, 5)}</p>
                </div>
              </>
            );
          }
        })}
      </div>
      <div className="flex flex-row mt-2">
        {/* Input field and send button */}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={input}
        />
        <button
          onClick={handleClick}
          className="btn bg-light-primary hover:bg-light-primary hover:opacity-80 text-white hover:text-black"
        >
          Send
        </button>
      </div>
    </div>
  );
}
