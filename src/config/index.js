const dotenv = require('dotenv');
dotenv.config();

const frontendUrl = (process.env.FRONTEND_URL || '').replace(/\/+$/, '') || 'http://localhost:5173';

const corsOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

if (frontendUrl) {
  corsOrigins.push(frontendUrl);
}

const rawOrigins = process.env.CORS_ORIGINS || process.env.CORS_ORIGIN || '';
if (rawOrigins) {
  rawOrigins
    .split(',')
    .map((origin) => origin.trim().replace(/\/+$/, ''))
    .filter(Boolean)
    .forEach((origin) => corsOrigins.push(origin));
}

module.exports = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongodbUri: process.env.MONGODB_URI,
  frontendUrl,
  corsOrigins: [...new Set(corsOrigins)],
  jwtSecret: process.env.JWT_SECRET || 'dev-insecure-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
};
