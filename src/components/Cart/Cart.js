import React from 'react';

import PropTypes from 'prop-types';

const Cart = (props) => {
  return (
      <div className="c-cart">
        <h2>Shopping Cart</h2>
        {
          !!props.selectedGames.length ? (
            props.selectedGames.map(game => (
              <div className="c-cart__item">
                <div className="c-cart__item-name">{game.name}</div>
              </div>
            ))
          ) : (
              'You did not select anything yet.'
          )
        }
        <button onClick={() => props.onSubmit(props.selectedGames)}>Buy now</button>
      </div>
  );
};

Cart.propTypes = {
  selectedGames: PropTypes.array
};

Cart.defaultProps = {
  selectedGames: [],
  onSubmit: PropTypes.func.isRequired
};

export default Cart;
