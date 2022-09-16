import useFetch from "../hooks/useFetch";
import Ticket from "./Tickets";

function TicketsPage() {
    const { error, isPending, data: tickets } = useFetch("/data/user_tickets_details");

    console.log(tickets);

    return (
        <>
            <div className="container">
                <div className="card-container">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {tickets &&
                        tickets.map((ticket) => <Ticket key={ticket} props={ticket} />)}
                </div>
            </div>
        </>
    );
}
export default TicketsPage;
