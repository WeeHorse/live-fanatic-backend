import { Link } from "react-router-dom";
function Card() {
  // const [data] = props.data;
  return (
    <>
      <div className="card">
        <div className="header">
          <img
            src="https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/4:3/w_2000,h_1500,c_limit/bieber-coverstory-square.jpg"
            alt="photo"
          />
        </div>
        <div className="text">
          <h1 className="title">Justin Bieber</h1>
          <span> Tickets available:</span>
          <p className="info">Live at Plan B, 2022-10-08</p>
        </div>
        <a href="#" className="btn">
          <span className="material-symbols-outlined">x</span>
        </a>
      </div>
      <div className="card">
        <div className="header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg"
            alt="photo"
          />
        </div>
        <div className="text">
          <h1 className="title">Justin Bieber</h1>
          <span> Tickets available:</span>
          <p className="info">Live at Plan B, 2022-10-08</p>
        </div>
        <a href="#" className="btn">
          <span className="material-symbols-outlined">x</span>
        </a>
      </div>
    </>
  );
}

export default Card;
