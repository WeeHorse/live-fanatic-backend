import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useConcertData } from "../context/EventContext";
import shopSvg from "../assets/shop.svg";
import calender from "../assets/events.svg";

function EventDetails() {
  const { data, getEvents } = useConcertData();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  // const [formatDate, setFormatDate] = useState("");

  useEffect(() => getEvents(), []);

  const event = data?.find((c) => {
    // const newDate = new Date(event.event_start).toLocaleDateString("en-GB", {
    //   year: "numeric",
    //   month: "2-digit",
    //   day: "2-digit",
    // });
    // setFormatDate(newDate);
    // console.log(formatDate);
    return c.id === parseInt(id);
  });

  if (!event) {
    return <></>;
  }

  const handlePurchase = () => {
    const abortCont = new AbortController();

    const payload = {
      cancelUrl: window.location.href,
      successUrl: "http://localhost:5173/order-confirmation",
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
      metadata: {
        ticket_id: event.ticket_id,
      },
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
      <section id="header">
        <div className="image">
          <img
            src="https://cdns-images.dzcdn.net/images/cover/bcc309522e7aea6bc32c3d22966559da/200x200.jpg"
            alt=""
          />
        </div>
        <h2>
          {event.artist_name} live at {event.venue_name}
        </h2>
        <div>
          <img src={calender} alt="" />
          <span className="date">{event.event_start}</span>
        </div>
      </section>

      <section id="event">
        <div className="event-content">
          <div className="event-text">
            <p>hej</p>
          </div>
          <div className="ticket">
            <p>test</p>
            {event.venue_name !== "ONLINE" && (
              <div className="buy-container">
                <div className="quantity-counter">
                  <button
                    value={quantity}
                    onClick={(e) => {
                      setQuantity((quantity) => quantity - 1);
                    }}
                    disabled={quantity <= 1 || !quantity}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    value={quantity}
                    onClick={(e) => setQuantity((quantity) => quantity + 1)}
                    disabled={quantity === event.tickets_left}
                  >
                    +
                  </button>
                </div>
                <button
                  className="cart-button"
                  onClick={handlePurchase}
                  disabled={quantity < 1 || quantity > event.tickets_left}
                >
                  <img src={shopSvg} id="cart" alt="cart-button" />
                </button>
              </div>
            )}

            {event.venue_name == "ONLINE" && (
              <>
                <span>Watch livestream</span>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default EventDetails;
