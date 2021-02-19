import React from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-item/cart-item.component';
import { selectCartItems } from '../../../redux/cart/cart.reselect';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);