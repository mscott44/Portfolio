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
              /* path="/onthebloc"*/
              text="A React website built with three other classmates called On The Block. Users would plan block parties by choosing from different local small business’s to cater, entertain..etc at their parties."
              label="Created in 2020 - more coming soon"
              web="Click To Visit On The Block"
              href="https://ontheblock.vercel.app/"
            />

            <CardItem
              title="Where You At"
              src="/images/wya.png"
              text="An app built with two other members of the CSSI program, implementing HTML, Python, JavaScript, and CSS. This app allowed college students to have easy access to their peers social calendars to make planning social outing events easier.
              "
              label="Created in 2018"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
