// Example API route for Vercel serverless functions
// Place API routes in the /api directory
// This is a simple example - replace with your actual API logic

import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Example GET endpoint
  if (req.method === 'GET') {
    return res.status(200).json({
      message: 'Hello from Vercel API!',
      timestamp: new Date().toISOString(),
      data: []
    });
  }

  // Example POST endpoint
  if (req.method === 'POST') {
    const { body } = req;
    return res.status(200).json({
      message: 'Data received',
      received: body,
      timestamp: new Date().toISOString()
    });
  }

  // Method not allowed
  res.status(405).json({ error: 'Method not allowed' });
}