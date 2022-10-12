import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  const cardComponent = robots.map((robot, i) => {
    return (
      <Card
        key={i}
        id={robot[i].id}
        name={robot[i].name}
        email={robot[i].email}
      />
    );
  });

  return <div className="cards">{cardComponent}</div>;
}

export default CardList;
