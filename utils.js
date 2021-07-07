// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  solution = w * h
  return solution
}

const perimeter = (w, h) => {
  solution = 2 * (w * h)
  return solution
}

const circleArea = r => {
  solution = r^2 * Math.PI
  return solution
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  return shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  for (i = 0; i > shoppingCart.length; i++) {
    if (shoppingCart[i] === item) shoppingCart.slice(i, 1)
  }
  return shoppingCart
}


module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
