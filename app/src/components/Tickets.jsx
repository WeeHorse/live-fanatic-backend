const Tickets = ({ props }) => {

    const data = props;
    return (
        <>
            <div className="card">
                <div className="text">
                    <div className="header">
                        <img src={data.artist_image} alt={data.artist_name} />
                    </div>
                    <h1 className="title">{data.ticket}</h1>

                    {data.quantity >= 0 && (
                        <span>
                            Quantity:
                            <p>{data.quantity}</p>
                        </span>
                    )}
                    {data.venue_location == "ONLINE" && (
                        <p className="info">Livestream, NO PLATIPUSSY {data.event_start}</p>
                    )}
                    {data.venue_location != "ONLINE" && (
                        <p className="info">
                            Live at {data.venue_location}, {data.event_start}
                        </p>
                    )}
                </div>

            </div>
            <span className="line-break"></span>
        </>
    );
};

export default Tickets;
