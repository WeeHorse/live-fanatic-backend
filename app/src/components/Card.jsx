import { Link } from "react-router-dom";
import TicketQuantityStatus from "./TicketQuantityStatus";
import ArrowIcon from "../assets/arrow-forward.svg";
const Card = ({ concert }) => {
  const online = concert.venue_name === "ONLINE";
  const image = concert.concert_image ?? concert.artist_image;
  const startTime = new Date(concert.event_start).toString().substring(0, 21);

  return (
    <>
      <div className="card">
        <div className="header">
          <img src={image} alt={concert.artist_name} />
        </div>
        <div className="text">
          <span className="datetime">{startTime}</span>
          <h2 className="title">{concert.artist_name}</h2>

          {concert.tickets_left <= -1 && (
            <div className="ticket-content">
              <span className="ticket-content__text-online">Livestream</span>
            </div>
          )}
          {!online && <p className="info">Live at {concert.venue_name}</p>}
          {concert.tickets_left >= 0 && (
            <div className="ticket-content">
              <span className="ticket-content__text">Tickets available</span>
              <TicketQuantityStatus quantity={concert.tickets_left} />
            </div>
          )}
        </div>
        <button className="btn">
          <img className="arrow-icon" src={ArrowIcon} />
        </button>
      </div>
      <span className="line-break"></span>
    </>
  );
};

export default Card;
