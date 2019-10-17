import "./Game.scss";

import React from "react";
import PropTypes from "prop-types";

const Game = props => {
  return (
    <div className="c-game">
      <div className="c-game__img-wrapper">
        <img src={props.image} className="c-game__img" />
      </div>
      <div className="c-game__content">
        <div className="c-game__name">{props.name}</div>
        <div className="c-game__price">
          Price: {props.price > 0 ? props.price : "Free"}
        </div>
        <button className="o-button c-game__add-button" onClick={props.onAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

Game.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default Game;
