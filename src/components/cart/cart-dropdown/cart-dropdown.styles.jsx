import styled from 'styled-components';
import CustomButton from '../../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;
  align-items: center;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin-top: 30%;
`;

export const CartItems = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GoToCheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;
