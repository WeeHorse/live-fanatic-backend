function TicketQuantityStatus({ quantity }) {
  return (
    <div className="quantity-status">
      {quantity == 0 && <span>sold out</span>}
      {quantity < 20 && quantity > 0 && (
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6.5" cy="6.5" r="6.5" fill="#EB0000" />
        </svg>
      )}
      {quantity > 20 && (
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6.5" cy="6.5" r="6.5" fill="#00DD31" />
        </svg>
      )}
    </div>
  );
}
export default TicketQuantityStatus;
