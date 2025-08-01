const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../Models/User');
const jwt=require('jsonwebtoken')

require('dotenv').config()
const secretkey=process.env.JWT_KEY

// 1. Check if user exists

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: 'User not found. Please sign up.' });
    }

// 2. Compare passwords
console.log("Comparing:", password, "with", existingUser.password);

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

// 3. Create JWT token

    const token=jwt.sign({id:existingUser._id,email:existingUser.email},secretkey,{expiresIn:'1h'})

// 4. Send token to frontend

    res.status(200).json({ message: 'Successfully logged in',token });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;
