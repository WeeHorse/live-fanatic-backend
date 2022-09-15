import { Link } from "react-router-dom";
import TicketQuantityStatus from "./TicketQuantityStatus";
import ArrowIcon from "../assets/arrow-forward.svg";
const Card = ({ concert }) => {
  const online = concert.venue_name === "ONLINE"
  const image = concert.concert_image??concert.artist_image;
  const startTime = new Date(concert.event_start).toString().substring(0, 21)

  return (
    <>
      <div className="card">
        <div className="header">
          <img src={image} alt={concert.artist_name} />
        </div>
        <div className="text">
          <h1 className="title">{concert.artist_name}</h1>

          {concert.tickets_left >= 0 && (
            <span className="ticket-content">
              Tickets available:
              <TicketQuantityStatus quantity={concert.tickets_left} className="status" />
            </span>
          )}
          {online && (
            <p className="info">Livestream, {startTime}</p>
          )}
          {!online && (
            <p className="info">
              Live at {concert.venue_name}, {startTime}
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
