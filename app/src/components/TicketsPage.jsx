import useFetch from "../hooks/useFetch";
import Ticket from "./Tickets";

function TicketsPage() {
    const { error, isPending, data: concerts } = useFetch("/data/concert_details");

    console.log(concerts);

    return (
        <>
            <div className="container">
                <div className="card-container">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {concerts &&
                        concerts.map((ticket) => <Ticket key={ticket} props={ticket} />)}
                </div>
            </div>
        </>
    );
}
export default TicketsPage;
