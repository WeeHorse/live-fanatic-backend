import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useConcertData } from "../context/EventContext";
function EventDetails() {
  const { data, getEvents } = useConcertData();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => getEvents(), []);

  const event = data?.find((c) => {
    return c.concert_id === parseInt(id);
  });

  if (!event) {
    return <></>;
  }

  const handlePurchase = () => {
    const abortCont = new AbortController();

    const payload = {
      cancelUrl: window.location.href,
      successUrl: "http://localhost:5173/success",
      line_items: [
        {
          price_data: {
            currency: "sek",
            product_data: {
              name: event.artist_name,
            },
            unit_amount: event.ticket_price * 100,
          },
          quantity: quantity,
        },
      ],
    };

    fetch("/data/checkout", {
      signal: abortCont.signal,
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        window.location.href = data.url;
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          abortCont.abort();
        }
      });
  };

  return (
    <>
      <h1>Event details</h1>
      <h2>{event.artist_name}</h2>
      {event.venue_name !== "ONLINE" && (
        <>
          <button
            value={quantity}
            onClick={(e) => {
              setQuantity((quantity) => quantity - 1);
            }}
            disabled={quantity <= 1 || !quantity}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min={1}
            max={event.tickets_left}
          />
          <button
            value={quantity}
            onClick={(e) => setQuantity((quantity) => quantity + 1)}
            disabled={quantity === event.tickets_left}
          >
            +
          </button>
          <button
            onClick={handlePurchase}
            disabled={quantity < 1 || quantity > event.tickets_left}
          >
            Buy ticket
          </button>
        </>
      )}
    </>
  );
}
export default EventDetails;
