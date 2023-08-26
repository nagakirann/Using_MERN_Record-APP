const express = require('express');
const {  SECRET } = require("../middleware/auth");
const { User } = require("../db");
const  jwt =  require( 'jsonwebtoken');
const router = express.Router();

  router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username }).maxTimeMS(30000);
    console.log(user);
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
  });
  
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username,password);
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
 
  
 
  
  module.exports = router;