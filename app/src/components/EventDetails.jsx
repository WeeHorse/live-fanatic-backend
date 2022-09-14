import { useLocation } from "react-router-dom";
function EventDetails(props) {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <>
      <h1>Event details</h1>
      <h2>{data.artist_name}</h2>
    </>
  );
}
export default EventDetails;
