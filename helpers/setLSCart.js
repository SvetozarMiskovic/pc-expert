export const setLSCart = cart => {
  return localStorage.setItem("cart", JSON.stringify(cart));
};
