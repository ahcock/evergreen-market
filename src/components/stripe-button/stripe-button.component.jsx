import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublisshableKey =
    'pk_test_51IMvsxJksKxcDvsuBYX0Ap36R29mbuzMF92jaqDkUyGd31SoUJ4Ki03uRZOvt0fl6yNoNEHMpdCS9kiMQuEJeU2r00NjWvxu4C';

  const onToken = (token) => {
    alert('Payment Succesful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Evergreen Market"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublisshableKey}
    />
  );
};

export default StripeCheckoutButton;
