import { useRouter } from "next/router";
import messageData from "../../data/messageData";
import { ChangeEvent, useEffect, useState } from "react";

export default function Messages() {
  const [input, setInput] = useState(""); // input state
  const [messages, setMessages] = useState(messageData); // messages array state
  const [newMessage, setNewMessage] = useState(""); // new message
  const router = useRouter(); // get router object
  const { id } = router.query; // get id from router object

  type newMessageObject = {
    ticket_id: number;
    user_id: number;
    role: string;
    message: string;
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch(
        `http://localhost:3001/api/messages/tickets/${id}`
      );
      const data = await res.json();
      setMessages(data.payload);
    };
    function callFetchMessages() {
      fetchMessages();
      console.log(messages);
    }
    callFetchMessages();
  }, [newMessage]);

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
    if (!input) return; // do nothing if input is empty

    // create new message object
    const newMessage = {
      ticket_id: Number(id), // get ticketId from router object
      user_id: 1,
      role: "landlord",
      message: input,
    };
    postNewMessage(newMessage);
    // add new message
    setNewMessage(newMessage.message);
    // clear input
    setInput("");
  };

  const postNewMessage = async (newMessage: newMessageObject) => {
    const res = await fetch(`http://localhost:3001/api/messages/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });
    const data = await res.json()
  };

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
        {messages.map((message, index) => {
          // if message role is tenant, render chat bubble for tenant
          if (message.role === "tenant") {
            return (
              <>
                {index === 0 || messages[index - 1].date !== message.date ? (
                  <span className="flex justify-center">
                    <p className="px-2 py-1 rounded-full text-center text-xs bg-light-secondary w-fit">
                      {message.date}
                    </p>
                  </span>
                ) : null}
                <div className="chat chat-start flex flex-col" key={message.id}>
                  {index === 0 || messages[index - 1].user !== message.user ? (
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
                {index === 0 || messages[index - 1].date !== message.date ? (
                  <span className="flex justify-center">
                    <p className="px-2 py-1 rounded-full text-center text-xs bg-light-secondary w-fit">
                      {message.date}
                    </p>
                  </span>
                ) : null}

                <div className="chat chat-end flex flex-col" key={message.id}>
                  {index === 0 || messages[index - 1].user !== message.user ? (
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
