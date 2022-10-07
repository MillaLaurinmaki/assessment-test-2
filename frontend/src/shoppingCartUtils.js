function calculateTotal(items) {
  console.log(items);
  let totalPrice = 0;
  for (const item of items) {
    totalPrice += Number(item.price);
  }
  return totalPrice;
}

function calculateAvg(items) {
  let totalPrice = 0;
  for (const item of items) {
    totalPrice += Number(item.price);
  }
  const average = totalPrice / items.length;
  console.log(average);
  return average;
}

export { calculateTotal, calculateAvg };
