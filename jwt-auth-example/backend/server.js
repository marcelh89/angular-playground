import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = '123456789';
const expiresIn = '1h';

// Fake user database
const users = [
  {
    id: 1,
    username: 'user',
    password: 'pass', // In a real app, this should be hashed!
  },
];

// Function to create a JWT token
const createToken = (payload) => jwt.sign(payload, SECRET_KEY, { expiresIn });

// Function to verify a JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};

// Mock login endpoint
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const token = createToken({ sub: user.id });
    res.json({ access_token: token });
  } else {
    res.status(401).send({ error: 'Invalid username or password' });
  }
});

// Protected route example
app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) return res.status(401).send({ error: 'No token provided' });

  const verifiedToken = verifyToken(token);

  if (verifiedToken) {
    res.send({ data: 'This is protected data.' });
  } else {
    res.status(401).send({ error: 'Invalid token' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});