//Exporting module
console.log("Exporting module");

const shippingCost = 10;
const cart = [];

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
totalQuantity = 23;

export { totalPrice, totalQuantity };
