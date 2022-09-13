import useFetch from "../hooks/useFetch";
import Card from "./Card";

function EventPage() {
  const {
    error,
    isPending,
    data: concerts,
  } = useFetch("/data/concert_details");

  console.log(concerts);

  return (
    <>
      <div className="container">
        {/* <Card /> */}
        {/* {concerts && concerts.map((concert) => <p> {concert.venue_name}</p>)}
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>} */}

        {concerts && concerts.map((concert) => <Card props={concert} />)}
      </div>
    </>
  );
}
export default EventPage;
