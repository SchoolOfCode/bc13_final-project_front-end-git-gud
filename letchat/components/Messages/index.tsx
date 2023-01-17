import { useRouter } from "next/router";
import messageData from "../../data/messageData";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
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
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

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
    <div className="w-4/5 mx-auto h-full">
      <h2 className="mb-10 text-center text-black">Ticket ID: {id}</h2>
      {/* Map over messages array, rendering each msg based on role */}
      <div className="flex flex-col gap-1 overflow-y-scroll h-[60vh] p-6">
        {conversation.map((message, index) => {
          // if message role is tenant, render chat bubble for tenant
          console.log(conversation[index].user, message.user);
          if (message.role === "tenant") {
            return (
              <div className="chat chat-start flex flex-col" key={message.id}>
                
                  <p className="msg-info">{message.user}</p>
                
                <div className="chat-bubble bg-light-primary text-white">
                  {message.message}
                </div>
                <p className="msg-info">
                  {message.time}, {message.date}
                </p>
              </div>
            );
            // if message role is landlord, render chat bubble for landlord
          } else {
            return (
              <div className="chat chat-end flex flex-col" key={message.id}>
                <p className="msg-info">{message.user}</p>
                <div
                  className="chat-bubble bg-gray-200
               text-black"
                >
                  {message.message}
                </div>
                <p className="msg-info">
                  {message.time}, {message.date}
                </p>
              </div>
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
