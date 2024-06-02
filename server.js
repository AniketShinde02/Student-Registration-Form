const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();
const port = 3000;

// Middleware setup
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json()); // Ensure JSON body parsing

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/students', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Schema definition
const userSchema = new mongoose.Schema({
  prn_no: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  branch: {
    type: String,
    enum: ['engineering', 'diploma', 'graduate', 'not listed'],
  },
});

const User = mongoose.model('User', userSchema);

// Database connection check
db.once('open', () => {
  console.log('MongoDB connection established');
});

// Route to serve registration form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'registration-form-1.html'));
});

// Registration route
app.post('/register', async (req, res) => {
  const { prn_no, name, email, password, branch } = req.body;

  try {
    console.log('Received registration request for:', prn_no, name, email);

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ prn_no }, { email }] });
    if (existingUser) {
      console.log('User already exists:', existingUser);
      return res.sendFile(path.join(__dirname, 'alreadyExists.html'));
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);

    // Create a new user
    const user = new User({
      prn_no,
      name,
      email,
      password: hashedPassword,
      branch,
    });

    // Save the user
    await user.save();
    console.log('User successfully registered:', user);

    // Return success response
    res.sendFile(path.join(__dirname, 'registrationSuccessful.html'));
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).sendFile(path.join(__dirname, 'alreadyExists.html'));
  }
});

// Start the server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
