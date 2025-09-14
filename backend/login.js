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

let db = [
  { username: "123456789V", password: "password123" },
  { username: "987654321V", password: "testpass" }
];

MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(MONGODB_DB);
    app.listen(PORT, () => {
      console.log('MongoDB connected successfully');
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required.' });
  }
  try {
    const user = await db.collection('users').findOne({ username, password });
    if (user) {
      res.json({ success: true, message: 'Login successful.' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed.' });
  }
});
