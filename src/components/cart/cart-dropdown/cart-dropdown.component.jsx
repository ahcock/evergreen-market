import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-item/cart-item.component';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';
import { selectCartItems } from '../../../redux/cart/cart.reselect';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Cart is Empty</span>
      )}

      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// withRouter로 wrap을 함으로서, 이제 props로 history, match, location을 사용할 수 있게 됐다.
export default withRouter(connect(mapStateToProps)(CartDropdown));
