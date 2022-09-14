import { useLocation, useParams } from "react-router-dom";
import { useConcertData } from "./EventPage";
function EventDetails() {
  const data = useConcertData();
  const { id } = useParams();
  console.log(data, id);

  const event = data?.find((c) => {
    return c.concert_id === id;
  });
  console.log(event);
  if (!event) {
    return <></>;
  }
  console.log(id);
  return (
    <>
      <h1>Event details</h1>
      <h2>{event.artist_name}</h2>
    </>
  );
}
export default EventDetails;
