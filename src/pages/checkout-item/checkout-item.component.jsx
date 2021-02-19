import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  subtractItem,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, subtractItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subtractItem(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  subtractItem: (item) => dispatch(subtractItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
