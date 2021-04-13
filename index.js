const products = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories"
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones"
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories"
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches"
  }
];



/* Create a function "quantityByCategories" with one parameter "products".

This function "sortProductsByPrice" should sort input array of products by price of each product in ascending order and return resulting array.
*/

const quantityByCategories = products =>
products.sort((a,b) => a.price - b.price);

console.log(quantityByCategories(products));

