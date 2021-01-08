import React from "react";
import "./Card.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              title="On The Block"
              src="/images/otbCard.png"
              text="on the block is a website..."
              label="2020"
            />
            <CardItem
              title="Where You At"
              src="/images/otbCard.png"
              text="wya is a website..."
              label="2018"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
