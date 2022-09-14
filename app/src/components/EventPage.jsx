import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

export const ConcertContext = createContext();

export const useConcertData = () => useContext(ConcertContext);

function EventPage() {
  const {
    error,
    isPending,
    data: concerts,
  } = useFetch("/data/concert_details");

  return (
    <ConcertContext.Provider value={concerts}>
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
    </ConcertContext.Provider>
  );
}
export default EventPage;

