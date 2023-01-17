import { useRouter } from "next/router";
import messageData from "../../data/messageData";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Messages() {
  const [input, setInput] = useState(""); // input state
  const [messages, setMessages] = useState(messageData); // messages state
  const router = useRouter(); // router to get id from url
  const { id } = router.query; // get id from url

  // handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // set input to the value of the input field
  };

  // handle keydown
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // if the key pressed is enter
      handleClick(); // call handleClick
    }
  };

  // handle click
  const handleClick = () => {
    // get current date and time and save to variables
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    // create new message object
    const newMessage = {
      id: uuidv4(),
      ticketId: Number(id),
      user: "jason chalangary",
      role: "landlord",
      message: input,
      date: date,
      time: time,
    };
    // add new message to chat
    setMessages([...messages, newMessage]);
    console.log(messages);

    setInput("");
  };

  const conversation = messages.filter(
    (message) => message.ticketId == Number(id)
  );

  return (
    <div className="w-4/5 m-auto">
      <h1 className="mb-10 text-center text-black">Ticket ID: {id}</h1>
      {/* map over messages */}
      {conversation.map((message) => {
        if (message.role === "tenant") {
          // if role is tenant
          return (
            // chat container
            <div className="chat chat-start flex flex-col text-light-primary">
              <p>{message.user}</p>
              <div className="chat-bubble bg-light-primary text-white">
                {message.message}
              </div>
              <p>
                {message.time}, {message.date}
              </p>
            </div>
          );
        } else {
          // if role is landlord
          return (
            <div className="chat chat-end flex flex-col text-light-primary">
              <p>{message.user}</p>
              <div
                className="chat-bubble bg-gray-200
               text-black"
              >
                {message.message}
              </div>
              <p>
                {message.time}, {message.date}
              </p>
            </div>
          );
        }
      })}
      ;{/* input field */}
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full "
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={input}
        />
        {/* send button */}
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
