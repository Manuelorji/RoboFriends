import React from "react";
import "../components/Card.scss";

const Card = (props) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-image">
          <img alt="robots" src={`https://robohash.org/${props.id}?200x200`} />
        </div>
        <div className="card-details">
          <h3>{props.name}</h3>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
