const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
<<<<<<< HEAD
const compression = require('compression');
=======

// Middleware
const corsOptions = {
  origin: 'https://frontendtesting-nine.vercel.app',
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
>>>>>>> 09abc5ae09eb15dac00eec5755f56c38a46f1f9f
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use(compression());

// MongoDB Configuration
const url = process.env.DB_URL;
const client = new MongoClient(url);
const dbName = 'Arohi_Travels';

client.connect()
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('MongoDB Connection Failed:', err));

// JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET;

// Utility: Get Database Instance
const getDb = () => client.db(dbName);

// Middleware: Authenticate Token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    console.log('Authorization Header:', token); // Log the entire authorization header

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }

    let tokenWithoutBearer;

    // If token includes 'Bearer' keyword, extract token after 'Bearer'
    if (token.startsWith('Bearer ')) {
        tokenWithoutBearer = token.split(' ')[1];
    } else {
        // If token doesn't include 'Bearer', use the token as is
        tokenWithoutBearer = token;
    }

    console.log('Extracted Token:', tokenWithoutBearer); // Log the extracted token

    if (!tokenWithoutBearer) {
        return res.status(401).json({ message: 'Access Denied: Invalid Token Format' });
    }

    // Verify the token
    jwt.verify(tokenWithoutBearer, JWT_SECRET, (err, user) => {
        if (err) {
            console.error('JWT Verification Error:', err); // Log JWT verification error
            return res.status(403).json({ message: 'Invalid Token' });
        }
        req.user = user;
        next();
    });
};


// Admin Login Endpoint
app.post('/admin-login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const db = getDb();
        const collection = db.collection('Admin');
        const admin = await collection.findOne({ username });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid Username or Password' });
        }

        const isPasswordMatch = await bcrypt.compare(password, admin.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid Username or Password' });
        }

        const token = jwt.sign({ username: admin.username }, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Protected Route: Contact Data
app.get('/contact-data', authenticateToken, async (req, res) => {
    try {
        const db = getDb();
        const collection = db.collection('Customer');
        const data = await collection.find().toArray();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching contact data:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Protected Route: Enquiry Data
app.get('/enquiry-data', authenticateToken, async (req, res) => {
    try {
        const db = getDb();
        const collection = db.collection('inTouch');
        const data = await collection.find().toArray();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching enquiry data:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Public Route: Submit Data
app.post('/submitData', async (req, res) => {
    const customerData = req.body;

    try {
        const db = getDb();
        const collection = db.collection('Customer');
        await collection.insertOne(customerData);

        return res.status(200).json({ message: 'We will contact you soon...' });
    } catch (error) {
        console.error('Error submitting customer data:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Public Route: Submit Enquiry Data
app.post('/inTouchData', async (req, res) => {
    const inTouchData = req.body;

    try {
        const db = getDb();
        const collection = db.collection('inTouch');
        await collection.insertOne(inTouchData);

        return res.status(200).json({ message: 'We will contact you soon...' });
    } catch (error) {
        console.error('Error submitting enquiry data:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

app.delete('/deleteCustomer',async(req,res)=>{

    const id = req.body;
    console.log(id);
    

    try {
        const db = getDb();
        const collection = db.collection('Customer');
        collection.deleteOne(id)

        res.status(200).json({message:'Deleted Successfully'})
    } catch (error) {
        res.status(401).json({message:error})
    }
})

app.delete('/delete-Enquiry',async(req,res)=>{

    const id = req.body;
    console.log(id);
    

    try {
        const db = getDb();
        const collection = db.collection('inTouch');
        collection.deleteOne(id)

        res.status(200).json({message:'Deleted Successfully'})
    } catch (error) {
        res.status(401).json({message:error})
    }
})

app.delete('/delete-All',(req,res)=>{
    const data = req.body;

    

    try {
        const db  = getDb();
        const collection = db.collection(data.title);
        collection.deleteMany({id:{$in:data.data}});
        
        res.status(200).json({message:'Deleted Successfully'})
    } catch (error) {

        res.status(401).json({message:error})
        
    }

   
    
})



// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
