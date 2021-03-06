import styled from 'styled-components';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

export const CheckOutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckOutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckOutBlockContainer = styled.div`
  text-transform: capitalize;
  flex: 2.3;

  &:last-child {
    flex: 0.8;
  }
`;

export const TotalAmout = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 35px;
`;

export const PaymentButton = styled(StripeCheckoutButton)`
  margin-left: auto;
  margin-top: 50px;
`;

export const TestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
