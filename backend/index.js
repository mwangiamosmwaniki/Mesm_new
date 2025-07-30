const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Item = mongoose.model('Item', { name: String });

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/items', async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.status(201).json(item);
});

app.listen(5000, () => console.log('✅ Backend running on http://localhost:5000'));

app.get('/testimonials', (req, res) => {
  const testimonials = [
    { name: "John Doe", message: "Great service!" },
    { name: "Jane Smith", message: "Very professional team." },
    { name: "Ali Mwangi", message: "Affordable and fast." },
  ];
  res.json(testimonials);
});
