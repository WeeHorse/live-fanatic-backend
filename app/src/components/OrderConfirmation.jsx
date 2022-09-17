import { useEffect, useState } from "react";

function OrderConfirmation() {
  const [data, setData] = useState({});
  const fetchData = async () => {
    let response = await fetch("/data/checkout");
    if (response.ok) {
      response = await response.json();
      setData(response);
      console.log(response);
    }
  };

  const postData = async () => {
    if (!data) return <></>;
    if (
      data.checkoutSession.payment_status === "paid" &&
      data.checkoutSession.status === "complete"
    ) {
      const payload = {
        user: 1,
        ticket: data.checkoutSession.metadata.ticket_id,
        quantity: data.checkoutSession.line_items.data[0].quantity,
        session_id: data.checkoutSession.id,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload),
      };
      let response = await fetch("/data/users_tickets", requestOptions);
      if (response.ok) {
        response = await response.json();
      } else {
        setError(response.statusText);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    postData();
  }, [data]);

  return (
    <>
      <h1>hej</h1>
    </>
  );
}
export default OrderConfirmation;
