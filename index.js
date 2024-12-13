const sales = [
  { product: "Laptop", quantity: 2, price: 1200 },
  { product: "Phone", quantity: 5, price: 800 },
  { product: "Tablet", quantity: 3, price: 600 },
];

const r = sales.reduce((start, sale) => {
  return start + sale.price;
}, 0);

console.log(`Hello ${r}`);
