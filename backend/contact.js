require('dotenv').config({ path: '../.env.local' });
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://lahirusuwahas8:lahirusuwahas8@cluster0.sfi3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const MONGODB_DB = process.env.MONGODB_DB || "land_tax_system";

app.use(cors());
app.use(express.json());

let db;

MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(MONGODB_DB);
    app.listen(PORT, () => {
        console.log('MongoDB connected successfully');
console.log(`Server running on port ${PORT}`);
     
    });
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Contact Us endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const contactCollection = db.collection('contacts');
    await contactCollection.insertOne({ name, email, message, date: new Date() });
    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form.' });
  }
});
