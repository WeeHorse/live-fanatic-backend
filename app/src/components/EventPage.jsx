import useFetch from "../hooks/useFetch";
import Card from "./Card";

function EventPage() {
  // const { error, isPending, data: concerts } = useFetch("/data/concerts");

  return (
    <>
      <div className="container">
        <Card />
        {/* {concerts && concerts.map((concert) => <p> {concert.venue.name}</p>)}
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>} */}

        {/* <Card data={concerts} /> */}
      </div>
    </>
  );
}
export default EventPage;
