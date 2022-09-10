import TicketQuantityStatus from "./TicketQuantityStatus";

function TicketsPage() {
  return (
    <>
      <h1>TICKETS PAGE</h1>

      {/* Examples of status symbols */}
      <TicketQuantityStatus quantity={41} />
      <TicketQuantityStatus quantity={15} />
      <TicketQuantityStatus quantity={0} />
    </>
  );
}

export default TicketsPage;
