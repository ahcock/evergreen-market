import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  subtractItem,
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  QunatityContainer,
  Arrow,
  RemoveButton,
  Price,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, subtractItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <Name>{name}</Name>
      <QunatityContainer>
        <Arrow onClick={() => subtractItem(cartItem)}>&#10094;</Arrow>
        {quantity}
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QunatityContainer>
      <Price>{price}</Price>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  subtractItem: (item) => dispatch(subtractItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
