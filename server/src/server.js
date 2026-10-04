/**
 * server.js
 * Entry point for the DesignSpark Express API.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const challengeRoutes = require('./routes/challengeRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(
    cors({
        origin: CLIENT_URL,
        methods: ['GET', 'POST'],
    })
);
app.use(express.json());

// ── Health Check ───────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'DesignSpark API is running',
    });
});

// ── Routes ─────────────────────────────────────────────────────────────────
app.use('/api/challenges', challengeRoutes);

// ── 404 catch-all ─────────────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Route not found' });
});

// ── Centralized Error Handler ──────────────────────────────────────────────
app.use(errorHandler);

// ── Start ──────────────────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 DesignSpark API running on http://localhost:${PORT}`);
    console.log(`   Health: http://localhost:${PORT}/api/health`);
});
