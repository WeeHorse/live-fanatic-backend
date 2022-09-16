import useFetch from "../hooks/useFetch";
import Ticket from "./Tickets";
import { useEffect } from 'react';

function TicketsPage() {
    const { error, isPending, data: tickets } = useFetch("/data/user_tickets_details");

    console.log(tickets);

    useEffect(() => {
        async function load() {
            let rawResponse = await fetch('/data/login')
            if (rawResponse.ok) {
                let response = await rawResponse.json();
            }
        }
        load()
    }, [])

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
