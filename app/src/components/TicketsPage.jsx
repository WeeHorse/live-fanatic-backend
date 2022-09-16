import useFetch from "../hooks/useFetch";
import Ticket from "./Tickets";
import { useEffect } from 'react';

function TicketsPage() {
    const { error, isPending, data: tickets } = useFetch("/data/user_tickets_details");

    console.log(tickets);

    useEffect(() => {
        async function load() {
            let rawResponse = await fetch('/data/login')
            console.log(rawResponse.status.type);
            if (rawResponse.status === 401) {
                alert("Sign in to display your ticket(s)!");
                window.location.replace("http://127.0.0.1:5173/");
            } if (rawResponse.ok) {
                let response = await rawResponse.json();
                setUserId(response.id)
            }
        }
        load()
    }, [])

    return (
        <>
            <h1 className="ticket-header">My tickets</h1>
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
