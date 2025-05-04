const cart = [];

function addToCart(itemName) {
  cart.push(itemName);
  alert(itemName + " added to cart!");
}

function placeOrder() {
  const order = {
    name: "John Doe", // You can use a form to get real input
    items: cart,
    address: "123 Street, City"
  };

  fetch('http://localhost:3000/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
  .then(response => response.json())
  .then(data => {
    alert('Order placed successfully!');
    console.log(data);
    cart.length = 0; // clear cart
  })
  .catch(error => {
    alert('Error placing order.');
    console.error(error);
  });
}
