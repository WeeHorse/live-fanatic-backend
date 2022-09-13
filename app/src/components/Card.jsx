import { Link } from "react-router-dom";
import TicketQuantityStatus from "./TicketQuantityStatus";
import ArrowIcon from "../assets/arrow-forward.svg";
const Card = ({ props }) => {
  const data = props;
  return (
    <>
      <div className="card">
        <div className="header">
          <img src={data.artist_image} alt={data.artist_name} />
        </div>
        <div className="text">
          <h1 className="title">{data.artist_name}</h1>

          {data.tickets_left >= 0 && (
            <span>
              Tickets available:
              <TicketQuantityStatus quantity={data.tickets_left} />
            </span>
          )}
          {data.venue_name == "ONLINE" && (
            <p className="info">Livestream, {data["time-begin"]}</p>
          )}
          {data.venue_name != "ONLINE" && (
            <p className="info">
              Live at {data.venue_name}, {data["time-begin"]}
            </p>
          )}
        </div>
        <Link to="/" className="btn">
          <img className="arrow-icon" src={ArrowIcon} />
        </Link>
      </div>
    </>
  );
};

export default Card;
