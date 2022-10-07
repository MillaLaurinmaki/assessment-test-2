function calculateTotal(items) {
  let totalPrice = 0;
  for (const item of items) {
    totalPrice += item.price;
  }
  return totalPrice;
}
calculateTotal();

// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart average.
function calculateAvg(items) {
  const average = totalPrice / items.price.length;
  return average;
}
calculateAvg();

export { calculateTotal, calculateAvg };
