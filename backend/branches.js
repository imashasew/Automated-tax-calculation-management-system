const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '../.env.local' });

const app = express();
const PORT = process.env.PORT || 5001;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://lahirusuwahas8:lahirusuwahas8@cluster0.sfi3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const MONGODB_DB = process.env.MONGODB_DB || "land_tax_system";

app.use(cors());
app.use(express.json());

const demoBranches = [
  {
    id: 1,
    name: 'Colombo Branch',
    address: 'No 1200/6, Mihikatha Medura, Rajamalwatta Road, Battaramulla',
    phone: '+94 11 279 7400',
    email: 'colombo@landtax.lk',
  },
  {
    id: 2,
    name: 'Gampaha Branch',
    address: 'No 45, Main Street, Gampaha',
    phone: '+94 33 222 1234',
    email: 'gampaha@landtax.lk',
  },
  {
    id: 3,
    name: 'Kalutara Branch',
    address: 'No 78, Riverside Road, Kalutara',
    phone: '+94 34 223 5678',
    email: 'kalutara@landtax.lk',
  },
];

let db;

MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true })
  .then(async client => {
    db = client.db(MONGODB_DB);
  
    const count = await db.collection('branches').countDocuments();
    if (count === 0) {
      await db.collection('branches').insertMany(demoBranches);
      console.log('Inserted demo branches data into MongoDB');
    }
    app.listen(PORT, () => {
      console.log('MongoDB connected successfully');
      console.log(`Branches backend running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.get('/api/branches', async (req, res) => {
  try {
    const { q } = req.query;
    const collection = db.collection('branches');
    let query = {};
    if (q) {
      const search = q.toLowerCase();
      query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { address: { $regex: search, $options: 'i' } }
        ]
      };
    }
    const branches = await collection.find(query).toArray();
    res.json(branches);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch branches.' });
  }
});
