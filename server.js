const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get a single user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Create a new user
app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(user); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

mongoose.connect('mongodb+srv://admin:root@sandeepapi.hmlbbst.mongodb.net/testing-API?retryWrites=true&w=majority&appName=SandeepAPI')
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error:', err);
    });
