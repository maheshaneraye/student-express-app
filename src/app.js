const express = require('express');

const app = express();
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    service: 'student-node-express-app',
    status: 'online',
    message: 'Welcome to Student Express Web Service'
  });
});

// Health check probe
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Demo API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    runtime: `Node.js ${process.version}`
  });
});

module.exports = app;
