import Card from "./Card";
import { useConcertData } from "../context/EventContext";
import { useEffect } from "react";

function EventPage() {
  const { data: concerts, error, isPending, getEvents } = useConcertData();

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="container">
      <h1>Events</h1>
      <div className="card-container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {concerts &&
          concerts.map((concert) => (
            <Card key={concert.concert_id} concert={concert} />
          ))}
      </div>
    </div>
  );
}
export default EventPage;
