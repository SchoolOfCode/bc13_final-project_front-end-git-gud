import { useRouter } from "next/router";
import messages from "../../data/messageData";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Messages() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState(messages);
  const router = useRouter();
  const { id } = router.query;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {
    console.log(input);

    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const newMessage = {
      id: uuidv4(),
      ticketId: Number(id),
      user: "jason chalangary",
      role: "landlord",
      message: input,
      date: date,
      time: time,
    };
    setChat([...chat, newMessage]);
    console.log(chat);

    setInput("");
  };

  const conversation = chat.filter((message) => message.ticketId == Number(id));

  return (
    <div className="w-4/5 m-auto">
      <h1 className="mb-10 text-center text-black">Ticket ID: {id}</h1>
      {conversation.map((message) => {
        if (message.role === "tenant") {
          return (
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
      ;
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full "
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
