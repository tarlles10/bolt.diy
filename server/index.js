const express = require('express');
const { createClient } = require('libsql-client');

const app = express();
const port = 3001;

app.use(express.json()); // Middleware to parse JSON request bodies

const db = createClient({
  url: 'libsql://local.db' // In-memory database for WebContainer
});

app.get('/api/test', async (req, res) => {
  try {
    const result = await db.execute('SELECT 1');
    res.json({ success: true, message: 'Database connection successful!', data: result });
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).json({ success: false, message: 'Error connecting to database.', error: error.message });
  }
});

app.post('/api/signup', (req, res) => {
  // User signup logic here
  console.log('Signup route accessed', req.body);
  res.json({ success: true, message: 'Signup successful!' });
});

app.post('/api/login', (req, res) => {
  // User login logic here
  console.log('Login route accessed', req.body);
  res.json({ success: true, message: 'Login successful!' });
});

app.post('/api/forgot-password', (req, res) => {
  // Forgot password logic here
  console.log('Forgot password route accessed', req.body);
  res.json({ success: true, message: 'Forgot password request successful!' });
});

app.post('/api/logout', (req, res) => {
  // Logout logic here - for now, just send success
  console.log('Logout route accessed');
  res.json({ success: true, message: 'Logout successful!' });
});

app.listen(port, () => {
  console.log(\`Backend server running on http://localhost:\${port}\`);
});
