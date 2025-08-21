import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Patient from '../models/Patient.model.js';

export const registerUser = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    const existingUser = await Patient.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Patient({
      username,
      password: hashedPassword,
      email,
      role: role || 'patient',
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error in registerUser:', err);
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide username and password' });
    }

    const user = await Patient.findOne({ username, role: role || 'patient' });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET || 'your_jwt_secret', 
      { expiresIn: '1d' }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('Error in loginUser:', err);
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};