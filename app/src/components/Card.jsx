import {Link} from "react-router-dom";
import TicketQuantityStatus from "./TicketQuantityStatus";
import ArrowIcon from "../assets/arrow-forward.svg";

const Card = ({props}) => {

    const data = props;
  const online = data.venue_name === "ONLINE"
  const image = data.image??data.artist_image;
  const startTime = new Date(data.event_start).toString().substring(0, 21)

    return (
        <>
            <div className="card">
                <div className="header">
          <img src={image} alt={data.artist_name} />
                </div>
                <div className="text">
                    <h1 className="title">{data["artist_name"]}</h1>

                    {data["tickets_left"] >= 0 && (
                        <span>
              Tickets available:
              <TicketQuantityStatus quantity={data["tickets_left"]}/>
            </span>
                    )}
          {online && (
            <p className="info">Livestream, {startTime}</p>
                    )}
          {!online && (
                        <p className="info">
              Live at {data.venue_name}, {startTime}
                        </p>
                    )}
                </div>
                <Link to="/" className="btn">
                    <img className="arrow-icon" src={ArrowIcon} alt={'--->'}/>
                </Link>
            </div>
            <span className="line-break"></span>
        </>
    );
};

export default Card;
