const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Fake database
let orders = [];

// Route: Home
app.get('/', (req, res) => {
  res.send('Hungr Backend is running!');
});

// Route: Receive Order
app.post('/order', (req, res) => {
  const { name, items, address } = req.body;
  if (!name || !items || !address) {
    return res.status(400).json({ message: 'Missing order details' });
  }

  const newOrder = { name, items, address, id: Date.now() };
  orders.push(newOrder);

  console.log('New order:', newOrder);
  res.status(200).json({ message: 'Order received', order: newOrder });
});

// Route: List Orders (for admin)
app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});