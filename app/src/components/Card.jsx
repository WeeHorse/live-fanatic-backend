import { Link } from "react-router-dom";
import TicketQuantityStatus from "./TicketQuantityStatus";
import ArrowIcon from "../assets/arrow-forward.svg";

const Card = ({ concert }) => {
  return (
    <>
      <div className="card">
        <div className="header">
          <img src={concert.artist_image} alt={concert.artist_name} />
        </div>
        <div className="text">
          <h1 className="title">{concert.artist_name}</h1>

          {concert.tickets_left >= 0 && (
            <span className="ticket-content">
              Tickets available:
              <TicketQuantityStatus quantity={concert.tickets_left} />
            </span>
          )}
          {concert.venue_name == "ONLINE" && (
            <p className="info">Livestream, {concert["time-begin"]}</p>
          )}
          {concert.venue_name != "ONLINE" && (
            <p className="info">
              Live at {concert.venue_name}, {concert["time-begin"]}
            </p>
          )}
        </div>
        <Link
          to={{ pathname: `/event/${concert.concert_id}` }}
          state={{ concert: concert }}
          className="btn"
        >
          <img className="arrow-icon" src={ArrowIcon} />
        </Link>
      </div>
      <span className="line-break"></span>
      <style jsx="true">
        {`
          .quantity-status {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Card;
