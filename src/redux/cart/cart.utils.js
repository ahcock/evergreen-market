//any unility functions that related to cart

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const subtractItemFromCart = (cartItems, cartItemToSubtract) => {
  const cartItem = cartItems.find((item) => item.id === cartItemToSubtract.id);

  if (cartItem.quantity === 1) {
    // return cartItems.filter((item) => item.id !== cartItemToSubtract.id);
    return cartItems;
  } else {
    return cartItems.map((item) => {
      return item.id === cartItemToSubtract.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
};
