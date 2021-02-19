import { cartActionTypes } from './cart.types';

//payload는 option이기에 여기서는 필요가 없다. 어차피 원래 reducer state저장되어있는 boolean값을 반대로만 돌리면 되기에.
export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const subtractItem = (item) => ({
  type: cartActionTypes.SUBTRACT_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
