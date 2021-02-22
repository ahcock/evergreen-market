import React from 'react';
// import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.reselect';
import CheckoutItem from '../checkout-item/checkout-item.component';

import {
  CheckOutPageContainer,
  CheckOutHeaderContainer,
  CheckOutBlockContainer,
  TotalAmout,
  PaymentButton,
  TestWarning,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckOutPageContainer>
    <CheckOutHeaderContainer>
      <CheckOutBlockContainer>
        <span>Product</span>
      </CheckOutBlockContainer>
      <CheckOutBlockContainer>
        <span>Description</span>
      </CheckOutBlockContainer>
      <CheckOutBlockContainer>
        <span>Quantity</span>
      </CheckOutBlockContainer>
      <CheckOutBlockContainer>
        <span>Price</span>
      </CheckOutBlockContainer>
      <CheckOutBlockContainer>
        <span>Remove</span>
      </CheckOutBlockContainer>
    </CheckOutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalAmout>
      <span>TOTAL: ${total}</span>
    </TotalAmout>
    <TestWarning>
      *다음 크레딧 카드 번호를 테스트용으로 사용해 보세요 <br />
      4242 4242 4242 4242 - EXP: 01:2022 - CVV: 123
    </TestWarning>
    <PaymentButton price={total} />
  </CheckOutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
