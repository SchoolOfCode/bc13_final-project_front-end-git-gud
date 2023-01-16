import { useRouter } from "next/router";
import messages from "../../data/messageData";

export default function Messages() {
  type chat = {
    id: number;
    user: string;
    role: string;
    message: string;
    date: string;
    time: string;
  }[];
  const router = useRouter();
  const { id } = router.query;

  // const conversation = messages.filter(
  //   (message) => message.ticketId == Number(id)
  // );
  // const chat = conversation[0].chat;

  return (
    <>
      <h1 className="mb-10 text-center">Ticket ID: {id}</h1>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">You underestimate my power!</div>
      </div>
    </>
  );
}
