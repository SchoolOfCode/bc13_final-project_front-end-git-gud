import Ticket from "../Ticket";

const TicketBoard = () => {
  function openTicket(id: number) {
    console.log("Open ticket with id: " + id);
  }

  return (
    <section>
      <Ticket openTicket={openTicket} />
    </section>
  );
};

export default TicketBoard;
