import React from 'react';
// import './cart-dropdown.styles.scss';
import { withRouter } from 'react-router-dom';
import CartItem from '../../cart-item/cart-item.component';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';
import { selectCartItems } from '../../../redux/cart/cart.reselect';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  GoToCheckoutButton,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItems>
      ) : (
        <EmptyMessage>Cart is Empty</EmptyMessage>
      )}

      <GoToCheckoutButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </GoToCheckoutButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// withRouter로 wrap을 함으로서, 이제 props로 history, match, location을 사용할 수 있게 됐다.
export default withRouter(connect(mapStateToProps)(CartDropdown));
