import { useRouter } from "next/router";

import { ChangeEvent, useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

type messageData = {
  id: string;
  user_id: string;
  ticket_id: number;
  user_role: string;
  message: string;
  time: string;
  date: string;
};

export default function Messages() {
  const { user } = useAuth();

  const [input, setInput] = useState(""); // input state
  const [messages, setMessages] = useState<messageData[]>([]); // messages array state
  const [newMessage, setNewMessage] = useState(""); // new message
  const router = useRouter(); // get router object
  const { id } = router.query; // get id from router object

  type newMessageObject = {
    ticket_id: string | string[] | undefined;
    user_id: number;
    user_role: string;
    message: string;
  };

  function callFetchMessages() {
    fetchMessages();
  }

  const fetchMessages = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/messages/tickets/${id}`
    );
    const data = await res.json();
    setMessages(data.payload);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/messages/tickets/${id}`
      );
      const data = await res.json();
      setMessages(data.payload);
    };
    function callFetchMessages() {
      fetchMessages();
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
      ticket_id: id, // get ticketId from router object
      user_id: 1,
      user_role: user?.role,
      message: input,
    };

    postNewMessage(newMessage);
    // add new message
    setNewMessage(newMessage.message);
    callFetchMessages();
    // clear input
    setInput("");
  };

  // post new message to database
  const postNewMessage = async (newMessage: newMessageObject) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/messages/`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      }
    );
    const data = await res.json();
  };

  return (
    <div className="mx-auto w-4/5 rounded-3xl border p-8 drop-shadow-md backdrop-blur-md">
      <a href="/jobboard">
        <span className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 hover:text-light-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>{" "}
          <p className="hover:text-light-primary">Back</p>
        </span>
      </a>
      <h2 className="mb-10 text-center text-black">Ticket ID: {id}</h2>
      {/* Map over messages array, rendering each msg based on user_role */}
      <div className="flex max-h-[35vh] flex-col gap-1 overflow-y-scroll p-6">
        {messages.map((message, index) => {
          // if message user_role is tenant, render chat bubble for tenant
          if (user?.role === message.user_role) {
            return (
              <div key={message.id}>
                {index === 0 || messages[index - 1].date !== message.date ? (
                  <span className="flex justify-center">
                    <p className="w-fit rounded-full bg-light-secondary px-2 py-1 text-center text-xs">
                      {message.date}
                    </p>
                  </span>
                ) : null}
                <div className="chat chat-start flex flex-col" key={message.id}>
                  {index === 0 ||
                  messages[index - 1].user_role === user?.role ? (
                    <p className="msg-info">{message.user_id}</p>
                  ) : null}
                  <div className="chat-bubble bg-light-primary text-white">
                    {message.message}
                  </div>
                  <p className="msg-info">{message.time.slice(0, 5)}</p>
                </div>
              </div>
            );
            // if message user_role is landlord, render chat bubble for landlord
          } else {
            return (
              <div key={message.id}>
                {index === 0 || messages[index - 1].date !== message.date ? (
                  <span className="flex justify-center">
                    <p className="w-fit rounded-full bg-light-secondary px-2 py-1 text-center text-xs">
                      {message.date}
                    </p>
                  </span>
                ) : null}

                <div className="chat chat-end flex flex-col" key={message.id}>
                  {index === 0 ||
                  messages[index - 1].user_role === message.user_role ? (
                    <p className="msg-info">{message.user_id}</p>
                  ) : null}

                  <div
                    className="chat-bubble bg-gray-200
               text-black"
                  >
                    {message.message}
                  </div>
                  <p className="msg-info">{message.time.slice(0, 5)}</p>
                </div>
              </div>
            );
          }
        })}{" "}
      </div>
      <div className="mt-2 flex flex-row">
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input-primary input w-full"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={input}
        />
        <button
          onClick={handleClick}
          className="btn bg-light-primary text-white hover:bg-light-primary hover:text-black hover:opacity-80"
        >
          Send
        </button>
      </div>
    </div>
  );
}
