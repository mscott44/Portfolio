import React from "react";
import Button from "react-bootstrap/Button";
import "./Button.css";

/*passing in properties from Cards*/
function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__title">
            <h1> {props.title} </h1>
          </div>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Project" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <div className="button__container">
              <a href={props.href}>
                <Button className="pro--button">{props.web}</Button>
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
